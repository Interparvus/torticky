window.onscroll = function() { // add scroll event listener
    var header = document.querySelector("header");
    var headerImg = document.querySelectorAll("header img");
    var HeaderText = document.querySelectorAll("nav li a");
    if (window.pageYOffset > 0) { // check if page is scrolled
      header.classList.add("smaller");
      for (var i = 0; i < headerImg.length; i++) {
        headerImg[i].classList.add("smaller");
      }
      for (var i = 0; i < HeaderText.length; i++) {
        HeaderText[i].classList.add("smaller");
      }
    } else {
      header.classList.remove("smaller"); 
      for (var i = 0; i < headerImg.length; i++){
        headerImg[i].classList.remove("smaller");
      }
      for (var i = 0; i < HeaderText.length; i++) {
        HeaderText[i].classList.remove("smaller");
      }
    }
  }
  const parallaxImages = document.querySelectorAll('.parallax img');

  window.addEventListener('scroll', () => {
    parallaxImages.forEach(image => {
      const scrollPosition = window.pageYOffset;
      const speed = parseFloat(image.dataset.speed) || 1; 
      const yPos = (scrollPosition * speed * 0.4); 
  
      image.style.transform = `translateY(${yPos}px)`;
    });
  });