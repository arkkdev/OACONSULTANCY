document.addEventListener("DOMContentLoaded", function() {
    const dropButton = document.querySelector('.square_drop_button');
    const squareBottom = document.querySelector('.square_bottom');
    const chevronUp = document.querySelector('.square_drop_button .bi-chevron-double-up');
    const chevronDown = document.querySelector('.square_drop_button .bi-chevron-double-down');
    const squareContainer = document.querySelector('.square_container');
    const squareTop = document.querySelector('.square_top');

    dropButton.addEventListener('click', function() {
        if (getComputedStyle(squareBottom).display === "none") {
            // If squareBottom is hidden, display and fade in
            squareBottom.style.display = "block";
            setTimeout(() => {
                squareBottom.style.opacity = "1";
            }, 10);

            // Adjust heights
            squareContainer.style.height = "337.68vw";
            squareTop.style.height = "37%";

            // Adjust chevrons
            chevronUp.style.display = "block";
            chevronDown.style.display = "none";
        } else {
            // If squareBottom is displayed, fade out
            squareBottom.style.opacity = "0";
            setTimeout(() => {
                squareBottom.style.display = "none";
            }, 0);

            // Reset heights to default
            squareContainer.style.height = "125vw";
            squareTop.style.height = "100%";

            // Adjust chevrons
            chevronUp.style.display = "none";
            chevronDown.style.display = "block";
        }
    });
});
