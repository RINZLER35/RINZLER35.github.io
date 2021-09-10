

//Function for showing and hiding tabs on Action Sports page and setting active/current tab button style
function openSport(evt, sportName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("sports_tab_container");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab_button_active", "");
    }
    document.getElementById(sportName).style.display = "block";
    evt.currentTarget.className += " tab_button_active";
}
//Function for showing and hiding tabs on Action Sports page and setting active/current tab button style


/*
Old function - changed for a better soloution

function hideNav() {
    var x = document.getElementById("nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
*/



/* Functions for opening and closing nav bar for each page */
function openNav() {
    document.getElementById("nav").style.height = "10%";
}

function closeNav() {
    document.getElementById("nav").style.height = "0%";
}

function submitContactForm() {
    if ((document.getElementById("name").value == ""), (document.getElementById("email").value == ""), (document.getElementById("message").value == ""))  {
        alert("Cannot submit form due to missing input. Please enter all fields.");
    } else {
        alert("Your form has been submitted. ACADEMIC NOTE: This is a demo contact form for my assignment and no saving of input data has occured.");
    }
}
/* Functions for opening and closing nav bar for each page */

/* Functions for slideshow on Gallery Page */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var index;
    var slides_image = document.getElementsByClassName("slide_images");
    var inactive_slide = document.getElementsByClassName("inactive_slide");
    var slideTitle = document.getElementById("slide_title");
    if (n > slides_image.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides_image.length}
    for (index = 0; index < slides_image.length; index++) {
        slides_image[index].style.display = "none";
    }
    for (index=0; index < slides_image.length; index++) {
        inactive_slide[index].className = inactive_slide[index].className.replace(" active_slide", "")
    }
    slides_image[slideIndex-1].style.display = "block";
    inactive_slide[slideIndex-1].className += " active_slide";
    slideTitle.innerHTML = inactive_slide[slideIndex-1].alt;
}
/* Functions for slideshow on Gallery Page */