import * as THREE from 'three'
import Experience from '../../Experience'

export default class Ring1 
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

        // ring1
        this.baseRing =  this.resources.items.baseRing1
        this.decalRing =  this.resources.items.decalRing1

        // ring1 textures
        this.ringAlpha = this.resources.items.ring1Alpha
        this.ringNormal = this.resources.items.ring1Normal

        // setting up
        this.setTextures()
        this.setMaterials()
        this.setModels()

    }

    setModels()
    {
        this.baseRing.scene.scale.set(5,5,5)
        this.baseRing.scene.position.x = -.5

        this.decalRing.scene.scale.set(5,5,5)
        this.decalRing.scene.position.x = -.5
    }

    setTextures()
    {
        this.ringAlpha.flipY = false
        this.ringNormal.flipY = false
    }

    setMaterials()
    {
        this.ring1Material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(`#E7BB5A`),
            metalness: 1,
            roughness: 0.1,
            normalMap: this.ringNormal,
            alphaMap: this.ringAlpha,
            transparent: true,
            bumpMap: 1,
        })

        this.decalModel = this.decalRing.scene.children.find(child => child.name = `Ring002`)
        this.decalModel.material = this.ring1Material
    }

    update()
    {
        
    }
}