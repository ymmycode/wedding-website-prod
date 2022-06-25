import * as THREE from 'three'
import Experience from '../../Experience'
import { ColorPalette2, MapDesign, MapEnv } from './Materials'

export default class Map 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // time
        this.time = this.experience.time

        // resources
        this.resources = this.experience.resources

        // group
        this.group = new THREE.Group()
        this.groupParent = new THREE.Group()

        // auto rotate
        this.autoRotate = true

        // map material
        this.colorPalette = new ColorPalette2()
        this.bakedEnv = new MapEnv()
        this.mapDesign = new MapDesign()

        // map scene
        this.mapScene = this.resources.items.mapScene

        // setting up
        this.setModel()
        this.setAnimation()
        this.setMaterials()

        // for enter animation
        this.group.position.set(0, -60, 0)
        // responsive

        this.setDesktop()
    }

    setModel()
    {
        this.mapModel = this.mapScene.scene
        this.mapModel.scale.set(2.5, 2.5, 2.5)
        // this.mapModel.rotation.y = -Math.PI * .3
        this.mapModel.rotation.y = -Math.PI * .75
        this.mapModel.position.y = -.2

        //adding map to the actual scene
        this.group.add(this.mapModel)
        this.groupParent.add(this.group)
        this.scene.add(this.groupParent)
    }

    setMaterials()
    {
        this.mapGround = this.mapModel.children.find(child => child.name === `Map001`)
        this.locPointer = this.mapModel.children.find(child => child.name === `Location001`)
        this.environment = this.mapModel.children.find(child => child.name === `Environment`)

        this.mapGround.material = this.mapDesign.material
        this.locPointer.material = this.colorPalette.material
        this.environment.material = this.bakedEnv.material

        for(let i = 2; i < 9; i++)
        {
            this.car = this.mapModel.children.find(child => child.name === `Car00${i}`)
            this.car.material = this.colorPalette.material
        }

        for(let i = 3; i < 10; i++)
        {
            this.motorcycle = this.mapModel.children.find(child => child.name === `Motorcycle00${i}`)
            this.motorcycle.material = this.colorPalette.material
        }
    }

    setAnimation()
    {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.mapModel)
        this.animation.actions = this.mapScene.animations || []

        for (let i = 0; i < 15; i++)
        {
            setTimeout(() => 
            {
                this.animation.mixer.clipAction(this.animation.actions[i]).play()
            }, i * 200)
        }
    }

    update()
    {
        this.animation.mixer.update(this.time.delta * 0.001 / 1.5)

        if(this.autoRotate)
        {
            this.group.rotation.y = Math.cos(Math.sin( this.time.elapsed * 0.001 / 12))
        }
    }

    setDesktop()
    {
        this.mapModel.scale.set(2.25, 2.25, 2.25)
    }

    setMobile()
    {
        this.mapModel.scale.set(1.6, 1.6, 1.6)
    }
}