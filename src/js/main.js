const navBtn = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav__mobile')
const navLinks = document.querySelectorAll('.nav__link')

const accordionBtns = document.querySelectorAll('.services__accordion-btn')
const footerYear = document.querySelector('.footer__year')
const textElement = document.querySelector('.animation-text')
const inputValue = textElement.innerText

let timeout
let index = 0
let speed = 30


const writingAnimation = () => {
	textElement.innerHTML = inputValue.slice(0, index)

	index++

	if (index <= inputValue.length) {
		timeout = setTimeout(writingAnimation, speed)
	}
}



navLinks.forEach(link => {
	link.addEventListener('click', () => {
		showNavMobile()
	})
})




const showNavMobile = () => {
	navBtn.classList.toggle('is-active')
	navMenu.classList.toggle('nav__mobile--active')
}








function openAccordionItems() {
	const accordionInfo = this.nextElementSibling
	const accordionIcon = this.querySelector('.services__accordion-btn__icon i')

	if (accordionInfo.classList.contains('active')) {
		accordionInfo.classList.remove('active')
		accordionIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
	} else {
		closeAccordionItem()
		accordionInfo.classList.add('active')
		accordionIcon.classList.replace('fa-chevron-down', 'fa-chevron-up')
	}
}

const closeAccordionItem = () => {
	const allActiveItems = document.querySelectorAll('.services__accordion-info.active')
	allActiveItems.forEach(item => item.classList.remove('active'))

	const allIcons = document.querySelectorAll('.services__accordion-btn__icon i')
	allIcons.forEach(icon => icon.classList.replace('fa-chevron-up', 'fa-chevron-down'))
}

const clickOutsideAccordion = e => {
	const isAccordionBtn =
		e.target.classList.contains('services__accordion-btn') || e.target.closest('.services__accordion-btn')

	if (!isAccordionBtn) {
		closeAccordionItem()
	}
}




const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}




navBtn.addEventListener('click', showNavMobile)
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordion)
handleCurrentYear()
writingAnimation()
