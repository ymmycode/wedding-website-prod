import * as THREE from 'three'
import Experience from '../../../Experience'

export default class MapDesign
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // color palette
        this.design = this.resources.items.mapDesign
        this.design.flipY = false
        this.design.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial({
            map: this.design,
            // side: THREE.DoubleSide
        })

        // rotate texture
        this.material.map.rotation = -Math.PI * .5
        this.material.map.center = new THREE.Vector2(0.5, 0.5)
    }
}