require("./src/css/prism-atom-dark.css")
require("./src/css/reset.css")
require("./src/css/typography.css")

exports.onInitialClientRender = () => {
    window.onscroll = () => {
        // minimum scroll amount to apply the sticky header
        const threshold = 1;
        const headerEl = document.querySelector('header');
        const mainEl = document.querySelector('main');

        // calculate opacity based on scroll amount
        // we multiply scrollY by 4 to amplify how quickly
        // the opacity increases
        let opacity =  (window.scrollY * 4) / document.documentElement.scrollHeight;

        // max 
        if (opacity > 1) { opacity = 1; }

        headerEl.style.background = `rgba(39,39,39,${opacity})`;

        // apply sticky header style if not already applied
        if (!headerEl.classList.contains('sticky-header') && window.scrollY > threshold) {
            headerEl.classList.add('sticky-header');
            mainEl.classList.add('sticky-header-active');
        }
    
        // remove sticky header style if not already removed
        if (headerEl.classList.contains('sticky-header') && window.scrollY <= threshold) {
            headerEl.classList.remove('sticky-header');
            mainEl.classList.remove('sticky-header-active');
        }
    }
}