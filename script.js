const menuBtn = document.querySelector('.menu-btn')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const links = document.querySelector('.links')
const media = window.matchMedia('(min-width: 992px)')


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

const closeMenu = () => {
    links.classList.remove('active')
    closeMenuBtn.style="display: none"
    menuBtn.style="display: block"
}

menuBtn.addEventListener('click', showMenu)
closeMenuBtn.addEventListener('click', closeMenu)
media.addEventListener('change', ()=>{checkMedia(media)})
