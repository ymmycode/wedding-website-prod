

const resetMenu = (container) => 
{
    const menuButton = container.querySelector(`.menu-btn`)
    menuButton.classList.toggle(`active`)

    for(let i = 0; i < 7; i++)
    {
        const links = container.querySelector(`.link${i+1}`)
        links.classList.toggle(`active`)
    }
}

export default resetMenu