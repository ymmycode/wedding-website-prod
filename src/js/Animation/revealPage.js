import gsap from 'gsap'

const animationEnter = (container) =>
{
    // transition dom
    const transition = container.querySelector(`div.transition`)
    const content = container.querySelector(`.content`)
    // console.log(transition)

    // gsap timeline
    const tl = gsap.timeline({
        defaults: {
            // ease: "power4.out",
            duration: .5,
        }
    })

    // enter page animation
    tl
    .fromTo(transition, {yPercent: 0}, {yPercent: 100, delay: 1})
    .fromTo(transition, {yPercent: 100}, {yPercent: 200})
    .fromTo(content, {opacity: 0}, {opacity: 1})
    return tl
}

export default animationEnter