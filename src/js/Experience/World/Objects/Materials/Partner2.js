import Experience from "../../../Experience";
import * as THREE from 'three'

export default class Partner2
{
    constructor()
    {
        // experience 
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // texture
        this.partnerPhoto = this.resources.items.partnerPhoto2
    
        // material
        this.partnerPhoto.flipY = false
        this.partnerPhoto.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial(
        {
            map: this.partnerPhoto
        })
    }
}