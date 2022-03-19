import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Wood 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // resources
        this.resources = this.experience.resources

        // color palette
        this.wood = this.resources.items.wood
        this.wood.flipY = false
        this.wood.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial({
            map: this.wood,
            // side: THREE.DoubleSide
        })
        
    }
}