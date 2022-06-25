import * as THREE from 'three'
import Experience from './Experience'

export default class Renderer 
{
    constructor()
    {
        // experience
        this.experience = new Experience()
        
        // sizes 
        this.sizes = this.experience.sizes

        // scene
        this.scene = this.experience.scene

        // canvas
        this.canvas = this.experience.canvas

        // camera
        this.camera = this.experience.camera

        // setting instance
        this.setInstance()
    }

    setInstance()
    {
        this.instance = new THREE.WebGLRenderer({
            // antialias: false,
            antialias: true,
            canvas: this.canvas,
            alpha: true,
            powerPreference: "high-performance",
        })

        // this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.NoToneMapping
        // this.instance.toneMappingExposure = 1.75
        // this.instance.setClearColor(`#211d20`)
        // this.instance.setClearColor(`#E1EAC7`)
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    update()
    {
        this.instance.render(this.scene, this.camera.instance)
    }
}