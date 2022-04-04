import * as THREE from 'three'
import Experience from '../Experience'
import gsap from 'gsap'

export default class Raycast
{
    constructor()
    {
        // experience
        this.experience = new Experience()

        // canvas
        this.canvas = this.experience.canvas

        // camera
        this.camera = this.experience.camera

        // camera instance
        this.cameraInstance =  this.camera.instance
        
        // Raycast
        this.raycaster = new THREE.Raycaster()

        // mouse position
        this.mouse = new THREE.Vector2(0,0)
        this.setMousePosition()
        this.setMouseClick()

        // objects
        this.objects = []

        // current intersects
        this.currentIntersect = null

        // animation timeline
        this.timeline = gsap.timeline({
            reversed: true,
            paused: true,
            defaults: {duration: .7, ease: "elastic.out(2.5, 0.2)"}
        })

        // target animation
        this.target = null

        // ! NOTE
        // dont forget to group object for raycast 
    }

    update()
    {
        // raycast from camera
        this.raycaster.setFromCamera(this.mouse, this.cameraInstance)

        // object intersection
        this.intersects = this.raycaster.intersectObjects(this.objects)

        // object intersecting
        // this.intersects.forEach((intersect) => 
        // {
        //     // console.log(intersect)
        // })

        // mouse enter and leave
        // first condition about mouse enter
        // second(else) is about mouse leave / out
        if(this.intersects.length)
        {
            if(this.currentIntersect)
            {
                this.timeline
                .to(this.target.material, {opacity: 1}, 0)
            }

            if(this.currentIntersect === null)
            {
                // console.log(`mouse enter`)

                switch (this.intersects[0].object.parent.name)
                {
                    case `EnterButton`:
                        this.obj = this.intersects[0].object.parent
                        this.target = this.obj.children.find(child => child.name === `LastSprite`)
                        this.timeline.play()
                        break

                    default:
                        console.log(`Not Yet Setup`)
                        break
                }
            }

            this.currentIntersect = this.intersects[0]

        }
        else
        {
            if(this.currentIntersect)
            {
                // console.log(`mouse leave`)
                
                switch (this.currentIntersect.object.parent.name)
                {
                    case `EnterButton`:
                        this.obj = this.currentIntersect.object.parent
                        this.sprite = this.obj.children.find(child => child.name === `LastSprite`)
                        this.timeline.reverse()
                        break

                    default:
                        console.log(`Not Yet Setup`)
                        break
                }
            }

            this.currentIntersect = null
        }
    }

    setMousePosition()
    {
        window.addEventListener(`pointermove`, (evt) => 
        {
            this.mouse.x = (evt.clientX - this.canvas.offsetLeft) / this.experience.sizes.width * 2 - 1
            this.mouse.y = - ((evt.clientY - this.canvas.offsetTop) / this.experience.sizes.height) * 2 + 1
        })
    }

    setMouseClick()
    {
        window.addEventListener(`click`, () => 
        {
            // if(this.currentIntersect)
            // {
            //     switch (this.currentIntersect.object.parent.name)
            //     {
            //         case `EnterButton`:
            //             // gate transition
            //             // this.timeline.reverse()
            //             // this.camera.gateTransition()
                        
            //             break

            //         default:
            //             console.log(`Not Yet Setup`)
            //             break
            //     }
            // }
        })
    }
}