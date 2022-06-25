import gsap from "gsap";

const commentEnterTransition = (camera, container) =>
{

    const transition = container.querySelector(`.transition`)
    const commentContainer = container.querySelector(`#comments-container`)
    // const nextButton = container.querySelector(`.next-btn`)
    // const nextSpan = container.querySelectorAll(`.next-btn span`)
    const loadingScreen = container.querySelector(`.loading-screen`)

    camera.controls.enabled = false

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    tl
    // .fromTo(transition, {yPercent: 0}, {yPercent: 100, duration: 1, delay: .2}, 0)
    // .to(transition, {yPercent: 200, duration: 1}, 1.5)
    // .set(loadingScreen, {zIndex: -99}, 1.5)
    // .set(transition, {zIndex: -99}, 2.5)
    // .set(camera.instance.position, {y: -70, x: 0, z: 10}, 1.2)
    // .set(camera.controls.target, {y: -70, x: 0, z: 0}, 1.2)

    .to(camera.instance.position, {y: -70, x: 0, z: 10}, 0)
    .to(camera.controls.target, {y: -70, x: 0, z: 0}, 0)
    .to(commentContainer, {opacity: 1}, 1)
    .from(commentContainer, {yPercent: 30}, 1)
    // .to(nextButton, {opacity: 1}, 3)
    // .from(nextSpan, {yPercent: -20, stagger: .1}, 3)

    return tl
}

export default commentEnterTransition

