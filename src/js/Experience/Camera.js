import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Experience from './Experience'

export default class Camera 
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

        // setting instance
        this.setInstance()

        // orbit controls
        this.setOrbitControls()

        // will implement camera transition to the next scene
    }

    setInstance()
    {
        // perspective camera
        this.instance = new THREE.PerspectiveCamera(
            35, // fov might changing
            this.sizes.width / this.sizes.height,
            .1,
            100
        )

        // camera position
        this.instance.position.set(10, 2, 10)
        this.instance.lookAt(0,0,0)
        this.scene.add(this.instance)
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        // this.controls.enabled = false
        // this.controls.autoRotate = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}