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

        // debug
        this.debug = this.experience.debug.gui

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

        // test cube
        this.mesh = new THREE.Mesh(
            new THREE.BoxBufferGeometry(.5,.5,.5),
            new THREE.MeshBasicMaterial({color: `#ff00ff`})
        )
        // this.ringGroupParent.add(this.mesh)

        this.rotate()

        this.debugRings()
    }

    ringSetup()
    {
        this.ring1 = new Ring1()
        this.ring2 = new Ring2()
        this.ringGroup.add(this.ring1.baseRing.scene)
        this.ringGroup.add(this.ring1.decalRing.scene)
        this.ringGroup.add(this.ring2.baseRing.scene)
        this.ringGroup.add(this.ring2.decalRing.scene)
        this.ringGroup.rotation.y = Math.PI * 1.5
        // this.ringGroup.position.x = -.6
        this.ringGroup.position.y = -.3
        this.ringGroupParent.add(this.ringGroup)

        // for entering animation
        this.ringsDesktop()
        this.ringGroupParent.position.set(0, -20, 0)
    }

    rotate()
    {
        this.ringGroupParent.rotation.y += this.time.delta * .001 / 3
    }

    ringsMobile()
    {
        this.mobileScale = 1.4
        this.ringGroup.scale.set(this.mobileScale, this.mobileScale, this.mobileScale)
    }

    ringsDesktop()
    {
        this.scale = 1.8
        this.ringGroup.scale.set(this.scale, this.scale, this.scale)
    }

    debugRings()
    {
        this.debugFolder = this.debug.addFolder(`Rings Group Pos`)
        this.debugFolder.add(this.ringGroup.position, `y`, -5, 5, .001)
        this.debugFolder.add(this.ringGroup.scale, `x`, -5, 5, .001).name(`scale x`)
        this.debugFolder.add(this.ringGroup.scale, `y`, -5, 5, .001).name(`scale y`)
        this.debugFolder.add(this.ringGroup.scale, `x`, -5, 5, .001).name(`scale z`)
    }
}
