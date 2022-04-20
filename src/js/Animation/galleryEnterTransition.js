import gsap from "gsap";

const galleryEnterTransition = (camera, gallery, container) => 
{

    const transition = container.querySelector(`.transition`)
    const nextButton = container.querySelector(`.next-btn`)
    const nextSpan = container.querySelectorAll(`.next-btn span`)
    const loadingScreen = container.querySelector(`.loading-screen`)

    const tl = gsap.timeline({
        defaults: {
            duration: 2,
            ease: `power4.out`,
        }
    })

    camera.instance.far = 30
    camera.instance.updateProjectionMatrix()

    tl
    .fromTo(transition, {yPercent: 0}, {yPercent: 100, duration: 1, delay: .2}, 0)
    .to(transition, {yPercent: 200, duration: 1}, 1.5)
    .set(loadingScreen, {zIndex: -99}, 1.5)

    
    .fromTo(camera.instance.position, {y: -80, x: 0, z: 0}, {y: -100, x: 0, z: 0, duration: 3}, 1)
    .fromTo(camera.controls.target, {y: -80, x: 0, z: 0}, {y: -100, x: 0, z: 0, duration: 3}, 1)
    

    .to(nextButton, {opacity: 1}, 3)
    .from(nextSpan, {yPercent: -20, stagger: .1}, 3)

    return tl
}

export default galleryEnterTransition