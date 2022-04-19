
const copyToClipboard = (container) => 
{
    const copyToClip = (evt) => 
    {
        const targetParent = evt.target.parentElement
        const targetText = targetParent.querySelector(`.val`).innerText

        navigator.clipboard
        .writeText(targetText)
        .then(()=>
        {
            // toggle success
            // with timeout

            targetParent.classList.add(`copied`)

            const normal = setTimeout(()=>
            {
                targetParent.classList.remove(`copied`)
            }, 2000)
        })
    }

    const copyButton = container.querySelectorAll(`.copy-btn span`)

    copyButton.forEach((button)=>
    {
        button.addEventListener(`click`, copyToClip)
    })
}

export default copyToClipboard

