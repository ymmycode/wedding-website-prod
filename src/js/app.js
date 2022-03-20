// easter egg
console.log('%cMade with heart by', `color: mediumpurple; font-size: 15px; `)
console.log('%c ', 'font-size: 50px; background:url(https://raw.githubusercontent.com/ymmycode/wedding-website-prod/wip-3d-scene/static/easter/easter.gif) no-repeat; padding-right: 500px; padding-bottom: 70px')

// import plugin
import barba from '@barba/core'
import barbaCss from '@barba/css'
import barbaPrefetch from '@barba/prefetch'
// import gsap from 'gsap''

// importing animation
// import {revealPage} from './Animation'

// importing scene
import Experience from './Experience/Experience.js'

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

// Canvas DOM
const canvas =  document.querySelector(`canvas.webgl`)

// Init Experience
const experience = new Experience(canvas)

// tell barba to use plugins
barba.use(barbaCss)
barba.use(barbaPrefetch)

// barba initialization
barba.init({

        // views: [
    //     {
    //         namespace: 'comments',
    //         beforeEnter({next})
    //         {
    //             //
    //         },
    //     },
    // ],

    transitions: [
        {
            // don't mind the enter transition at home page
            // just want to use leave transition
            name: `home`,
            to: {
                namespace: [`home`]
            },
            // once(){},
            leave(){},
            enter(){}
        },
        
        {
            name: `ring`,
            to: {
                namespace: [`ring`]
            },
            once(){},
            leave(){},
            enter(){}
        },

        {
            name: `partner`,
            to: {
                namespace: [`partner`]
            },
            once(){},
            leave(){},
            enter(){}
        },

        {
            name: `location`,
            to: {
                namespace: [`location`]
            },
            once(){},
            leave(){},
            enter(){} 
        },

        {
            name: `quote`,
            to: {
                namespace: [`quote`]
            },
            once(){},
            leave(){},
            enter(){}
        },

        {
            name: `story`,
            to: {
                namespace: [`story`]
            },
            once(){},
            leave(){},
            enter(){}
        },

        {
            name: `gift`,
            to: {
                namespace: [`gift`]
            },
            once(){},
            leave(){},
            enter(){}
        },

        {
            name: `comments`,
            to: {
                namespace: [`comments`]
            },
            once(){},
            leave(){},
            enter(){}
        },

    ],

    // logLevel: 'debug',
    // logLevel: 'error',
    // logLevel: 'warning',
})