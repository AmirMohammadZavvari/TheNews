const navItems    = document.querySelector('.nav_items')
const openNavBtn  = document.querySelector('#open_nav_btn')
const closeNavBtn = document.querySelector('#close_nav_btn')

//------------- (open) nav drupdown -------------
const openNav = () => {
    navItems.style.display = 'flex'
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}

//------------- (close) nav drupdown -------------
const closeNav = () => {
    navItems.style.display = 'none'
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}
openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)