const tooltip = document.getElementById('tooltip');
const btn = document.getElementById('btn');
const mobileNav = document.getElementById('mobile-nav');
const navBtn = document.getElementById('nav-btn');

btn.addEventListener("click", () => {
  tooltip.style.display = "flex";
})

tooltip.addEventListener("click", () => {
  tooltip.style.display = "none";
})

navBtn.addEventListener("click", () => {
  mobileNav.style.display = "flex";
})

mobileNav.addEventListener("click", () => {
  mobileNav.style.display = "none";
})

const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

window.addEventListener('scroll', () => {
  document.getElementById('nav').style.backgroundColor = "black";
})