const body = document.querySelector('body')
const hamburger = document.querySelector('.fa-solid')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavListElements = document.querySelectorAll('.mobile-nav__list-element')
const pcNav = document.querySelector('.nav__pc')
const pcNavLine = document.querySelector('.pc-line')
const form = document.querySelector('form')
const footerDate = document.querySelector('.footer-date')

const toggleMobileMenu = () => {
	mobileNav.classList.toggle('mobile-nav--active')
	hamburger.classList.toggle('fa-bars')
	hamburger.classList.toggle('fa-xmark')
	body.classList.toggle('fixed-body')
}

const stickyNav = () => {
	if (window.scrollY >= 84) {
		pcNav.classList.add('sticky-nav')
	} else {
		pcNav.classList.remove('sticky-nav')
	}
}

const changeFooterDate = () => {
	const date = new Date()
	footerDate.innerText = date.getFullYear()
}

if (form) {
	form.addEventListener('submit', e => {
		e.preventDefault()
		e.currentTarget.submit()
	})
}

body.addEventListener('load', changeFooterDate)
window.addEventListener('scroll', stickyNav)
hamburger.addEventListener('click', toggleMobileMenu)
mobileNavListElements.forEach(li => {
	li.addEventListener('click', toggleMobileMenu)
})
