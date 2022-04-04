import * as THREE from 'three'
import Experience from "../../../Experience";

export default class EnterButton
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // sources
        this.resources = this.experience.resources

        // getting texture
        // enter sprite
        this.enterSprite = this.resources.items.enterButton
        this.enterSprite.flipY = true
        this.enterSprite.center = new THREE.Vector2(0.5, 0.5)

        // enter first sprite
        this.enterFirstSprite = this.resources.items.enterButtonFirst
        this.enterFirstSprite.flipY = true
        this.enterFirstSprite.center = new THREE.Vector2(0.5, 0.5)

        // enter last sprite
        this.enterLastSprite = this.resources.items.enterButtonLast
        this.enterLastSprite.flipY = true
        this.enterLastSprite.center = new THREE.Vector2(0.5, 0.5)

        
        // sprite enter Material
        this.enterMaterial = new THREE.MeshBasicMaterial({
            color: `#000000`,
            transparent: true,
            alphaMap: this.enterSprite,
            side: THREE.DoubleSide
        })

        // sprite enter first material
        this.enterFirstMaterial = new THREE.MeshBasicMaterial({
            color: `#000000`,
            transparent: true,
            alphaMap: this.enterFirstSprite,
            side: THREE.DoubleSide
        })

        // sprite enter last material
        this.enterLastMaterial = new THREE.MeshBasicMaterial({
            color: `#000000`,
            transparent: true,
            alphaMap: this.enterLastSprite,
            side: THREE.DoubleSide
        })
    }
}