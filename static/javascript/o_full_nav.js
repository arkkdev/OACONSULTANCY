let timeout;
let isHovered = false; // Track if an element is currently hovered

// Add event listener to full_nav_title for mouseover to show elements
document.querySelectorAll('.full_nav_title').forEach(title => {
    title.addEventListener('mouseover', showElements);
});
// Add event listener to full_nav_title for mouseout to start timeout
document.querySelectorAll('.full_nav_title').forEach(title => {
    title.addEventListener('mouseout', startTimeout);
});
// Elements that when hovered will clear timeout, thus preventing the divs from reverting to their original state
const elementsToWatch =
    ['.full_nav_title', '.full_nav_title a', '.full_nav_body', '.full_nav_bkg', '.full_nav_body ul'];
elementsToWatch.forEach(selector => {
    document.querySelectorAll(selector).forEach(elem => {
        elem.addEventListener('mouseout', () => {
            isHovered = false;
            startTimeout();
        });
        elem.addEventListener('mouseover', () => {
            isHovered = true;
            clearTimeoutFunc();
        });
    });
});
// Functions
function showElements() {
    document.querySelector('.full_nav_bkg').style.display = 'flex';
    document.querySelectorAll('.full_nav_body ul').forEach(ul => {
        ul.style.display = 'flex';
    });
}
function startTimeout() {
    // Add a short delay before starting the timeout to ensure
    // any immediate mouseover event gets a chance to clear the timeout.
    setTimeout(() => {
        if (!isHovered) {
            timeout = setTimeout(() => {
                document.querySelector('.full_nav_bkg').style.display = 'none';
                document.querySelectorAll('.full_nav_body ul').forEach(ul => {
                    ul.style.display = 'none';
                });
            }, 300);
        }
    }, 50); // short delay of 50ms
}
function clearTimeoutFunc() {
    clearTimeout(timeout);
}