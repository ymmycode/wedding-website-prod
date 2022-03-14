// import plugin
import barba from '@barba/core'
import barbaCss from '@barba/css'
import barbaPrefetch from '@barba/prefetch'

// importing scene
import Experience from './Experience/Experience'
import Experience2 from './Experience/Experience2'
import Experience3 from './Experience/Experience3'

// tell barba to use plugins
barba.use(barbaCss)
barba.use(barbaPrefetch)

// WebGL Experiences
let experience, experience2, experience3

// barba initialization
barba.init({
    transitions: [
        {
            name: `home`,
            // sync: true,
            to: {
                namespace: [`home`]
            },
            leave(){}, // leaving transition
            enter(){}, // entering transition 
        },
        
        {
            name: `ring`,
            to: {
                namespace: [`ring`]
            },
            leave(){}, // leaving transition
            enter(){}, // entering transition
        },

        {
            name: `partner`,
            to: {
                namespace: [`partner`]
            },
            leave(){}, // leaving transition
            enter(){}, // entering transition
        },
    ],
    views: [
        {
            namespace: 'home',
            beforeEnter({next})
            {
                experience = new Experience(next.container)
            },
            beforeLeave()
            {
                // destroying scene
                experience.destroyThisScene()
            },
        },

        {
            namespace: 'ring',
            beforeEnter({next})
            {
                experience2 =  new Experience2(next.container)
            },
            beforeLeave()
            {
                // destroying scene
                experience2.destroyThisScene()
            },
        },
        
        {
            namespace: 'partner',
            beforeEnter({next})
            {
                experience3 =  new Experience3(next.container)
            },
            beforeLeave()
            {
                // destroying scene
                experience3.destroyThisScene()
            },
        },
    ]
})