import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter 
{
    constructor()
    {
        super()

        // time started
        this.start = Date.now()

        // current time
        this.current = this.start

        // elpsed time
        this.elapsed = 0

        // delta time
        this.delta = 16

        // update the frame
        window.requestAnimationFrame(() => 
        {
            this.update()
        })
    }

    update()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger(`update`)

        window.requestAnimationFrame(() => 
        {
            this.update()
        })
    }
}