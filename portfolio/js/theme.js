// Set dark theme permanently
function applyTheme() {
    document.documentElement.setAttribute('data-theme', 'custom-night'); 
    document.documentElement.classList.add('dark-theme');
}

// Apply dark theme on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
});
