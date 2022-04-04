import * as THREE from 'three'
import Experience from '../../../Experience'
import { EnterButton } from '../Materials'

export default class Enter
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // time
        this.time = this.experience.time

        // material
        this.spriteMat = new EnterButton()

        // group
        this.group = new THREE.Group()
        this.group.name = `EnterButton`

        // raycast object
        this.objects = this.experience.raycast.objects
        this.objects.push(this.group)

        // sprite enter
        this.setSprite()

        // Sprite Setup
        this.spriteSetup()

        // adding to the group
        this.addGroup()
    }

    setSprite()
    {
        this.enterSprite = new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1), this.spriteMat.enterMaterial)
        this.enterFirstSprite = new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1), this.spriteMat.enterFirstMaterial)
        this.enterLastSprite = new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1), this.spriteMat.enterLastMaterial)
    
        this.enterLastSprite.name = `LastSprite`
        this.enterLastSprite.material.opacity = 0
    }

    addGroup()
    {
        this.group.add(this.enterSprite)
        this.group.add(this.enterFirstSprite)
        this.group.add(this.enterLastSprite)
    }

    spriteSetup()
    {
        this.enterLastSprite.scale.set(1.4, 1.4, 1.4)
        this.enterSprite.position.z = .25
        this.enterFirstSprite.position.z = .15

        this.group.position.x = .5
        this.group.position.z = .5
        this.group.scale.set(1,1,1)
    }

    spriteSetupMobile()
    {
        this.group.scale.set(0.5, 0.5, 0.5)
    }

    animate()
    {
        this.spriteMat.enterFirstSprite.rotation += Math.PI / 2 * this.time.delta * 0.0005
        this.spriteMat.enterLastSprite.rotation -= Math.PI / 2 * this.time.delta * 0.0005
    }
}