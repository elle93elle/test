const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const menuItems = document.querySelectorAll('.menu__item')

function openMenu () {
    iconMenu.classList.add('rotation');
    menuBody.classList.add('slide-in')
    document.body.classList.add('lock')
    document.querySelector('.header__logo').classList.add('open-logo');
    document.querySelector('.overlay').classList.add('shadow');
    document.querySelector('.light-container').classList.add('shadowed');
}

function closeMenu () {
    iconMenu.classList.remove('rotation');
    menuBody.classList.remove('slide-in')
    document.body.classList.remove('lock')
    document.querySelector('.header__logo').classList.remove('open-logo');
    document.querySelector('.overlay').classList.remove('shadow')
    document.querySelector('.light-container').classList.remove('shadowed')
}

function toggleMenu () {
    iconMenu.classList.toggle('rotation');
    menuBody.classList.toggle('slide-in')
    document.body.classList.toggle('lock')
    document.querySelector('.header__logo').classList.toggle('open-logo');
    document.querySelector('.overlay').classList.toggle('shadow')
    document.querySelector('.light-container').classList.toggle('shadowed');  
}

iconMenu.addEventListener('click', toggleMenu)
document.querySelector('.overlay').addEventListener ('click', closeMenu)

for (item of menuItems) {
  item.addEventListener('click', () => {
      if (menuBody.classList.contains('slide-in')) {
          closeMenu();
      }
  })
}