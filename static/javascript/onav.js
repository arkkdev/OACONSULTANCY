
// TOP_NAV & SOCIALS STICKY LOGIC ////
    let lastScrollTop = 0;
    let navHeight = document.querySelector('.top_nav').offsetHeight;

    window.addEventListener("scroll", function() {
        var topNav = document.querySelector('.top_nav');
        var socialsTab = document.querySelector('.socials_tab');

        let st = window.pageYOffset || document.documentElement.scrollTop;

        // Logic for the navbar
        if (st < lastScrollTop) {
            // If scrolling up
            topNav.style.position = 'fixed';
            topNav.classList.add('scrolling-up');

            if (st <= 5) { // Checking if scroll is above 5px
                topNav.style.position = 'absolute';
                topNav.classList.remove('scrolling-up');
            }

            // Scrolling up logic for socialsTab
            socialsTab.classList.remove('sticky');
            socialsTab.classList.add('sticky-up');

        } else {
            // If scrolling down
            topNav.style.position = 'absolute';
            topNav.classList.remove('scrolling-up');

            // If user has scrolled down past 80px
            if (st > 90) {
                socialsTab.classList.add('sticky');
                socialsTab.classList.remove('sticky-up');
            }
            // If user is still within the top 80px region while scrolling down
            else if(st <= 90) {
                socialsTab.classList.remove('sticky');
                socialsTab.classList.remove('sticky-up');
            }
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });


