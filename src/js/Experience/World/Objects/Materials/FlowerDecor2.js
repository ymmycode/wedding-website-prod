import Experience from "../../../Experience";
import * as THREE from 'three'

export default class FlowerDecor2
{
    constructor()
    {
        // experience 
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // texture
        this.frameDecorColor = this.resources.items.frameDecorColor
        this.frameDecorAlpha = this.resources.items.frameDecorAlpha
    
        // material
        this.frameDecorColor.flipY = false
        this.frameDecorAlpha.flipY = false
        this.frameDecorColor.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial(
        {
            map: this.frameDecorColor,
            alphaMap: this.frameDecorAlpha,
            transparent: true,
            side: THREE.DoubleSide
        })
    }
}