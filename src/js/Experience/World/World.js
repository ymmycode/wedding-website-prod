import * as THREE from 'three'
import Experience from "../Experience";
import Environment from './Environment';
import { Ring1, Ring2, Map, Gate } from './Objects'

export default class World 
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // source / assets
        this.resources = this.experience.resources

        // time
        this.time = this.experience.time

        // enable autoRotate
        this.autoRotate = true

        // Grouping
        this.ringGroup = new THREE.Group()
        this.ringGroupParent = new THREE.Group()

        // listen to resources, is ready or not
        this.resources.on(`ready`, () => 
        {
            console.log(`All Loaded, And Ready`)

            // Gate
            this.gate = new Gate()

            // Map
            this.map = new Map()

            // Rings
            this.ringSetup()
            // this.scene.add(this.ringGroupParent)

            // Environment setup
            this.environment = new Environment()

        })
    }

    update()
    {
        if(this.autoRotate)
        {
            this.ringGroup.rotation.y += this.time.delta * .001 / 3
        }

        if(this.map) this.map.update()
    }

    ringSetup()
    {
        this.ring1 = new Ring1()
        this.ring2 = new Ring2()
        this.ringGroup.add(this.ring1.baseRing.scene)
        this.ringGroup.add(this.ring1.decalRing.scene)
        this.ringGroup.add(this.ring2.baseRing.scene)
        this.ringGroup.add(this.ring2.decalRing.scene)
        this.ringGroup.rotation.y = Math.PI * .2
        this.ringGroupParent.add(this.ringGroup)
    }
}