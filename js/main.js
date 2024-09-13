(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1000);
    };
    spinner();
    
    
    // Initiate The wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Active Link Based on Current URL
    const currentUrl = window.location.pathname;

    $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").each(function () {
        const linkUrl = $(this).attr("href");

        // Check if the current URL matches the link (excluding '#' links)
        if (currentUrl.includes(linkUrl) && linkUrl !== '#') {
            $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").removeClass("active"); // Remove active class from all links
            $(this).addClass("active"); // Add active class to the matched link

            // If it's a dropdown item, make its parent dropdown toggle active
            if ($(this).hasClass('dropdown-item')) {
                $(this).closest('.dropdown').find('.nav-link.dropdown-toggle').addClass('active');
            }
        }
    });

    // Facts Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    // Back To Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // Smooth scroll to the top
        return false; // Prevent default behavior (for safety)
    });


    // Testimonial Slider
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Vendor Slider
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });

    // Gallery Slider
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,             // Enable auto play
        pause: 2000,            // Time in milliseconds between slides
        speed: 700,             // Speed of the slide transition
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        }
    });

    // Theme Switcher (Dark Mode) //
    document.getElementById('theme-switcher').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        document.body.classList.toggle('dark-mode');
    
        // Get the icon element
        var themeIcon = document.getElementById('theme-icon');
    
        // Check and toggle the theme
        if (document.body.classList.contains('dark-mode')) {
            // Change to dark mode
            themeIcon.classList.remove('fa-sun'); // Remove sun icon
            themeIcon.classList.add('fa-moon'); // Add moon icon
            localStorage.setItem('theme', 'dark'); // Save theme preference
        } else {
            // Change to light mode
            themeIcon.classList.remove('fa-moon'); // Remove moon icon
            themeIcon.classList.add('fa-sun'); // Add sun icon
            localStorage.setItem('theme', 'light'); // Save theme preference
        }
    });
    // On page load, check the saved theme preference
    window.onload = function() {
        var themeIcon = document.getElementById('theme-icon');
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    };
    
})(jQuery);

