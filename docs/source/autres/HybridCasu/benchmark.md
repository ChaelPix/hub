# Benchmarks

## Puzzle Games

<div class="carousel" id="carousel1">
    <div class="carousel-container">
        <div class="carousel-slide">
            <img src="https://picsum.photos/800/1000" alt="Image 1">
            <p class="caption">Caption for image 1</p>
        </div>
        <div class="carousel-slide">
            <img src="https://picsum.photos/800/1000" alt="Image 2">
            <p class="caption">Caption for image 2</p>
        </div>
        <div class="carousel-slide">
            <img src="https://picsum.photos/800/1200" alt="Image 3">
            <p class="caption">Caption for image 3</p>
        </div>
    </div>
    <button class="carousel-button prev" onclick="moveSlide(-1, 'carousel1')">❮</button>
    <button class="carousel-button next" onclick="moveSlide(1, 'carousel1')">❯</button>
    <div class="carousel-dots">
        <span class="dot" onclick="currentSlide(1, 'carousel1')"></span>
        <span class="dot" onclick="currentSlide(2, 'carousel1')"></span>
        <span class="dot" onclick="currentSlide(3, 'carousel1')"></span>
    </div>
</div>




<!---------------------- Caroussel ---------------->
<style>
.carousel {
    position: relative;
    max-width: 800px;
    margin: 0 auto 30px auto;
}

.carousel-container {
    position: relative;
    overflow: hidden;
}

.carousel-slide {
    display: none;
    text-align: center;
}

.carousel-slide img {
    max-width: 100%;
    height: auto;
}

.carousel-slide.active {
    display: block;
}

.caption {
    margin-top: 10px;
    font-style: italic;
    color: #666;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 3px;
}

.carousel-button.prev {
    left: 10px;
}

.carousel-button.next {
    right: 10px;
}

.carousel-dots {
    text-align: center;
    margin-top: 15px;
}

.dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    background: #bbb;
    border-radius: 50%;
    cursor: pointer;
}

.dot.active {
    background: #717171;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        // Store the current slide index as a data attribute
        carousel.dataset.slideIndex = 1;
        // Initialize the carousel
        showSlide(1, carousel.id);
    });
});

function moveSlide(n, carouselId) {
    const carousel = document.getElementById(carouselId);
    let slideIndex = parseInt(carousel.dataset.slideIndex);
    showSlide(slideIndex + n, carouselId);
}

function currentSlide(n, carouselId) {
    showSlide(n, carouselId);
}

function showSlide(n, carouselId) {
    const carousel = document.getElementById(carouselId);
    let slides = carousel.querySelectorAll('.carousel-slide');
    let dots = carousel.querySelectorAll('.dot');
    let slideIndex = parseInt(carousel.dataset.slideIndex || 1);
    
    // Update slide index
    slideIndex = n;
    
    // Handle edge cases
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    
    // Store the updated slide index
    carousel.dataset.slideIndex = slideIndex;
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show the current slide and mark its dot as active
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add('active');
}
</script>