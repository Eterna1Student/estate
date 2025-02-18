const burgerBtn = document.querySelector('#burger-btn')
const burgerMenu = document.querySelector('#burger-menu')
const body = document.querySelector('body')



burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header__burger-btn_active')
    burgerMenu.classList.toggle('burger__menu_active')

    if (burgerBtn.classList.contains('header__burger-btn_active')) {
      body.style.overflow = 'hidden'
  } else {
      body.style.overflow = 'auto'
  }
})





