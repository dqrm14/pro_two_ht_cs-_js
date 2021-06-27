/*top par*/
let el = document.querySelector(".par_head")

function show() {
    el.classList.toggle("dis_none");
}
/* end top par */


/* portfolio*/

let alll = document.querySelector(".all"); //btn

/*let web = document.querySelector(".web"); //btn

let hoto = document.querySelector(".hoto"); //btn

let all = document.querySelector(".dising");//btn*/


let photo = document.querySelectorAll(".photo");//curd

let templet = document.querySelectorAll(".templet");//curd

let grap = document.querySelectorAll(".grap");//curd


/* function */

alll.addEventListener('click', allll)

function allll() {
    for (var i = 0; i < photo.length; i++) {
        photo[i].classList.remove('dis_none')
    };
    for (var i = 0; i < grap.length; i++) {
        grap[i].classList.remove('dis_none')
    };
    for (var i = 0; i < templet.length; i++) {
        templet[i].classList.remove('dis_none')
    };
} 

function ho() {
    for (var i = 0; i < photo.length; i++) {
        photo[i].classList.remove('dis_none')
    };
    for (var i = 0; i < grap.length; i++) {
        grap[i].classList.add('dis_none')
    };
    for (var i = 0; i < templet.length; i++) {
        templet[i].classList.add('dis_none')
    };
}   
function di() {
    for (var i = 0; i < photo.length; i++) {
        photo[i].classList.add('dis_none')
    };
    for (var i = 0; i < grap.length; i++) {
        grap[i].classList.remove('dis_none')
    };
    for (var i = 0; i < templet.length; i++) {
        templet[i].classList.add('dis_none')
    };
}  

function we() {
    for (var i = 0; i < photo.length; i++) {
        photo[i].classList.add('dis_none')
    };
    for (var i = 0; i < grap.length; i++) {
        grap[i].classList.add('dis_none')
    };
    for (var i = 0; i < templet.length; i++) {
        templet[i].classList.remove('dis_none')
    };
} 


/*end function*/




/*end portfolio*/
/*slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
window.onload= function () {
    setInterval(function(){ 
    plusSlides(1);
}, 3500);
}

/*end slider*/