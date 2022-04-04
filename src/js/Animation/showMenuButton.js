import gsap from "gsap"

const showMenuButton = (container) => 
{
    const menuButton = container.querySelector(`.menu-btn`)

    const tl = gsap.timeline({
        defaults: {
            ease: "power4.out",
            duration: 3
        }
    })

    tl
    .from(menuButton, {xPercent: -200}, 2)
    .to(menuButton, {opacity: 1}, 2)

    return tl
}

export default showMenuButton