import EventEmitter from "./EventEmitter"


export default class Sizes extends EventEmitter
{
    constructor()
    {
        super() 

        // viewport width
        this.width = window.innerWidth

        // viewport height
        this.height = window.innerHeight

        // device pixel ration
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // windows resize event
        window.addEventListener(`resize`, () => 
        {
            // viewport width
            this.width = window.innerWidth

            // viewport height
            this.height = window.innerHeight

            // device pixel ration
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger(`resize`)
        })
    }
}