import * as THREE from 'three'
import Experience from "../Experience";
import Environment from './Environment';
import { Rings, Map, Gate, PartnerPhotos, Gallery } from './Objects'

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

        // listen to resources, is ready or not
        this.resources.on(`ready`, () => 
        {
            console.log(`All Loaded, And Ready`)

            // Gate
            this.gate = new Gate()

            // Map
            this.map = new Map()

            // Rings
            this.rings = new Rings()

            // Partner Photos
            this.partnerPhotos = new PartnerPhotos()

            // Gallery
            this.gallery = new Gallery()

            // Environment setup
            this.environment = new Environment()

        })
    }

    update()
    {
        if(this.autoRotate)
        {
            if(this.rings) this.rings.rotate()
            if(this.gallery) this.gallery.update()
        } 

        if(this.map) this.map.update()
    }
}