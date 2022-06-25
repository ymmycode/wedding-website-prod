import gsap from "gsap"

const gateTransition = (camera) => 
{
    // text scroll
    const scroll = document.querySelectorAll(`.scroll`)
    const transition = document.querySelector(`.transition`)

    // home leave page / gate entering animation
    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: `power2.in`
        }
    })

    tl
    .to(camera.instance.position, {x: 0.4, y: 0, z: -1.5}, 0)
    .to(camera.controls.target, {x: 0.5, y: 0, z: -2}, 0)
    // .to(scroll, {opacity: 0}, 0)
    // .to(transition, {yPercent: 100, duration: 1, ease: "power4.out", delay: .2})
    // .to(transition, {yPercent: 200, duration: 1, ease: "power4.out"})

    return tl
}

export default gateTransition