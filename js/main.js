const body = document.querySelector('body')
const hamburger = document.querySelector('.fa-solid')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavListElements = document.querySelectorAll('.mobile-nav__list-element')
const pcNav = document.querySelector('.nav__pc')
const pcNavLine = document.querySelector('.pc-line')
const form = document.querySelector("form");

const toggleMobileMenu = () => {
	mobileNav.classList.toggle('mobile-nav--active')
	hamburger.classList.toggle('fa-bars')
	hamburger.classList.toggle('fa-xmark')
    body.classList.toggle('fixed-body')
	
}

const stickyNav = () => {
	if(window.scrollY >= 83){
		pcNav.classList.add('sticky-nav')

	} else {
		console.log('dick2');
		pcNav.classList.remove('sticky-nav')
	}
}

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    e.currentTarget.submit();
  });
}

window.addEventListener('scroll', stickyNav)
hamburger.addEventListener('click', toggleMobileMenu)
mobileNavListElements.forEach(li => {
	li.addEventListener('click', toggleMobileMenu)
});