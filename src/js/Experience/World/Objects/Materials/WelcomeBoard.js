import * as THREE from 'three'
import Experience from '../../../Experience'

export default class WelcomeBoard 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // color palette
        this.welcome = this.resources.items.welcomeBoard
        this.welcome.flipY = false
        this.welcome.encoding = THREE.sRGBEncoding
        this.material = new THREE.MeshBasicMaterial({
            map: this.welcome,
        })
        
    }
}