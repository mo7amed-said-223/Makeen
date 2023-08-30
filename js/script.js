(function ($) {
    "use strict";
    // Stick Sidebar
    if ($(window).width() > 767) {
        if ($(".theiaStickySidebar").length > 0) {
            $(".theiaStickySidebar").theiaStickySidebar({
                // Settings
                additionalMarginTop: 70,
            });
        }
    }
    // Sidebar
    if ($(window).width() <= 991) {
        var Sidemenu = function () {
            this.$menuItem = $(".main-nav a");
        };
    
    }

    // Icon Btn

    $(".course-share .fa-heart").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("color-active");
    });

    // Mobile menu sidebar overlay

    $(".header-fixed").append('<div class="sidebar-overlay"></div>');
    $(document).on("click", "#mobile_btn", function () {
        $("main-wrapper").toggleClass("slide-nav");
        $(".sidebar-overlay").toggleClass("opened");
        $("html").addClass("menu-opened");
        $(".link-register").addClass("show");
        $(".link-login").addClass("show");
        return false;
    });

    $(document).on("click", ".sidebar-overlay", function () {
        $("html").removeClass("menu-opened");
        $(this).removeClass("opened");
        $("main-wrapper").removeClass("slide-nav");
    });

    $(document).on("click", "#menu_close", function () {
        $("html").removeClass("menu-opened");
        $(".sidebar-overlay").removeClass("opened");
        $("main-wrapper").removeClass("slide-nav");
        $(".link-register").removeClass("show");
        $(".link-login").removeClass("show");
    });

    // Select 2

    if ($(".select").length > 0) {
        $(".select").select2({
            minimumResultsForSearch: -1,
            width: "100%",
        });
    }

    // tooltip

    $(document).ready(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

    // Home header

    $(window).scroll(function () {
        var sticky = $(".scroll-sticky"),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass("add-header-bg");
        else sticky.removeClass("add-header-bg");
    });

    // Content div min height set

    function resizeInnerDiv() {
        var height = $(window).height();
        var header_height = $(".header").height();
        var footer_height = $(".footer").height();
        var setheight = height - header_height;
        var trueheight = setheight - footer_height;
        $(".content").css("min-height", trueheight);
    }

    if ($(".content").length > 0) {
        resizeInnerDiv();
    }

    $(window).resize(function () {
        if ($(".content").length > 0) {
            resizeInnerDiv();
        }
    });
})(jQuery);
