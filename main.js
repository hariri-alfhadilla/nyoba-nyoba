var typed = new Typed('.name', {
    strings: ['M.Hariri Alfhadilla'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
// ===== SCROLL HOME =====
sr.reveal('.header', {delay:200,reset:false,})
sr.reveal('.wrapper__text', {origin:'left',delay:400,})
sr.reveal('.image__wrapper', {origin:'right',delay:400,})
