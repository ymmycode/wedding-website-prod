

let instance = null

export default class Experience 
{
    constructor(container)
    {
        const canvas = container.querySelector(`canvas.webgl`)

        // singleton
        // test if any instance of this
        if (instance)
        {
            return instance
        }

        instance = this

        // how to destroy things
        this.destroyThisScene = this.destroyThisScene
    }

    destroyThisScene()
    {
        console.log(`This Scene is Destroyed`)
    }
}