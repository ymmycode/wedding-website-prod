import gsap from "gsap"

const quoteEnterTransition = (camera, container) => 
{
    const transition = container.querySelector(`.transition`)
    const title = container.querySelectorAll(`.title-quote span`)
    const quote = container.querySelector(`.quote-content p`)
    const quoteSource = container.querySelector(`.source`)
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
    .from(title, {yPercent: 100, stagger: .1}, 2)
    .fromTo(title, {opacity: 0}, {opacity: 0.8, stagger: .1}, 2)
    .from(quote, {yPercent: 100}, 3)
    .fromTo(quote, {opacity: 0}, {opacity: 0.8, stagger: .1}, 3)
    .from(quoteSource, {yPercent: 200, duration: 3}, 3)
    .fromTo(quoteSource, {opacity: 0}, {opacity: 0.8}, 3)
    .to(nextButton, {opacity: 1}, 3)
    .from(nextSpan, {yPercent: -20, stagger: .1}, 3)

    return tl
}

export default quoteEnterTransition