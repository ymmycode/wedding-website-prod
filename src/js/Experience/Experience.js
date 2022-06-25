import * as THREE from 'three'
import { Sizes, Time, Resources, Debug, Raycast, PerfStats } from './Utils'
import Camera from './Camera'
import Renderer from './Renderer'
import { World } from './World'
import sources from './sources'

let instance = null

export default class Experience 
{
    constructor(canvas)
    {
        // singleton
        // test if any instance of this
        if (instance)
        {
            return instance
        }

        instance = this

        // global access
        window.experience = this

        // render disable or enable
        this.renderEnabled = true

        // webgl canvas
        this.canvas = canvas

        // Performance Stats
        this.perfStats = new PerfStats()

        // debug
        this.debug = new Debug()

        // sizes
        this.sizes = new Sizes()

        this.sizes.on(`resize`, () => 
        {
            this.resize()
        })

        // time / frame update
        this.time = new Time()

        // update event
        this.time.on(`update`, () => 
        {
            this.update()
        })

        // THREE Scene
        this.scene = new THREE.Scene()

        // resources
        this.resources = new Resources(sources)

        // THREE Camera
        this.camera = new Camera(canvas)

        // THREE Renderer
        this.renderer = new Renderer()

        // World
        this.World = new World()

        // raycast
        this.raycast = new Raycast()

        // how to destroy things
        this.destroyThisScene = this.destroyThisScene

    }

    resize()
    {
        // will updating camera and renderer too

        // update camera sizes
        this.camera.resize()

        // update renderer sizes
        this.renderer.resize()
    }

    update()
    {
        // disable or enable render update
        if(this.renderEnabled)
        {
            // will update frame

            // monitor performance
            this.perfStats.stats.begin()

            // update raycast
            // this.raycast.update()

            // update camera
            this.camera.update()

            // update the world
            this.World.update()

            // update renderer
            this.renderer.update()

            this.perfStats.stats.end()
        }
    }

    destroyThisScene()
    {
        console.log(`This Scene is Destroyed`)
    }
}