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

        // testing light
        // will disable later
        this.sunLight()

        // environment map (cube hdr)
        this.setEnvironmentMap()
    }

    sunLight()
    {
        this.sunLight = new THREE.DirectionalLight(`#fffee5`, 2)
        this.sunLight.castShadow = true
        this.sunLight.position.set(3, 3, -2.25)
        this.scene.add(this.sunLight)
        this.scene.add(this.sunLight.target)
    }

    setEnvironmentMap()
    {
        // setting environment map
        this.environmentMap = {}
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.intensity = 3
        this.environmentMap.texture.encoding = THREE.sRGBEncoding

        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterial = () => 
        {
            this.scene.traverse((child) => 
            {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
                {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterial()
    }
}