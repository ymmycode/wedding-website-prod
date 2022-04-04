import gsap from "gsap"

const partnerEnterTransition = (camera, partner, container) => 
{
    const title = container.querySelectorAll(`.title-partner span`)
    const transition = document.querySelector(`.transition`)

    camera.controls.enabled = false

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    tl
    .set(`.partner1`, {autoAlpha: 1})
    .set(`.partner2`, {autoAlpha: 1})
    .fromTo(transition, {yPercent: 0}, {yPercent: 100, duration: 1, delay: .2}, 0)
    .to(transition, {yPercent: 200, duration: 1}, 1.5)
    .from(title, {yPercent: 100, duration: 3, stagger: .1}, 2)
    .fromTo(title, {opacity: 0}, {opacity: 0.8, duration: 3, stagger: .1}, 2)
    .from(`.partner-name`, {yPercent: 100, stagger: .1}, 3)
    .fromTo(`.partner-name`, {opacity: 0}, {opacity: 1,  stagger: .1}, 3)
    .from(`.partner-detail`, {yPercent: 100, stagger: .1}, 3)
    .fromTo(`.partner-detail`, {opacity: 0}, {opacity: 1, stagger: .1}, 3)
    .to(camera.instance.position, {y: -39, x: 0, z: 10, duration: 3}, 1)
    .to(camera.controls.target, {y: -40, x: 0, z: 0, duration: 3}, 1)

    return tl
}

export default partnerEnterTransition