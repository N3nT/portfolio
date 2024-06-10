const body = document.querySelector('body')
const hamburger = document.querySelector('.fa-solid')
const mobileNav = document.querySelector('.mobile-nav')

const toggleMobileMenu = () => {
	mobileNav.classList.toggle('mobile-nav--active')
	hamburger.classList.toggle('fa-bars')
	hamburger.classList.toggle('fa-xmark')
    body.classList.toggle('fixed-body')
}

hamburger.addEventListener('click', toggleMobileMenu)