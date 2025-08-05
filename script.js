// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
}

// Close menu when clicking a link (mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-links").classList.remove("active");
    });
});

// Optional: Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href") !== "#") {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    const nextBtn = document.querySelector('.hero-arrow.right');
    const prevBtn = document.querySelector('.hero-arrow.left');
    let slideInterval = setInterval(nextSlide, 3000);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }

    function prevSlide() {
        let prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }
// Rooms slider arrows
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.rooms-slider');
    const leftBtn = document.querySelector('.rooms-arrow.left');
    const rightBtn = document.querySelector('.rooms-arrow.right');
    if (slider && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -260, behavior: 'smooth' });
        });
        rightBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 260, behavior: 'smooth' });
        });
    }
});

// Hero slider functionality (already present, but ensure transition is slow)
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    const nextBtn = document.querySelector('.hero-arrow.right');
    const prevBtn = document.querySelector('.hero-arrow.left');
    let slideInterval = setInterval(nextSlide, 4000); // 4 seconds per slide

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }

    function prevSlide() {
        let prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    }

    showSlide(0);
});
    showSlide(0);

});
