// easter egg
// console.log('%cMade with heart by', `color: mediumpurple; font-size: 15px; `)
// console.log('%c ', 'font-size: 50px; background:url(https://raw.githubusercontent.com/ymmycode/wedding-website-prod/wip-3d-scene/static/easter/easter.gif) no-repeat; padding-right: 500px; padding-bottom: 70px')

// import plugin
import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import gsap from 'gsap'

// importing animation
import { 
    showMenuButton,
    resetMenu,
    gateTransition, 
    ringEnterTransition,
    partnerEnterTransition,
    locationEnterTransition,
} from './Animation'

// import menu
import menu from './Menu/menu'

// importing scene
import Experience from './Experience/Experience.js'

// refresh automatically to home
const refreshToTheHome = () => 
{
    //url
    const homepage = `/`

    // when user refresh the page, redirect to hompeage
    // solution 2
    window.onbeforeunload = () => 
    {
        window.setTimeout(()=> 
        {
            window.location.href = homepage
        }, 0)
        window.onbeforeunload = null
    }
}
refreshToTheHome()

// make gsap global
// window.GSAP = gsap

// Canvas DOM
const canvas =  document.querySelector(`canvas.webgl`)

// Init Experience
const experience = new Experience(canvas)

// target for anmation
const animationTargets = {
    camera: experience.camera,
    rings: () => {if(experience.World.rings) return experience.World.rings},
    partner: () => {if(experience.World.partnerPhotos) return experience.World.partnerPhotos},
    map: () => {if(experience.World.map) return experience.World.map}
}

// menu
const resetMenuAndTransition = (container) => 
{
    document.querySelector(`.transition`).style.transform = `translateY(-100%);`
    resetMenu(container)
}


// tell barba to use plugins
barba.use(barbaPrefetch)

// barba initialization
barba.init({
    views: [
        {
            namespace: 'home',
            beforeLeave: (({next}) => 
            {
                gateTransition(animationTargets.camera)
            })
        },

        {
            namespace: 'ring',
            afterEnter: (({next}) => 
            {
                menu(next.container)

                // ring leave animation
                // scale down, hide
                const enterTransition = setTimeout(() =>
                {
                    ringEnterTransition(animationTargets.camera, animationTargets.rings(), next.container)
                    showMenuButton(next.container)
                }, 1050)
            }), 

            beforeLeave: ({current}) =>
            {
                resetMenuAndTransition(current.container)
            }
        },
        
        {
            namespace: 'partner',
            afterEnter: (({next}) => 
            {
                menu(next.container)

                // ring leave animation
                // scale down, hide
                const enterTransition = setTimeout(() =>
                {
                    partnerEnterTransition(animationTargets.camera, animationTargets.partner(), next.container)
                    showMenuButton(next.container)
                }, 1050)
            }), 

            beforeLeave: ({current}) =>
            {
                resetMenuAndTransition(current.container)
            }
        },

        {
            namespace: 'location',
            afterEnter: (({next}) => 
            {
                menu(next.container)
                
                // ring leave animation
                // scale down, hide
                const enterTransition = setTimeout(() =>
                {
                    locationEnterTransition(animationTargets.camera, animationTargets.map(), next.container)
                    showMenuButton(next.container)
                }, 1050)
            }), 

            beforeLeave: ({current}) =>
            {
                resetMenuAndTransition(current.container)
            }
        },
    ],

})


// animation chamber
// animationTargets.camera.controls.enabled = true

// loading screen change z indx -99 to 4
