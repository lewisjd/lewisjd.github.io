document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('nav ul li a');
  
    navItems.forEach(function (navItem) {
      navItem.addEventListener('click', function (event) {
        var href = this.getAttribute('href');
        if (href === 'projects.html') {
          return; // do nothing and allow the link to be followed
        }
        event.preventDefault();
        var targetSection = document.querySelector(href);
        scrollToElement(targetSection);
      });
    });
  
    function scrollToElement(element) {
      var startPosition = window.pageYOffset;
      var targetPosition = element.offsetTop - 50; // 50px offset for smooth scrolling
      var distance = targetPosition - startPosition;
      var duration = 1000;
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  });