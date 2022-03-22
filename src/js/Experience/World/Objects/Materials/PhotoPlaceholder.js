import * as THREE from 'three'
import Experience from '../../../Experience'

export default class PhotoPlaceholder 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()
        
        // resources
        this.resources = this.experience.resources

        // color palette
        this.photo = this.resources.items.photoPlaceholder
        this.photo.flipY = false
        this.photo.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial({
            map: this.photo,
            // side: THREE.DoubleSide
        })
        
    }
}