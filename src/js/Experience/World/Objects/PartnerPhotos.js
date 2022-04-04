import PhotoFrame from "./Frame/PhotoFrame";
import PhotoFrame2 from "./Frame/PhotoFrame2";
import { Partner1, Partner2 } from './Materials'
import Experience from "../../Experience";
import * as THREE from 'three'

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

        // camera
        this.camera = this.experience.camera.instance

        // sizes
        this.sizes = this.experience.sizes

        // mouse
        this.mouse = this.experience.raycast.mouse

        // debug
        this.debug = this.experience.debug.gui

        // orientation
        this.orientation = this.experience.deviceOrientation
        this.euler = this.orientation.euler

        // group
        this.group = new THREE.Group()
        this.group2 = new THREE.Group()

        // material (photos)
        this.partner1Photo = new Partner1()
        this.partner2Photo = new Partner2()

        // photo frame
        this.photoFrame = new PhotoFrame()
        this.photoFrame2 = new PhotoFrame2()

        this.setModel()
        this.setPhotoMaterial()

        this.partnersPosition()

        // for entering animation
        this.group.position.set(0, -40, 0)
        // responsive

        // test target cube
        // this.mesh = new THREE.Mesh(
        //     new THREE.BoxBufferGeometry(.2, .2, .2),
        //     new  THREE.MeshBasicMaterial({color: `#ff00ff`})
        // )
        // this.mesh.position.y = 0

        // this.group.add(this.mesh)
    }

    setModel()
    {
        this.photoFrame.scene.position.x = -2
        this.photoFrame.scene.rotation.y = Math.PI * 0.15
        this.group.add(this.photoFrame.scene)

        this.photoFrame2.scene.position.x = 2
        this.photoFrame2.scene.rotation.y = -Math.PI * 0.15
        this.group.add(this.photoFrame2.scene)

        this.group2.add(this.group)
        this.scene.add(this.group2)
    }

    setPhotoMaterial()
    {
        this.photo1 = this.photoFrame.scene.children.find(child => child.name === `OvalPlaceHolder`)
        this.photo2 = this.photoFrame2.scene.children.find(child => child.name === `OvalPlaceHolder`)

        this.photo1.material = this.partner1Photo.material
        this.photo2.material = this.partner2Photo.material
    }

    rotateObject()
    {
        // console.log(this.mouse)

        this.group.rotation.y = THREE.MathUtils.lerp(this.group.rotation.y, (this.mouse.x * Math.PI) / 20, 0.1)
        this.group.rotation.x = THREE.MathUtils.lerp(this.group.rotation.x, (-this.mouse.y * Math.PI) / 20, 0.1)
    }

    rotateObjectWithSensor()
    {
        this.group2.rotation.y = THREE.MathUtils.lerp(this.group.rotation.y, ((this.euler.y) * Math.PI) / 2, 0.5)
    }

    partnersPosition()
    {
        this.points = [
            {
                position: new THREE.Vector3(-2, -41.5, 0),
                element: document.querySelector(`.partner1`)
            },

            {
                position: new THREE.Vector3(2, -41.5, 0),
                element: document.querySelector(`.partner2`)
            }
        ]
        
    }

    partnersPositionMobile()
    {
        this.points = [
            {
                position: new THREE.Vector3(-.1, -39.8, 0),
                element: document.querySelector(`.partner1`)
            },

            {
                position: new THREE.Vector3(-.1, -42.1, 0),
                element: document.querySelector(`.partner2`)
            }
        ]
        
    }

    updatePartnerPosition()
    {
        this.points.forEach((point) => 
        {
            const screenPosition = point.position.clone()
            screenPosition.project(this.camera)
            const translateX = (screenPosition.x + 1 - .1) * this.sizes.width * 0.5
            const translateY = - (screenPosition.y - 1 + .1) * this.sizes.height * 0.5
            point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
        })
    }

    update()
    {
        this.rotateObject()
        this.rotateObjectWithSensor()
        this.updatePartnerPosition()
    }

    debugThis()
    {
        this.debugFolder = this.debug.addFolder(`Cube Target Pos`)

        this.debugFolder.add(this.mesh.position, `x`, -5, 5, .001)
        this.debugFolder.add(this.mesh.position, `y`, -5, 5, .001)
        this.debugFolder.add(this.mesh.position, `z`, -5, 5, .001)
    }

    setMobile()
    {
        this.scale = 3
        this.partnersPositionMobile()

        this.photoFrame.scene.position.x = 0
        this.photoFrame.scene.position.y = 1
        this.photoFrame.scene.rotation.y = 0
        this.photoFrame.scene.scale.set(this.scale, this.scale, this.scale)

        this.photoFrame2.scene.position.x = 0
        this.photoFrame2.scene.position.y = -1.2
        this.photoFrame2.scene.rotation.y = 0
        this.photoFrame2.scene.scale.set(this.scale, this.scale, this.scale)
    }

    setDesktop()
    {
        this.partnersPosition()
        this.photoFrame.scene.position.x = -2
        this.photoFrame.scene.position.y = 0
        this.photoFrame.scene.rotation.y = Math.PI * 0.15
        this.photoFrame.scene.scale.set(5, 5, 5)

        this.photoFrame2.scene.position.x = 2
        this.photoFrame2.scene.position.y = 0
        this.photoFrame2.scene.rotation.y = -Math.PI * 0.15
        this.photoFrame2.scene.scale.set(5, 5, 5)
    }
}