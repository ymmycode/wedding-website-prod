import PhotoFrame from "./Frame/PhotoFrame";
import PhotoFrame2 from "./Frame/PhotoFrame2";
import { Partner1, Partner2 } from './Materials'
import Experience from "../../Experience";

export default class PartnerPhotos
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // resources
        this.resources = this.experience.resources

        // material (photos)
        this.partner1Photo = new Partner1()
        this.partner2Photo = new Partner2()

        // photo frame
        this.photoFrame = new PhotoFrame()
        this.photoFrame2 = new PhotoFrame2()

        this.setModel()
        this.setPhotoMaterial()
    }

    setModel()
    {
        this.photoFrame.scene.position.x = -2
        this.photoFrame.scene.rotation.y = Math.PI * 0.15
        this.scene.add(this.photoFrame.scene)

        this.photoFrame2.scene.position.x = 2
        this.photoFrame2.scene.rotation.y = -Math.PI * 0.15
        this.scene.add(this.photoFrame2.scene)
    }

    setPhotoMaterial()
    {
        this.photo1 = this.photoFrame.scene.children.find(child => child.name === `OvalPlaceHolder`)
        this.photo2 = this.photoFrame2.scene.children.find(child => child.name === `OvalPlaceHolder`)

        this.photo1.material = this.partner1Photo.material
        this.photo2.material = this.partner2Photo.material
    }
}