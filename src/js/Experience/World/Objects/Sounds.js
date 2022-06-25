import Experience from "../../Experience";
import * as THREE from 'three'

export default class Sounds
{
    constructor()
    {
        this.experience = new Experience()

        this.scene = this.experience.scene

        this.camera = this.experience.camera.instance
        
        this.resources = this.experience.resources

        this.listener = new THREE.AudioListener()

        this.bgMusic = new THREE.Audio(this.listener)

        this.bgMp3 = this.resources.items.bg

        this.bgMusic.setBuffer(this.bgMp3)

        this.play = false

        this.playBtn = document.querySelector(`.play-btn`)
        this.playBtn.addEventListener(`click`, () => 
        {
            this.togglePlay()
        })
    }

    togglePlay()
    {
        if(!this.play) 
        {
            this.bgMusic.play()
            this.bgMusic.setLoop(true)
            this.play = true
        }
        else
        {
            this.bgMusic.pause()
            this.play = false
        }
        
        document.querySelectorAll(`.icon`).forEach((icons) => 
        {
            icons.classList.toggle(`switch`)
        })
    }
}