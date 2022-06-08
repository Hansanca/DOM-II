/* eslint-disable no-undef */
import './less/index.less'

// Your code goes here!

// load
window.onload = function (evt) {
    console.log(`event ${evt.type} test`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready'

     // copy
    window.addEventListener('copy' , () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text

            })
    })

    //  click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    // double-click
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ' '
    })

    // key-down
    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = ' '
        }
    })

    // mouse-move
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY } = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    // mouseenter
    // mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (destination of destinations) {
        destination.addEventListener('mouseenter', evt => {
            destination.style.fontWeight = 'bold'
        })
        // eslint-disable-next-line no-undef
        destination.addEventListener('mouseleave', evt =>{
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }
}