import * as THREE from 'three'
import Experience from '../../../Experience'
import { GoldMatcap } from '../Materials'

export default class Ring1 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // gold matcap
        this.matMaterial = new GoldMatcap()

        // ring1
        this.baseRing =  this.resources.items.baseRing1
        this.decalRing =  this.resources.items.decalRing1

        // ring1 textures
        this.ringAlpha = this.resources.items.ring1Alpha
        this.ringNormal = this.resources.items.ring1Normal

        // setting up
        this.setTextures()
        this.setDecalMaterials()
        this.setModels()

    }

    setModels()
    {
        this.baseRing.scene.position.x = -0.17
        this.decalRing.scene.position.x = -0.17
        this.baseRing.scene.scale.set(2,2,2)
        this.decalRing.scene.scale.set(2,2,2)
    }

    setTextures()
    {
        this.ringAlpha.flipY = false
        this.ringNormal.flipY = false

        this.base = this.baseRing.scene.children.find(child => child.name === `Ring`)
        this.base.material = this.matMaterial.material
    }

    setDecalMaterials()
    {
        this.ringMaterial = this.matMaterial.material.clone()
        this.ringMaterial.normalMap = this.ringNormal
        this.ringMaterial.alphaMap = this.ringAlpha
        this.ringMaterial.transparent = true
        this.ringMaterial.normalScale = 1

        this.decalModel = this.decalRing.scene.children.find(child => child.name === `Ring002`)
        this.decalModel.material = this.ringMaterial
    }
}