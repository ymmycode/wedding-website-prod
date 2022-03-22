import Experience from "../../../Experience";
import * as THREE from 'three'

export default class Partner1
{
    constructor()
    {
        // experience 
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // texture
        this.partnerPhoto = this.resources.items.partnerPhoto1
    
        // material
        this.partnerPhoto.flipY = false
        this.partnerPhoto.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial(
        {
            map: this.partnerPhoto
        })
    }
}