let width = $(window).width();
window.onload = function () {
    if ((width >= 1000)) {
        $("#header").css("background", "rgba(35, 68, 102, 0.5)");
        $("#header").css("color", "#fff");
        $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding", "4vh 4vw");
        $("#navigation a").hover(function () {
            $(this).css("border-bottom", "2px solid rgb(35, 69, 103)");
        }, function () {
            $(this).css("border-bottom", "2px solid transparent");
        });
    }
}



setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 1650);

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });
});