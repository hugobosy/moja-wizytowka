const menu = document.querySelector('.header__click');
const hMenu = document.querySelector('.header__menu');
const skill = document.querySelector('.aboutMe__skills');
menu.addEventListener('click', () => {
    menu.classList.toggle('menu__active');
    hMenu.classList.toggle('menu__active');
});

const skills = () => {
    const skillList = document.querySelectorAll('.aboutMe__skill-progress');
    setTimeout(() =>{
        skillList.forEach(skill => {
            if(skill.id === 'html') {
                skill.style.width = '95%';
            }
            if(skill.id === 'css') {
                skill.style.width = '95%';
            }
            if(skill.id === 'js') {
                skill.style.width = '45%';
            }
            if(skill.id === 'jq') {
                skill.style.width = '45%';
            }
            if(skill.id === 'node') {
                skill.style.width = '15%';
            }
            if(skill.id === 'bootstrap') {
                skill.style.width = '55%';
            }

        })
    },500);
}

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    const boxTop = skill.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
        skills()
    }
}
window.addEventListener('scroll', checkBoxes)