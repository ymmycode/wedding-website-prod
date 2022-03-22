import Experience from '../../Experience'
import { 
    ColorPalette, 
    Wood, 
    ShadowFloor, 
    FlowerDecor, 
    PhotoPlaceholder 
} from './Materials'

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

        // material
        this.gateMaterialSetup()

        // gate scene
        this.gateScene = this.resources.items.gateScene.scene
        
        // setting up
        this.setMaterials()

        // adding to the scene
        this.scene.add(this.gateScene)
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
}