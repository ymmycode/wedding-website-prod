import {GalleryPhotos} from './Materials'
import Experience from '../../Experience'
import * as THREE from 'three'

export default class Gallery 
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // resources
        this.resources = this.experience.resources

        // time
        this.time = this.experience.time

        // group
        this.group = new THREE.Group()

        // model
        this.galleryScene = this.resources.items.gallery

        // material
        this.galleryPhotos = new GalleryPhotos()

        // scene
        this.group.add(this.galleryScene.scene)
        this.scene.add(this.group)
        this.galleryModel = this.galleryScene.scene

        // setting up
        this.setModel()
        this.setMaterial()
        this.update()
    }

    setModel()
    {
        // for animation enter
        this.group.position.set(0, -105, 0)
        this.galleryModel.scale.set(1.7,1.7,1.7)
    }

    setModelMobile()
    {
        // mobile position
        this.group.position.set(0, -102, 0)

        //mobile scale
        this.galleryModel.scale.set(0.7, 0.7, 0.7)
    }

    setMaterial()
    {
        // this.galleryGeometry = this.galleryModel.children.find(child => child.name === `Gallery_1`)
        this.galleryGeometry = this.galleryModel.children.find(child => child.name === `SpiralGallery`)
        this.galleryGeometry.material = this.galleryPhotos.material
    }

    update()
    {
        // rotate
        this.galleryModel.rotation.y -= this.time.delta * 0.001 / 5
    }
}