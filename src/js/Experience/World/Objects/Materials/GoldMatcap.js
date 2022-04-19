import * as THREE from 'three'
import Experience from '../../../Experience'

export default class GoldMatcap 
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // source
        this.source = this.experience.resources

        // texture
        this.matcap = this.source.items.matcapGold1

        //material
        this.matcap.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshMatcapMaterial({
            matcap: this.matcap
        })
    }
}