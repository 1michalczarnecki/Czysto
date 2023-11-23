const navItems = document.querySelectorAll('.nav__desktop-item')
const section = document.querySelectorAll('.section')

window.onscroll = () => {
    section.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 62;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        navItems.forEach((links) => {
          links.classList.remove("nav__desktop-item--active");
          document
            .querySelector(".nav__desktop-items a[href*=" + id + "]")
            .classList.add("nav__desktop-item--active");
        });
      }
    });
  };