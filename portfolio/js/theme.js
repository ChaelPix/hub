// function to apply a theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme); // set theme on <html>
    localStorage.setItem('selected-theme', theme); // save theme to localStorage
}

// function to load the saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
        applyTheme(savedTheme); // apply saved theme
        // update the toggle state if needed
        const themeToggle = document.querySelector('.theme-controller');
        if (themeToggle) themeToggle.checked = savedTheme === 'custom-night';
    }
}

// event listener for theme toggle
document.addEventListener('DOMContentLoaded', () => {
    loadTheme(); // load theme on page load

    const themeToggle = document.querySelector('.theme-controller');
    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            const newTheme = e.target.checked ? 'custom-night' : 'custom-cmyk';
            applyTheme(newTheme);
        });
    }
});
