const menuBtn = document.querySelector('.menu-btn')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const links = document.querySelector('.links')
const media = window.matchMedia('(min-width: 992px)')

// właściwość matchMedia - wywołanie zdarzenia na zmianę rozdzielczości

const checkMedia = (media) => {
    if (media.matches) {
        links.classList.remove('active')
        menuBtn.style="display:none"
        closeMenuBtn.style="display:none"
    } else {
        menuBtn.style="display:block"
    }
}

const showMenu = () => {
    links.classList.add('active')
    menuBtn.style="display:none"
    closeMenuBtn.style="display: block"
}

// delegacja zdarzeń, target na jeden przycisk

const closeMenu = (event) => {
    if (event.target.classList.value !== "bi bi-list") {
    links.classList.remove('active')
    closeMenuBtn.style="display: none"
    menuBtn.style="display: block"
    }
}


menuBtn.addEventListener('click', showMenu)
media.addEventListener('change', ()=>{checkMedia(media)})
window.addEventListener('click', closeMenu)