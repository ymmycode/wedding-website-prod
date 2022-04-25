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

        // debug
        this.debug =  this.experience.debug

        // setting instance
        this.setInstance()

        // orbit controls
        this.setOrbitControls()

        this.cameraDebug()
    }

    setInstance()
    {
        // perspective camera
        this.instance = new THREE.PerspectiveCamera(
            35, // fov might changing
            this.sizes.width / this.sizes.height,
            .1,
            20
        )

        // dimension
        // this.instance.fov = 2 * Math.atan((this.sizes.height / 2) / 600) * 180 / Math.PI

        // camera position
        this.instance.position.set(0, 2, 10)
        this.instance.lookAt(0,2,0)
        this.scene.add(this.instance)
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.enabled = false
        this.controls.enablePan = false
        this.controls.enableZoom = false
        // this.controls.autoRotate = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    cameraDebug()
    {
        this.debugFolder = this.debug.gui.addFolder(`Camera`)

        this.debugFolder.add(this.controls, `enabled`).name(`enable control`)
        this.debugFolder.add(this.controls, `enableZoom`).name(`enable zoom`)
        this.debugFolder.add(this.controls, `enablePan`).name(`enable pan`)

        this.debugFolder.add(this.instance.position, `x`, -20, 20, 0.0001).name(`posX`).listen()
        this.debugFolder.add(this.instance.position, `y`, -20, 20, 0.0001).name(`posY`).listen()
        this.debugFolder.add(this.instance.position, `z`, -20, 20, 0.0001).name(`posZ`).listen()
        this.debugFolder.add(this.controls.target, `x`, -20, 20, 0.0001).name(`targetX`).listen()
        this.debugFolder.add(this.controls.target, `y`, -20, 20, 0.0001).name(`targetY`).listen()
        this.debugFolder.add(this.controls.target, `z`, -20, 20, 0.0001).name(`targetZ`).listen()
    }

    update()
    {
        this.controls.update()
    }

    resetFar()
    {
        this.instance.far = 20
        this.instance.updateProjectionMatrix()
    }
}