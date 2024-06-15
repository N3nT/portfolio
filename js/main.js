const body = document.querySelector('body')
const hamburger = document.querySelector('.fa-solid')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavListElements = document.querySelectorAll('.mobile-nav__list-element')
const pcNav = document.querySelector('.nav__pc')
const pcNavLine = document.querySelector('.pc-line')

const toggleMobileMenu = () => {
	mobileNav.classList.toggle('mobile-nav--active')
	hamburger.classList.toggle('fa-bars')
	hamburger.classList.toggle('fa-xmark')
    body.classList.toggle('fixed-body')
	
}

const stickyNav = () => {
	//console.log(window.scrollY);
	if(window.scrollY >= 83){
		pcNav.classList.add('sticky-nav')
		pcNavLine.classList.add('sticky-line')

	} else {
		console.log('dick2');
		pcNav.classList.remove('sticky-nav')
	}
}

window.addEventListener('scroll', stickyNav)
hamburger.addEventListener('click', toggleMobileMenu)
mobileNavListElements.forEach(li => {
	li.addEventListener('click', toggleMobileMenu)
});