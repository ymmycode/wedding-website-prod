import gsap from "gsap"

const partnerEnterTransition = (camera, partner, container) => 
{
    const title = container.querySelectorAll(`.title-partner span`)
    const transition = container.querySelector(`.transition`)
    const nextButton = container.querySelector(`.next-btn`)
    const nextSpan = container.querySelectorAll(`.next-btn span`)
    // const corner = container.querySelectorAll(`.corner-decor`)
    const ornament = container.querySelectorAll(`.ornament`)

    const part1 = document.querySelector(`.partner1`) ?? container.querySelector(`.partner1`) 
    const part2 = document.querySelector(`.partner2`) ?? container.querySelector(`.partner2`) 

    const partName = document.querySelectorAll(`.partner-name`) ?? container.querySelectorAll(`.partner-name`) 
    const partDetail = document.querySelectorAll(`.partner-detail`) ?? container.querySelectorAll(`.partner-detail`)

    const loadingScreen = container.querySelector(`.loading-screen`)

    camera.controls.enabled = false

    // partner.partnersPositionMobile()
    // partner.partnersPosition()
    // partner.updatePartnerPosition()

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    tl
    .set(part1, {opacity: 1})
    .set(part2, {opacity: 1})
    // .fromTo(transition, {yPercent: 0}, {yPercent: 100, duration: 1, delay: .2}, 0)
    // .to(transition, {yPercent: 200, duration: 1}, 1.5)
    // .set(transition, {zIndex: -99}, 2.5)
    // .set(loadingScreen, {zIndex: -99}, 1)

    // .to(corner, {opacity: 1, duration: 3}, 2.5)
    .to(ornament, {opacity: 1, duration: 4, stagger: 0.1}, 1)
    // .from(title, {yPercent: 100, duration: 3, stagger: .1}, 1)
    // .fromTo(title, {opacity: 0}, {opacity: 0.8, duration: 3, stagger: .1}, 2)
    .from(partName, {yPercent: 100, stagger: .1}, 2)
    .fromTo(partName, {opacity: 0}, {opacity: 1,  stagger: .1}, 2)
    .from(partDetail, {yPercent: 100, stagger: .1}, 3)
    .fromTo(partDetail, {opacity: 0}, {opacity: 1, stagger: .1}, 3)
    .to(camera.instance.position, {y: -39, x: 0, z: 10, duration: 4}, 0)
    .to(camera.controls.target, {y: -40, x: 0, z: 0, duration: 4}, 0)
    
    // .fromTo(camera.instance.position, {y: -30, x: 0, z: 10}, {y: -39, x: 0, z: 10, duration: 3}, 0)
    // .fromTo(camera.controls.target, {y: -30, x: 0, z: 10}, {y: -40, x: 0, z: 0, duration: 3}, 0)
    // .to(nextButton, {opacity: 1}, 3)
    // .from(nextSpan, {yPercent: -20, stagger: .1}, 3)
    
    return tl
}

export default partnerEnterTransition