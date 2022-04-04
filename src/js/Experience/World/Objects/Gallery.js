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

        // setting up
        this.setModel()
        this.setMaterial()
        this.update()

        // for animation enter
        this.group.position.set(0, -100, 0)
    }

    setModel()
    {
        this.galleryModel = this.galleryScene.scene
        this.galleryModel.scale.set(10, 10, 10)
    }

    setMaterial()
    {
        this.galleryGeometry = this.galleryModel.children.find(child => child.name === `Gallery_1`)
        this.galleryGeometry.material = this.galleryPhotos.material
    }

    update()
    {
        // rotate
        this.galleryModel.rotation.y += this.time.delta * 0.0001 / 2
    }
}