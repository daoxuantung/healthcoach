//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
//mặc định hiển thị slide đầu tiên 

showSlides(slideIndex = 0);

function currentSlide(n) {
    showSlides(slideIndex = n);
}
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var buttons = document.getElementsByClassName("button");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className =buttons[i].className.replace(" button-actived", "");
    }

    slides[slideIndex].style.display = "block";  
    buttons[slideIndex].className += " button-actived";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }   
}
//tự động chuyển đổi slide sau 4s
setInterval(showSlides,  4000);

window.onload = function() {
    caption = document.getElementById('caption');   
    caption.style.top = "30%";
}

var index = 1;
showDivs(index);

function plusDivs(n) {
  showDivs(index += n);
}

function showDivs(n) {
  var i;
  var carousels = document.getElementsByClassName("carousel-item");

  if (n > carousels.length) {
      index = 1;
    }
  if (n < 1) {
      index =  carousels.length;
    }
  for (i = 0; i < carousels.length; i++) {
    carousels[i].style.display = "none";  
  }

  carousels[index-1].style.display = "block";  
}

