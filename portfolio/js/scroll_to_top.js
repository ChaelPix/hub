const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let justClicked = false;

function handleScroll() {
    if (justClicked) return;
    if (window.scrollY > 300) {
        if (scrollToTopBtn.classList.contains('hidden')) {
            scrollToTopBtn.classList.remove('hidden');
            void scrollToTopBtn.offsetWidth;
        }
        scrollToTopBtn.classList.add('opacity-100', 'scale-100');
        scrollToTopBtn.classList.remove('opacity-0', 'scale-90');
    } else {
        scrollToTopBtn.classList.add('opacity-0', 'scale-90');
        scrollToTopBtn.classList.remove('opacity-100', 'scale-100');
        setTimeout(() => {
            if (scrollToTopBtn.classList.contains('opacity-0')) {
                scrollToTopBtn.classList.add('hidden');
            }
        }, 400);
    }
}

window.addEventListener('scroll', handleScroll);

scrollToTopBtn.addEventListener('click', () => {
    justClicked = true;
    scrollToTopBtn.classList.add('opacity-0', 'scale-90');
    scrollToTopBtn.classList.remove('opacity-100', 'scale-100');
    setTimeout(() => {
        scrollToTopBtn.classList.add('hidden');
        justClicked = false;
    }, 800);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});