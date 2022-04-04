import gsap from "gsap"

const ringEnterTransition = (camera, rings, container) => 
{
    const count = container.querySelectorAll(`.count`)
    const partner = container.querySelectorAll(`.partner`)
    const wedDate = container.querySelectorAll(`.wed-date`)
    const ringText = container.querySelector(`.ring-text`)
    const transition = document.querySelector(`.transition`)
    transition.style.transform = `translateY(-100%);`

    camera.controls.enabled = true

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: `power4.out`,
        }
    })

    tl
    .to(transition, {yPercent: 100, duration: 1, delay: .2}, 0)
    .to(transition, {yPercent: 200, duration: 1}, 1.5)
    .to(ringText, {opacity: 1},1)
    .to(camera.instance.position, {y: -18, x: 0, z: 10}, 1)
    .to(camera.controls.target, {y: -20, x: 0, z: 0}, 1)
    .to(rings.ringGroup.rotation, {y: `+=105`, duration: 3}, 2)
    .from(count, {yPercent: 100, opacity: 0, duration: 2, stagger: .1,}, 2.2)
    .from(partner, {yPercent: 100, opacity: 0, duration: 2, stagger: .1}, 2.2)
    .from(wedDate, {yPercent: 100, opacity: 0, duration: 2, stagger: .1}, 2.2)
    .play(0)

    return tl
}

export default ringEnterTransition