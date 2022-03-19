import * as THREE from 'three'
import Experience from '../../Experience'

export default class Ring2
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // resources
        this.resources = this.experience.resources

        // ring1
        this.baseRing =  this.resources.items.baseRing2
        this.decalRing =  this.resources.items.decalRing2

        // ring1 textures
        this.ringAlpha = this.resources.items.ring2Alpha
        this.ringNormal = this.resources.items.ring2Normal

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
        this.ringMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color(`#E7BB5A`),
            metalness: 1,
            roughness: 0.1,
            normalMap: this.ringNormal,
            alphaMap: this.ringAlpha,
            transparent: true,
            bumpMap: 1,
        })

        this.decalModel = this.decalRing.scene.children.find(child => child.name === `Ring003`)
        this.decalModel.material = this.ringMaterial
    }
}