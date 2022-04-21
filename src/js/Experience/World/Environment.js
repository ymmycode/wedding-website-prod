import * as THREE from 'three'
import Experience from "../Experience"

export default class Environment 
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // resource
        this.resources = this.experience.resources
    }
}