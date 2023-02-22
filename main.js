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

const paralax = document.querySelector("body");
console.log(paralax);
window.addEventListener("scroll", function (){
    let offset = window.pageYOffset;
    paralax.style.backgroundPositionY= offset * 0.6 + "px";
    
});
