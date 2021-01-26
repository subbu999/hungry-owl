$(document).ready(function () {

    AOS.init();
    $(".navbar-nav .nav-link").on("click", function () {
        $("#owlAudio").get(0).play();
        $(".navbar-nav").find(".activate").removeClass("activate");
        $(this).addClass("activate");
    });
    const parallax = document.querySelector('.slide-area');

})