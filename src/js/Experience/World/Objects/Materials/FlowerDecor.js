import * as THREE from 'three'
import Experience from '../../../Experience'

export default class FlowerDecor 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()
        
        // resources
        this.resources = this.experience.resources

        // color palette
        this.flowerColor = this.resources.items.flowerDecoColor
        this.flowerAlpha = this.resources.items.flowerDecoAlpha
        this.flowerColor.flipY = false
        this.flowerAlpha.flipY = false
        this.flowerColor.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial({
            map: this.flowerColor,
            alphaMap: this.flowerAlpha,
            transparent: true,
            side: THREE.DoubleSide
        })
        
    }
}