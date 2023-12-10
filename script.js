const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const links = document.querySelector(".links");
const mediaMin = window.matchMedia("(min-width: 992px)");
const mediaMax = window.matchMedia("(max-width: 992px)");

// właściwość matchMedia - wywołanie zdarzenia na zmianę rozdzielczości

const checkMedia = mediaMin => {
  if (mediaMin.matches) {
    links.classList.remove("active");
    menuBtn.style = "display:none";
    closeMenuBtn.style = "display:none";
  } else {
    menuBtn.style = "display:block";
  }
};

const showMenu = () => {
  links.classList.add("active");
  menuBtn.style = "display:none";
  closeMenuBtn.style = "display: block";
};

const closeMenu = event => {
  if (event.target.classList.value !== "bi bi-list" && mediaMax.matches) {
    links.classList.remove("active");
    closeMenuBtn.style = "display: none";
    menuBtn.style = "display: block";
  }
};

menuBtn.addEventListener("click", showMenu);
mediaMin.addEventListener("change", () => {
  checkMedia(mediaMin);
});
window.addEventListener("click", closeMenu);
