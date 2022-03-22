import Experience from "../../../Experience"
import { FlowerDecor2, Wood, ColorPalette } from "../Materials"
import * as THREE from 'three'

export default class PhotoFrame2
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // resources
        this.resources = this.experience.resources

        // material decor
        this.decorMat = new FlowerDecor2()

        // material wood
        this.wood = new Wood()

        // color palette
        this.palette = new ColorPalette()

        // scene model
        this.scene = this.resources.items.photoFrame2.scene

        this.setModel()
        this.setMaterial()
    }

    setModel()
    {
        this.scene.scale.set(5, 5, 5)
    }

    setMaterial()
    {
        this.flowerDecor1 = this.scene.children.find(child => child.name === `FlowerDecor`)
        this.flowerDecor2 = this.scene.children.find(child => child.name === `FlowerFrame`)
        this.ovalFrame = this.scene.children.find(child => child.name === `OvalFrame`)

        this.flowerDecor1.material = this.decorMat.material
        this.flowerDecor2.material = this.palette.material
        this.ovalFrame.material = this.wood.material
    }
}