import Ring1 from "./Rings/Ring1";
import Ring2 from "./Rings/Ring2";
import Experience from "../../Experience";
import * as THREE from 'three'

export default class Rings
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // time
        this.time = this.experience.time

        // Grouping
        this.ringGroup = new THREE.Group()
        this.ringGroupParent = new THREE.Group()

        // Rings
        this.ring1 = new Ring1()
        this.ring2 = new Ring2()

        // ring setup
        this.ringSetup()

        // adding to the scene
        this.scene.add(this.ringGroupParent)

        this.rotate()
    }

    ringSetup()
    {
        this.ring1 = new Ring1()
        this.ring2 = new Ring2()
        this.ringGroup.add(this.ring1.baseRing.scene)
        this.ringGroup.add(this.ring1.decalRing.scene)
        this.ringGroup.add(this.ring2.baseRing.scene)
        this.ringGroup.add(this.ring2.decalRing.scene)
        this.ringGroup.rotation.y = - Math.PI * .25
        this.ringGroupParent.add(this.ringGroup)
    }

    rotate()
    {
        this.ringGroup.rotation.y += this.time.delta * .001 / 3
    }
}
