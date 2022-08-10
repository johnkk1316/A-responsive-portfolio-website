/*---MENU SHOW Y HIDDEN----*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')




/*---ADDED MENU SHOW---*/
/*---VALIDATE IF CONSTANT EXISTS.---*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}



/*---ADDED MENU HIDDEN---*/
/*---VALIDATE IF CONSTANT EXISTS.---*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



/*----REMOVE MENU MOBILE----*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*---ACCORDION SKILLS---*/
const   skillsContent = document.getElementsByClassName('skills_content'),
        skillsHeader  = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}



skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})