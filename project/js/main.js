const navItems       = document.querySelector('.nav_items')
const openNavBtn     = document.querySelector('#open_nav_btn')
const closeNavBtn    = document.querySelector('#close_nav_btn')


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


//-- sidebar on small devices(manege_Categories) --
const sidbar          = document.querySelector('aside')
const hideSidebarBtn  = document.querySelector('#hide_sidebar_btn')
const showSidebarBtn  = document.querySelector('#show_sidebar_btn')
//----------------- show sidebar -----------------
const showSidebar     = () => {
    sidbar.style.left = '0'
    showSidebarBtn.style.display = 'none'
    hideSidebarBtn.style.display = 'inline-block'
}
//----------------- hide sidebar -----------------
const hideSidebar     = () => {
    sidbar.style.left = '-100%'
    showSidebarBtn.style.display = 'inline-block'
    hideSidebarBtn.style.display = 'none'
}
showSidebarBtn.addEventListener('click', showSidebar)
hideSidebarBtn.addEventListener('click', hideSidebar)