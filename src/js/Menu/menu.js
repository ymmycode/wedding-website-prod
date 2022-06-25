const menu = (container) => 
{

    const menuButton = container.querySelector(`.menu-btn`)

    menuButton.addEventListener(`click`, () => 
    {
        menuButton.classList.toggle(`active`)

        container.querySelectorAll(`.links`).forEach((link) => 
        {
            link.classList.toggle(`active`)
        })
    })
}

export default menu