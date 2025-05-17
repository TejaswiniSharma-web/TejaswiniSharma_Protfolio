// Smooth Scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.hash) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if(target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Highlight nav on scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  sections.forEach(section => {
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.hash === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});