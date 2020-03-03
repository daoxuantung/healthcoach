var slideIndex = 0;
// clickSlides();

window.onload = function showSlides() {
    
    var slides = document.getElementsByClassName("slide");
    var buttons = document.getElementsByClassName("button");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" button-actived", "");
    }

    slides[slideIndex-1].style.display = "block";  
    buttons[slideIndex-1].className += " button-actived";
    setTimeout(showSlides, 4000);
}
