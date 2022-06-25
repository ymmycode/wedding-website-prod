import gsap from "gsap"

const showMenuButton = (container) => 
{
    const navigation = container.querySelector(`#navigation-menu`)

    const tl = gsap.timeline({
        defaults: {
            ease: "power4.out",
            duration: 3
        }
    })

    tl
    .from(navigation, {yPercent: 200}, 2)
    .fromTo(navigation, {opacity: 0}, {opacity: 1}, 2)

    return tl
}

export default showMenuButton