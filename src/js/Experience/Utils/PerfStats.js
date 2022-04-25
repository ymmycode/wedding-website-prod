import Stats from 'three/examples/jsm/libs/stats.module'

export default class PerfStats 
{
    constructor()
    {
        // performance stats
        this.stats = new Stats()

        document.body.addEventListener(`keydown`, (e)=> 
        {
            if(e.code === `KeyF`)
            {
                document.body.appendChild(this.stats.dom)
                this.stats.showPanel(0)   
            }
        })
    }
}