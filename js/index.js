// Menu ------------------------------------------------------------
const buttonList = document.querySelector('.buttonList');
const navList = document.querySelector('nav ul');

buttonList.addEventListener('click', ()=>{
    buttonList.classList.toggle('active');
    navList.classList.toggle('active');
})

// Active Menu -----------------------------------------------------
let menuLink = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLink.forEach(sec => sec.classList.remove("active"));
    menuLink[len].classList.add("active")
}

activeMenu();
window.addEventListener("scroll", activeMenu)
