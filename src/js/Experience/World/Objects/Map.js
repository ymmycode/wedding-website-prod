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

        // map material
        this.colorPalette = new ColorPalette2()
        this.bakedEnv = new MapEnv()
        this.mapDesign = new MapDesign()

        // map scene
        this.mapScene = this.resources.items.mapScene
        console.log(this.mapScene)

        // setting up
        this.setModel()
        this.setAnimation()
        this.setMaterials()
    }

    setModel()
    {
        this.mapModel = this.mapScene.scene
        this.mapModel.scale.set(3.5, 3.5, 3.5)
        this.scene.add(this.mapModel)
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
    }
}