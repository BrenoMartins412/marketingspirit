document.addEventListener('DOMContentLoaded', function() {
  const fadeUpElements = document.querySelectorAll('.fade-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeUpElements.forEach(el => observer.observe(el));
});
