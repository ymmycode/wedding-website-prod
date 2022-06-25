import * as THREE from 'three'
import Experience from "../Experience";
import Environment from './Environment';
import { Rings, Map, Gate, PartnerPhotos, Gallery, Sounds } from './Objects'

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

        // sizes
        this.sizes = this.experience.sizes

        // Debug
        this.debug = this.experience.debug

        // enable autoRotate
        this.worldConfig = 
        {
            autoRotate: true
        }

        // listen to resources, is ready or not
        this.resources.on(`ready`, () => 
        {
            console.log(`All Loaded, And Ready`)

            // Sounds
            this.sounds = new Sounds()

            // Gate
            this.gate = new Gate()

            // Rings
            this.rings = new Rings()

            // Partner Photos
            this.partnerPhotos = new PartnerPhotos()

            // Map
            this.map = new Map()

            // Gallery
            this.gallery = new Gallery()

            // Environment setup
            this.environment = new Environment()

            this.setResponsive()

            this.debugWorld()
        })
    }

    update()
    {
        if(this.worldConfig.autoRotate)
        {
            if(this.rings) this.rings.rotate()
            if(this.gallery) this.gallery.update()
        }

        if(this.map) this.map.update()

        if(this.gate) this.gate.update()

        if(this.partnerPhotos) this.partnerPhotos.update()
        
        this.setResponsive()
    }

    setResponsive()
    {
        if(this.sizes.width > 600)
        {
            this.setDesktop()
        }
        else
        {
            this.setMobile()
        }
    }

    setMobile()
    {
        if(this.gate) this.gate.gateSetup()
        if(this.rings) this.rings.ringsMobile()
        if(this.partnerPhotos) this.partnerPhotos.setMobile()
        if(this.map) this.map.setMobile()
        if(this.gallery) this.gallery.setModelMobile()
    }

    setDesktop()
    {
        if(this.gate) this.gate.gateSetup2()
        if(this.rings) this.rings.ringsDesktop()
        if(this.partnerPhotos) this.partnerPhotos.setDesktop()
        if(this.map) this.map.setDesktop()
        if(this.gallery) this.gallery.setModel()
    }

    debugWorld()
    {
        this.debugFolder = this.debug.gui.addFolder(`World`)
        this.debugFolder.add(this.worldConfig, `autoRotate`)
    }
}