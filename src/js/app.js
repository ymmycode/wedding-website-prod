import barba from '@barba/core'
import barbaCss from '@barba/css'
import barbaPrefetch from '@barba/prefetch'

// DOM
const body = document.querySelector(`body`)

// Barba Global hook, run befor any transition
barba.hooks.before((data) => 
{
    // getting color data from background dataset
    const background = data.current.container.dataset.background 
    // console.log(background) // expected value hexadecimal color from data-background
    
    // and set background color
    body.style.setProperty(`--page-background`, background)
})

// tell barba to use plugins
barba.use(barbaCss)
barba.use(barbaPrefetch)

// barba initialization
barba.init({
    transitions: [
        {
            name: `home`,
            // sync: true,
            to: {
                namespace: [`home`]
            },
            // once(){}, // page load animation 
            leave(){}, // leaving transition
            enter(){}, // entering transition 
        },
        {
            name: `contact`,
            to: {
                namespace: [`contact`]
            },
            leave(){}, // leaving transition
            enter(){}, // entering transition
        }
    ]
})