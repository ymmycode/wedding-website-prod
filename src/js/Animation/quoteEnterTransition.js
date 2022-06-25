import gsap from "gsap"

const quoteEnterTransition = (camera, container) => 
{
    const transition = container.querySelector(`.transition`)
    const title = container.querySelectorAll(`.title-quote span`)
    const quote = container.querySelector(`.quote-content p`)
    const quoteSource = container.querySelector(`.source`)
    // const nextButton = container.querySelector(`.next-btn`)
    // const nextSpan = container.querySelectorAll(`.next-btn span`)
    // const loadingScreen = container.querySelector(`.loading-screen`)
    // const corner = container.querySelectorAll(`.corner-decor`)
    const ornament = container.querySelectorAll(`.ornament`)

    const cards = container.querySelectorAll(`.card`)

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
    // .to(corner, {opacity: 1, duration: 3}, 2.5)
    .to(ornament, {opacity: 1, duration: 4, stagger: 0.1}, 1.5)
    .to(camera.instance.position, {y: -70, x: 0, z: 10}, 0)
    .to(camera.controls.target, {y: -70, x: 0, z: 0}, 0)
    // .set(camera.instance.position, {y: -70, x: 0, z: 10}, 0.5)
    // .set(camera.controls.target, {y: -70, x: 0, z: 0}, 0.5)

    .to(cards, {opacity: 1, duration: 2, stagger: 0.5}, 1.5)
    .from(cards, {yPercent: 10, duration: 2, stagger: 0.5}, 1.5)

    .from(title, {yPercent: 100, stagger: .1}, 1)
    .fromTo(title, {opacity: 0}, {opacity: 0.8, stagger: .1}, 1)
    .from(quote, {yPercent: 100}, 1.5)
    .fromTo(quote, {opacity: 0}, {opacity: 0.8, stagger: .1}, 1.5)
    .from(quoteSource, {yPercent: 200, duration: 3}, 1.5)
    .fromTo(quoteSource, {opacity: 0}, {opacity: 0.8}, 1.5)
    // .to(nextButton, {opacity: 1}, 3)
    // .from(nextSpan, {yPercent: -20, stagger: .1}, 3)

    return tl
}

export default quoteEnterTransition