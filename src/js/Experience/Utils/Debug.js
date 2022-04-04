import Experience from "../Experience";
import GUI from 'three/examples/jsm/libs/lil-gui.module.min'

export default class Debug 
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // debug gui
        // this.active = window.location.hash === `#debug` 

        // this.active = true
        this.active = false

        this.gui = new GUI()
        this.gui.hide()

        if(this.active)
        {
            this.gui.show()
        }

        
    }
}