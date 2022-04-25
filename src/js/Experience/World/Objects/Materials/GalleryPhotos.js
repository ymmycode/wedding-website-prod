import Experience from "../../../Experience";
import * as THREE from 'three'

export default class GalleryPhotos
{
    constructor()
    {
        // experience 
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // texture
        this.gallery = this.resources.items.galleryTexture
    
        // material
        this.gallery.flipY = false
        this.gallery.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial(
        {
            map: this.gallery,
            side: THREE.DoubleSide
        })
    }
}