$(function () {
    // Uncheck checkbox when link in Mobile Nav is clicked, cauing menu to slide in. Also, removed position:fixed from body
    $('.nav__mobile-link').on('click', function () {
        $('.toggle').attr('checked', false);
        $('body').removeClass("fixedPosition")
    });
    // When hamburger menu is clicked, set postion:fixed on the body. Unable to scroll when menu slides out.
    $('.hamburger').on('click', function () {
        $('body').addClass("fixedPosition")
    });
    // Remove position:fixed from body when X in Mobile Nav is clicked
    $('.nav__mobile-close').on('click', function () {
        $('body').removeClass("fixedPosition")
    });
});