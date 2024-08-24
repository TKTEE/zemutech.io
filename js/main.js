(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

   //product_interaction
    // Function to handle add to cart
        function addToCart(productId) {
            // Example: Adding to a local storage cart
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ productId: productId, quantity: 1 });
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log("Product " + productId + " added to cart.");
        
            alert("Product added to cart!");
            // Update the badge count
            updateBadgeCounts();
        }
        

        // Function to handle add to wishlist
        function addToWishlist(productId) {
            // Example: Adding to a local storage wishlist
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            if (!wishlist.includes(productId)) {
                wishlist.push(productId);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                console.log("Product " + productId + " added to wishlist.");
                alert("Product added to wishlist!");
            } else {
                console.log("Product " + productId + " is already in the wishlist.");
                alert("Product is already in your wishlist.");
            }
        
            // Update the badge count
            updateBadgeCounts();
        }
        

        // Function to handle view details
        function viewDetails(productId) {
            console.log("Viewing details for product " + productId);
            //redirect to product page
            window.location.href = "product-details.html?product_id=" + productId;
        }

        // Add event listeners to buttons
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll(".add-to-cart").forEach(button => {
                button.addEventListener("click", function() {
                    addToCart(this.getAttribute("data-product-id"));
                });
            });

            document.querySelectorAll(".add-to-wishlist").forEach(button => {
                button.addEventListener("click", function() {
                    addToWishlist(this.getAttribute("data-product-id"));
                });
            });

            document.querySelectorAll(".view-details").forEach(button => {
                button.addEventListener("click", function() {
                    viewDetails(this.getAttribute("data-product-id"));
                });
            });
        });
    //updatebadgecount
        function updateBadgeCounts() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        
            document.getElementById('cart-count').textContent = cart.length;
            document.getElementById('wishlist-count').textContent = wishlist.length;
        }

        document.addEventListener("DOMContentLoaded", function() {
            updateBadgeCounts();  // Initial badge count update
        
            document.querySelectorAll(".add-to-cart").forEach(button => {
                button.addEventListener("click", function() {
                    addToCart(this.getAttribute("data-product-id"));
                });
            });
        
            document.querySelectorAll(".add-to-wishlist").forEach(button => {
                button.addEventListener("click", function() {
                    addToWishlist(this.getAttribute("data-product-id"));
                });
            });
        
            document.querySelectorAll(".view-details").forEach(button => {
                button.addEventListener("click", function() {
                    viewDetails(this.getAttribute("data-product-id"));
                });
            });
        });
        
