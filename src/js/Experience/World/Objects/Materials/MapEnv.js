import * as THREE from 'three'
import Experience from '../../../Experience'

export default class MapEnv
{
    constructor()
    {
        // experience   
        this.experience = new Experience()
        
        // resources
        this.resources = this.experience.resources

        // color palette
        this.baked = this.resources.items.mapEnv
        this.baked.flipY = false
        this.baked.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial({
            map: this.baked,
        })
        
    }
}