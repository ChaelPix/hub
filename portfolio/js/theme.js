// function to apply a theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme); // set theme on <html>
    localStorage.setItem('selected-theme', theme); // save theme to localStorage
    if (theme === 'custom-night') {
        document.documentElement.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
    }
}

// function to load the saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
        applyTheme(savedTheme); // apply saved theme
        const themeToggle = document.querySelector('.theme-controller');
        if (themeToggle) themeToggle.checked = savedTheme === 'custom-night';
    } else {
        document.documentElement.classList.remove('dark-theme');
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
