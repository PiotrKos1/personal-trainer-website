const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-menu-btn')

const showMenu = () => {
    menuBtn.style="display:none";
    closeBtn.style="display:block";
    
}

menuBtn.addEventListener('click', showMenu)