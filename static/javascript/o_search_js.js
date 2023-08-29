document.getElementById("searchIcon").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("searchWindow").style.display = "block";
    });

    document.getElementById("closeSearch").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("searchWindow").style.display = "none";
    });

    document.getElementById("submitSearch").addEventListener("click", function() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const allContent = document.body.textContent || document.body.innerText;
        const resultsDiv = document.getElementById("searchResults");

        if (allContent.toLowerCase().indexOf(searchTerm) !== -1) {
            resultsDiv.innerHTML = "Search term found!";
        } else {
            resultsDiv.innerHTML = "No results found.";
        }
    });
// If you wish to implement search functionality, you'd do that with the submitSearch button. This could involve an API call, or filtering visible elements on the page, etc.