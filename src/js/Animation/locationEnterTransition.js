import gsap from "gsap";

const locationEnterTransition = (camera, mapScene, container) => 
{
    const title = container.querySelectorAll(`.title-location span`)
    const geoLink = container.querySelector(`.geo-link`)
    const transition = container.querySelector(`.transition`)
    const nextButton = container.querySelector(`.next-btn`)
    const nextSpan = container.querySelectorAll(`.next-btn span`)
    const loadingScreen = container.querySelector(`.loading-screen`)
    const corner = container.querySelectorAll(`.corner-decor`)

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    tl
    .fromTo(transition, {yPercent: 0}, {yPercent: 100, duration: 1, delay: .2}, 0)
    .to(transition, {yPercent: 200, duration: 1}, 1.5)
    .set(loadingScreen, {zIndex: -99}, 1.5)
    .set(transition, {zIndex: -99}, 2.5)
    .to(corner, {opacity: 1, duration: 3}, 2.5)
    .from(title, {yPercent: 100, stagger: .1}, 2)
    .fromTo(title, {opacity: 0}, {opacity: 0.8, stagger: .1}, 2)
    .fromTo(camera.instance.position, {y: -45, x: 0, z: 10}, {y: -55, x: 0, z: 10, duration: 3}, 1.2)
    .fromTo(camera.controls.target, {y: -50, x: 0, z: 10}, {y: -60, x: 0, z: 0, duration: 1}, 1.2)
    .from(geoLink, {xPercent: 200, x: 0, z: 0}, 3)
    .fromTo(geoLink, {opacity: 0}, {opacity: 1}, 3)
    .to(nextButton, {opacity: 1}, 3)
    .from(nextSpan, {yPercent: -20, stagger: .1}, 3)
    .then(() => geoLink.classList.toggle(`animate`))
    .then(() => camera.controls.enabled = true)

    return tl
}

export default locationEnterTransition