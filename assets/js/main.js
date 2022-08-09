/*---MENU SHOW Y HIDDEN----*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')




/*---ADDED MENU SHOW---*/
/*---VALIDATE IF CONSTANT EXISTS.---  */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}