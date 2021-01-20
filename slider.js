var slideIndex = 1;
showSlides(slideIndex);
/// using jQuery to control the elements actiond 
$("#dot1").click(function () { currentSlide(1) });
$("#dot2").click(function () { currentSlide(2) });
$("#dot3").click(function () { currentSlide(3) });
$("#dot4").click(function () { currentSlide(4) });
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    /*var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");*/
    let slides = $(".mySlides")
    let dots = $(".dot");
    //console.log(slides, dots);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}