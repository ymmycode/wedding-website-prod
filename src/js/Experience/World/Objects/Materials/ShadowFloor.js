import * as THREE from 'three'
import Experience from '../../../Experience'

export default class ShadowFloor 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // color palette
        this.shadow = this.resources.items.floorShadow
        this.shadowAlpha = this.resources.items.floorShadowAlpha
        this.shadow.flipY = false
        this.shadowAlpha.flipY = false
        this.shadow.encoding = THREE.sRGBEncoding
        this.shadowAlpha.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial({
            map: this.shadow,
            alphaMap: this.shadowAlpha,
            transparent: true,
            // side: THREE.DoubleSide
        })
        
    }
}