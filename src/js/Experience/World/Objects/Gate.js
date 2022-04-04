import Experience from '../../Experience'
import * as THREE from 'three'
import { 
    ColorPalette, 
    Wood, 
    ShadowFloor, 
    FlowerDecor, 
    PhotoPlaceholder 
} from './Materials'
import Enter from './Button/Enter'

export default class Gate 
{
    constructor()
    {
        // experience   
        this.experience = new Experience()

        // scene
        this.scene = this.experience.scene

        // resources
        this.resources = this.experience.resources

        // sizes
        this.sizes = this.experience.sizes

        // camera
        this.camera = this.experience.camera.instance

        // raycast
        this.raycast = this.experience.raycast

        // mouse
        this.mouse = this.raycast.mouse

        // orientation
        this.orientation = this.experience.deviceOrientation
        this.euler = this.orientation.euler
        
        // group 
        this.group = new THREE.Group()
        this.group2 = new THREE.Group()

        // material
        this.gateMaterialSetup()

        // gate scene
        this.gateScene = this.resources.items.gateScene.scene

        // button (enter)
        this.enterButton = new Enter()
        
        // enter button sprite
        this.group.add(this.enterButton.group)

        // setting up
        this.setMaterials()

        // adding to the scene
        this.gateSetup()
    
        this.group.add(this.gateScene)
        this.group2.add(this.group)
        this.scene.add(this.group2)

        this.enterButtonCss()
        this.updateEnterButtonCssPosition()

    }

    setMaterials()
    {
        this.floor = this.gateScene.children.find(child => child.name === `Floor001`)
        this.gate = this.gateScene.children.find(child => child.name === `Gate006`)
        this.flowerDecor = this.gateScene.children.find(child => child.name === `FlowerDecor001`)
        this.photoFrame1 = this.gateScene.children.find(child => child.name === `PhotoFrame001`)
        this.photoPlaceholder = this.gateScene.children.find(child => child.name === `PhotoPlaceholder001`)
        this.curtain = this.gateScene.children.find(child => child.name === `Curtain001`)
        this.photoStand = this.gateScene.children.find(child => child.name ===`PhotoStand002`)
        
        this.floor.material = this.shadowFloor.material
        this.gate.material = this.wood.material
        this.flowerDecor.material = this.flowerDecorMat.material
        this.photoFrame1.material = this.palette1.material
        this.curtain.material = this.palette1.material
        this.photoStand.material = this.wood.material
        this.photoPlaceholder.material = this.photo.material

    }
    
    gateMaterialSetup()
    {
        this.photo = new PhotoPlaceholder()
        this.palette1 = new ColorPalette()
        this.wood = new Wood()
        this.shadowFloor = new ShadowFloor()
        this.flowerDecorMat = new FlowerDecor()
    }

    gateSetup()
    {
        this.scale = .9
        this.gateScene.scale.set(this.scale,this.scale,this.scale)
        this.gateScene.position.y = -1
        this.gateScene.position.x = .5

        this.enterButton.spriteSetupMobile()
    }

    gateSetup2()
    {
        this.gateScene.scale.set(1.5,1.5,1.5)
        this.gateScene.position.y = -1.5
        this.gateScene.position.x = .5

        this.enterButton.spriteSetup()
    }

    rotateObject()
    {
        // console.log(this.mouse)

        this.group.rotation.y = THREE.MathUtils.lerp(this.group.rotation.y, (this.mouse.x * Math.PI) / 20, 0.1)
        this.group.rotation.x = THREE.MathUtils.lerp(this.group.rotation.x, (-this.mouse.y * Math.PI) / 20, 0.1)
    }

    rotateObjectWithSensor()
    {
        // console.log(this.quaternion.x, this.quaternion.y)
        this.group2.rotation.y = THREE.MathUtils.lerp(this.group.rotation.y, ((this.euler.y) * Math.PI) / 2, 0.5)
        // this.group2.rotation.x = THREE.MathUtils.lerp(this.group.rotation.x, ((-this.euler.x) * Math.PI) * .115, 0.5)
    }

    enterButtonCss()
    {
        this.point = {
            position: this.enterButton.enterLastSprite.position,
            element: document.querySelector(`.enter-btn`)
        }
    }

    updateEnterButtonCssPosition()
    {
        this.screenPosition = this.point.position.clone()
        this.screenPosition.project(this.camera)
        this.translateX = (this.screenPosition.x + 1 - 0.1) * this.sizes.width * 0.5
        this.translateY = - (this.screenPosition.y - 1 + 0.25) * this.sizes.height * 0.5
        this.point.element.style.transform = `translateX(${this.translateX}px) translateY(${this.translateY}px)`
    }

    update()
    {
        // animate enter button
        this.enterButton.animate()
        this.rotateObjectWithSensor()
        this.rotateObject()
        this.updateEnterButtonCssPosition()
    }
}