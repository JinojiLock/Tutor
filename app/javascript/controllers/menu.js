const navLinks = [
    { selector: '.nav-link-1', target: '.about_me-container' },
    { selector: '.nav-link-2', target: null, top: 1400 },
    { selector: '.nav-link-3', target: null, top: 3200 },
    { selector: '.nav-link-5', target: 'footer' },
    { selector: '.nav-link-4', target: '.form-container' }
  ];
  navLinks.forEach(link => {
    const navLink = document.querySelector(link.selector);
    navLink.addEventListener('click', function (event) {
      event.preventDefault();
      if (link.target) {
        document.querySelector(link.target).scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: link.top,
          behavior: 'smooth'
        });
      }
    });
  });
