import gsap from "gsap";

const locationEnterTransition = (camera, mapScene, container) => 
{
    const title = container.querySelectorAll(`.title-location span`)
    const geoLink = container.querySelector(`.geo-link`)
    const transition = document.querySelector(`.transition`)

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    tl
    .fromTo(transition, {yPercent: 0}, {yPercent: 100, duration: 1, delay: .2}, 0)
    .to(transition, {yPercent: 200, duration: 1}, 1.5)
    .from(title, {yPercent: 100, stagger: .1}, 2)
    .fromTo(title, {opacity: 0}, {opacity: 0.8, stagger: .1}, 2)
    .to(camera.instance.position, {y: -55, x: 0, z: 10, duration: 3}, 1)
    .to(camera.controls.target, {y: -60, x: 0, z: 0, duration: 3}, 1)
    .from(geoLink, {xPercent: 200, x: 0, z: 0}, 3)
    .fromTo(geoLink, {opacity: 0}, {opacity: 1}, 3)
    .then(() => geoLink.classList.toggle(`animate`))

    return tl
}

export default locationEnterTransition