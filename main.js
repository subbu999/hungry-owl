$(document).ready(function () {
    AOS.init();
    $(".navbar-nav .nav-link").on("click", function () {
        $("#owlAudio").get(0).play();
        $(".navbar-nav").find(".activate").removeClass("activate");
        $(this).addClass("activate");
    });


    $('#contact-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScZn0dLhXi-rgARJlTS8XOqEhm1r68NOvPYA4AKjbAd2wh6mw/formResponse",
            data: $(this).serialize(),
            type: "POST",
            dataType: "xml",
            success: function (data) {
                console.log('Submission successful');
            },
            error: function (xhr, status, error) {
                alert("Thank you for your feedback");
                // $('#contact-form').trigger("reset");
            }
        });

    });

})

