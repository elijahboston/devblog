require("./src/css/prism-duotone.css")
require("./src/css/reset.css")
require("./src/css/typography.css")

exports.onInitialClientRender = () => {
    window.onscroll = () => {
        // minimum scroll amount to apply the sticky header
        const threshold = 1;
        const headerEl = document.querySelector('header');

        // apply sticky header style if not already applied
        if (!headerEl.classList.contains('sticky-header') && window.scrollY > threshold) {
            headerEl.classList.add('sticky-header');
        }
    
        // remove sticky header style if not already removed
        if (headerEl.classList.contains('sticky-header') && window.scrollY <= threshold) {
            headerEl.classList.remove('sticky-header');
        }
    }
    
}