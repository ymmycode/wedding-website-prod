// easter egg
console.log('%cMade with heart by', `color: mediumpurple; font-size: 15px; `)
console.log('%c ', 'font-size: 50px; background:url(https://raw.githubusercontent.com/ymmycode/wedding-website-prod/wip-3d-scene/static/easter/easter.gif) no-repeat; padding-right: 500px; padding-bottom: 70px')

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
    quoteEnterTransition,
    commentEnterTransition,
    giftEnterTransition,
    galleryEnterTransition,
} from './Animation'

// import menu
import menu from './Menu/menu'

// importing scene
import Experience from './Experience/Experience.js'

// importing comments
import comment from './Comment/comment'

// import cliboard
import copyToClipboard from '../Clip/copyToClipboard'

// Canvas DOM
const canvas =  document.querySelector(`canvas.webgl`)

// Init Experience
const experience = new Experience(canvas)

// target for anmation
const animationTargets = {
    camera: experience.camera,
    gate: () => {if(experience.World.gate) return experience.World.gate},
    rings: () => {if(experience.World.rings) return experience.World.rings},
    partner: () => {if(experience.World.partnerPhotos) return experience.World.partnerPhotos},
    map: () => {if(experience.World.map) return experience.World.map},
    gallery: () => {if(experience.World.gallery) return experience.World.gallery},
}

// menu
const resetMenuAndTransition = (container) => 
{
    document.querySelector(`.transition`).style.transform = `translateY(-100%);`
    resetMenu(container)
}

// disabling loading screen if starting from gate
let notFromGate = false

// date interval
let updateDate

// tell barba to use plugins
barba.use(barbaPrefetch)

// barba initialization
barba.init({
    timeout: 120000,

    views: [
        {
            namespace: 'home',
            beforeLeave: ({current}) => 
            {
                // animationTargets.gate().tracked = false
                gateTransition(animationTargets.camera)

                notFromGate = false
            }
        },

        {
            namespace: 'ring',
            afterEnter: (({next}) => 
            {
                if(!notFromGate) next.container.querySelector(`#navigation-menu`).style.opacity = 0

                menu(next.container)

                // notFromGate && (next.container.querySelector(`.loading-screen`).style.zIndex = 4)

                updateDate = setInterval(() => 
                {
                    countdown(next.container)
                }, 1000)

                // ring leave animation
                // scale down, hide
                // const enterTransition = setTimeout(() =>
                // {
                    ringEnterTransition(animationTargets.camera, animationTargets.rings(), next.container, notFromGate)
                    
                    if(!notFromGate) showMenuButton(next.container)
                    
                    notFromGate = true
                    // animationTargets.gate().tracked = false
                // }, 600)
            }), 

            beforeLeave: ({current}) =>
            {
                clearInterval(updateDate)
                resetMenuAndTransition(current.container)
            }
        },
        
        {
            namespace: 'partner',
            afterEnter: (({next}) => 
            {
                menu(next.container)
                // next.container.querySelector(`.loading-screen`).style.zIndex = 4

                experience.World.container = next.container

                // ring leave animation
                // scale down, hide
                // const enterTransition = setTimeout(() =>
                // {   
                    partnerEnterTransition(animationTargets.camera, animationTargets.partner(), next.container)
                    // animationTargets.partner().tracked = true
                    if(!notFromGate) showMenuButton(next.container)
                    notFromGate = true
                    // animationTargets.gate().tracked = false
                    // animationTargets.partner().updatePartnerPosition()
                // }, 100)
            }), 

            beforeLeave: ({current}) =>
            {
                animationTargets.partner().disableTracking()
                resetMenuAndTransition(current.container)
            }
        },

        {
            namespace: 'location',
            afterEnter: (({next}) => 
            {
                menu(next.container)
                // next.container.querySelector(`.loading-screen`).style.zIndex = 4
                
                next.container.querySelector(`.close`).onclick = () => 
                {
                    next.container.querySelector(`.loc-detail`).classList.toggle(`active`)
                }

                next.container.querySelector(`.geo-link`).onclick = () => 
                {
                    next.container.querySelector(`.loc-detail`).classList.toggle(`active`)
                }

                // ring leave animation
                // scale down, hide
                // const enterTransition = setTimeout(() =>
                // {
                    locationEnterTransition(animationTargets.camera, animationTargets.map(), next.container)
                    if(!notFromGate) showMenuButton(next.container)
                    notFromGate = true
                    // animationTargets.gate().tracked = false
                // }, 600)
            }), 

            beforeLeave: ({current}) =>
            {
                animationTargets.camera.controls.enabled = false
                resetMenuAndTransition(current.container)
            }
        },

        
        {
            namespace: 'quote',
            afterEnter: (({next}) => 
            {
                menu(next.container)
                // next.container.querySelector(`.loading-screen`).style.zIndex = 4
                
                // ring leave animation
                // scale down, hide
                // const enterTransition = setTimeout(() =>
                // {
                    quoteEnterTransition(animationTargets.camera, next.container)
                    if(!notFromGate) showMenuButton(next.container)
                    notFromGate = true
                    // animationTargets.gate().tracked = false
                // }, 600)
            }), 

            beforeLeave: ({current}) =>
            {
                resetMenuAndTransition(current.container)
            }
        },

        {
            namespace: 'story',
            afterEnter: (({next}) => 
            {
                menu(next.container)
                // next.container.querySelector(`.loading-screen`).style.zIndex = 4
                
                // ring leave animation
                // scale down, hide
                // const enterTransition = setTimeout(() =>
                // {
                    galleryEnterTransition(animationTargets.camera, animationTargets.gallery(), next.container)
                    if(!notFromGate) showMenuButton(next.container)
                    notFromGate = true
                    // animationTargets.gate().tracked = false
                
                // }, 600)
            }), 

            beforeLeave: ({current}) =>
            {
                resetMenuAndTransition(current.container)
                animationTargets.camera.resetFar()
            }
        },

        {
            namespace: 'gift',
            afterEnter: (({next}) => 
            {
                menu(next.container)
                copyToClipboard(next.container)
                // next.container.querySelector(`.loading-screen`).style.zIndex = 4
                
                // ring leave animation
                // scale down, hide
                // const enterTransition = setTimeout(() =>
                // {
                    giftEnterTransition(animationTargets.camera, next.container)
                    if(!notFromGate) showMenuButton(next.container)
                    notFromGate = true
                    // animationTargets.gate().tracked = false
                // }, 600)
            }), 

            beforeLeave: ({current}) =>
            {
                resetMenuAndTransition(current.container)
            }
        },

        {
            namespace: 'comments',
            afterEnter: (({next}) => 
            {
                menu(next.container)
                next.container.querySelector(`#comments-container`).style.zIndex = 2
                // next.container.querySelector(`.loading-screen`).style.zIndex = 4
                
                // ring leave animation
                // scale down, hide
                // const enterTransition = setTimeout(() =>
                // {
                    comment(next.container)
                    commentEnterTransition(animationTargets.camera, next.container)
                    if(!notFromGate) showMenuButton(next.container)
                    notFromGate = true
                    // animationTargets.gate().tracked = false
                // }, 600)
            }), 

            beforeLeave: ({current}) =>
            {
                current.container.querySelector(`#comments-container`).style.zIndex = 0
                resetMenuAndTransition(current.container)
            }
        },
    ],

    preventRunning: true,

    logLevel: "error"
})


/// COUNTDOWN TIMER
const countdown = (container) => 
{
    const year = `2022`
    const month = `07`
    const day = `16`
    const dateString = `${year}-${month}-${day}T00:00:00`

    const deadline = new Date(dateString).getTime()
    const now = new Date().getTime()

    const gap = deadline - now
    
    // conversion
    const secondC = 1000
    const minuteC = secondC * 60
    const hourC = minuteC * 60
    const dayC = hourC * 24

    // calculate and show
    if(gap > 0) 
    {
        calcDate(gap, dayC, hourC, minuteC, container)
    }
    else 
    {
        clearInterval(updateDate)
    }
}

const calcDate = (gap, day, hour, minute, container) => 
{
    // calculate time
    const calcDay = Math.trunc(gap / day)
    const calcHour = Math.trunc((gap % day) / hour)
    const calcMin = Math.trunc((gap % hour) / minute)

    container.querySelector(`.days`).innerText = calcDay
    container.querySelector(`.hours`).innerText = calcHour
    container.querySelector(`.minutes`).innerText = calcMin
}