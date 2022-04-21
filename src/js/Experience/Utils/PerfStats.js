import Stats from 'three/examples/jsm/libs/stats.module'

export default class PerfStats 
{
    constructor()
    {
        // performance stats
        this.stats = new Stats()

        this.stats.showPanel(0)

        document.body.appendChild(this.stats.dom)
    }
}