       // Show the content container when the drop_container_button is clicked
    document.querySelector('.drop_container_button').addEventListener('click', function() {
        var content = document.querySelector('.drop_content_container');
        if (content.classList.contains('show-content')) {
            content.classList.remove('show-content');
        } else {
            content.classList.add('show-content');
        }
    });

    // Hide the content container when the exit_button is clicked
    document.querySelector('.drop_content_container .exit_button').addEventListener('click', function() {
        var content = document.querySelector('.drop_content_container');
        content.classList.remove('show-content');
    });


    // Function to toggle the display for a single content element
    function toggleContentDisplay(button, content) {
        const iconUp = button.querySelector('.bi-chevron-double-up');
        const iconDown = button.querySelector('.bi-chevron-double-down');

        button.addEventListener('click', function() {
            if (content.classList.contains('show-content')) {
                content.classList.remove('show-content');
                if (iconUp && iconDown) {
                    iconUp.style.display = 'none';  // Hide up icon
                    iconDown.style.display = 'block';  // Show down icon
                }
            } else {
                content.classList.add('show-content');
                if (iconUp && iconDown) {
                    iconUp.style.display = 'block';  // Show up icon
                    iconDown.style.display = 'none';  // Hide down icon
                }
            }
        });
    }

    // Get all buttons
    const buttons = document.querySelectorAll('.drop_content_button');

    // Loop through each button
    buttons.forEach(function(button) {
        // Find the drop_content associated with this button
        const content = button.nextElementSibling;

        if (content && content.classList.contains('drop_content')) {
            toggleContentDisplay(button, content);
        }
    });



    // Hide the content container when the exit_button is clicked
    document.querySelectorAll('.drop_content_container .exit_button').forEach(function(exitButton) {
        exitButton.addEventListener('click', function() {
            var content = this.closest('.drop_content_container');
            if (content) {
                content.classList.remove('show-content');
            }
        });
    });