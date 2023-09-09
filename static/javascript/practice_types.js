document.addEventListener("DOMContentLoaded", function() {

    let practiceTypeItems = document.querySelectorAll(".practice_types li");
    let practiceContentItems = document.querySelectorAll(".practice_content li");

    practiceTypeItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // prevent any default link actions

            // Remove the white background from all items and set the background color of the first child to black
            practiceTypeItems.forEach(practiceTypeItem => practiceTypeItem.style.backgroundColor = '');
            practiceTypeItems[0].style.backgroundColor = '#d6e5ff';

            // Set the clicked item's background to white
            this.style.backgroundColor = 'whitesmoke';

            // Hide all content items
            practiceContentItems.forEach(contentItem => contentItem.style.display = 'none');

            // Display the corresponding content item for the clicked tab
            practiceContentItems[index].style.display = 'flex';

            // Adjust border-radius for the content items
            let contentStyle = document.querySelector('.practice_content').style;

            if (index === practiceTypeItems.length - 1) { // last child
                contentStyle.borderTopRightRadius = '0';
                contentStyle.borderTopLeftRadius = '5vw';
            } else if (index === 1) { // second child
                contentStyle.borderTopRightRadius = '5vw';
                contentStyle.borderTopLeftRadius = '5vw';
            } else { // any other child
                contentStyle.borderTopRightRadius = '5vw';
                contentStyle.borderTopLeftRadius = '0';
            }

            // If the first child is clicked, set its background back to white
            if (index === 0) {
                practiceTypeItems[0].style.backgroundColor = 'whitesmoke';
            }
        });
    });
});


