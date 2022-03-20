import * as THREE from 'three'
import Experience from '../../../Experience'

export default class ColorPalette 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // color palette
        this.palette = this.resources.items.flowerPalette
        this.palette.flipY = false
        this.palette.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial({
            map: this.palette,
            side: THREE.DoubleSide
        })
        
    }
}