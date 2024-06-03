// click event of contact us button
document.addEventListener('DOMContentLoaded', (event) => {
    const contactBtn = document.getElementById('contactBtn');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');

    contactBtn.addEventListener('click', () => {
        popupForm.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popupForm) {
            popupForm.style.display = 'none';
        }
    });
});

// change the event on click event 
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

// hover on the cards
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#ffe6e6';
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#fff';
    });
});


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

//contact us api
// Add click event listeners for the "Contact Us" button
document.addEventListener('DOMContentLoaded', (event) => {
    const contactBtn = document.getElementById('contactBtn');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');

    contactBtn.addEventListener('click', () => {
        popupForm.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popupForm) {
            popupForm.style.display = 'none';
        }
    });
});
