/* SLAIDER */
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
	var slides = document.getElementsByClassName("slides");
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
};

/* MENU-BURGER */
document.querySelector('.header__burger').addEventListener('click', function(e) {
	e.preventDefault();
	/*this.classList.toggle('burger__active');*/
	if (this.classList.contains('burger__active')) {
		this.classList.remove('burger__active');
		document.querySelector('.menu').classList.remove('menu__active');
	}
	else {
		this.classList.add('burger__active');
		document.querySelector('.menu').classList.add('menu__active');
	}
});

/* ANCHORS */
var anchors = document.querySelectorAll('a.scroll-to');

for (var anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    var blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}