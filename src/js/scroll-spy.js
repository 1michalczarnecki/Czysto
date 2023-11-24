const navItems = document.querySelectorAll('.nav__desktop-item')
const section = document.querySelectorAll('.section')
const btn = document.querySelector('.scroll-to-top')

window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 62
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navItems.forEach(links => {
				links.classList.remove('nav__desktop-item--active')
				document.querySelector('.nav__desktop-items a[href*=' + id + ']').classList.add('nav__desktop-item--active')
			})
		}
	})
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 160) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
});

const scrollToTop = () => {
  window.scroll({
    top: 0,
  });
};

btn.addEventListener('click', scrollToTop)
