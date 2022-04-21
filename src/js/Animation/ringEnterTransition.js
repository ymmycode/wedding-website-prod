import gsap from "gsap"

const ringEnterTransition = (camera, rings, container) => 
{
    const count = container.querySelectorAll(`.count`)
    const partner = container.querySelectorAll(`.partner`)
    const wedDate = container.querySelectorAll(`.wed-date`)
    const ringText = container.querySelector(`.ring-text`)
    const transition = container.querySelector(`.transition`)
    const notifLink = container.querySelector(`.notification-link`)
    const nextButton = container.querySelector(`.next-btn`)
    const nextSpan = container.querySelectorAll(`.next-btn span`)
    const loadingScreen = container.querySelector(`.loading-screen`)
    // transition.style.transform = `translateY(-100%);`

    camera.controls.enabled = true

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: `power4.out`,
        }
    })

    tl
    .fromTo(transition, {yPercent: 0}, {yPercent: 100, duration: 1, delay: .2}, 0)
    .to(transition, {yPercent: 200, duration: 1}, 1.5)
    .set(loadingScreen, {zIndex: -99}, 1.5)
    .to(ringText, {opacity: 1},1)
    .to(camera.instance.position, {y: -18, x: 0, z: 10}, 1)
    .to(camera.controls.target, {y: -20, x: 0, z: 0}, 1)
    .to(rings.ringGroup.rotation, {y: `+=105`, duration: 3}, 2)
    .from(count, {yPercent: 100, opacity: 0, duration: 2, stagger: .1,}, 2.2)
    .from(partner, {yPercent: 100, opacity: 0, duration: 2, stagger: .1}, 2.2)
    .from(wedDate, {yPercent: 100, opacity: 0, duration: 2, stagger: .1}, 2.2)
    .to(nextButton, {opacity: 1, duration: 2}, 3)
    .from(nextSpan, {yPercent: -20, duration: 2, stagger: .1}, 3)
    .from(notifLink, {xPercent: 200, x: 0, z: 0}, 3)
    .fromTo(notifLink, {opacity: 0}, {opacity: 1}, 3)
    .then(() => notifLink.classList.toggle(`animate`))

    return tl
}

export default ringEnterTransition