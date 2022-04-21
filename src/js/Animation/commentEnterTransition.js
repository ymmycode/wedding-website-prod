import gsap from "gsap";

const commentEnterTransition = (camera, container) =>
{

    const transition = container.querySelector(`.transition`)
    const commentContainer = container.querySelector(`#comments-container`)
    const nextButton = container.querySelector(`.next-btn`)
    const nextSpan = container.querySelectorAll(`.next-btn span`)
    const loadingScreen = container.querySelector(`.loading-screen`)

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
    .set(camera.instance.position, {y: -70, x: 0, z: 10}, 1.2)
    .set(camera.controls.target, {y: -70, x: 0, z: 0}, 1.2)
    .to(commentContainer, {opacity: 1}, 2)
    .from(commentContainer, {yPercent: 30}, 2)
    .to(nextButton, {opacity: 1}, 3)
    .from(nextSpan, {yPercent: -20, stagger: .1}, 3)

    return tl
}

export default commentEnterTransition

