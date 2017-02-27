$(document).ready(function() {
    var folder = "images/";

    $.ajax({
        url: folder,
        async: false,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".row .masonry").append("<div class='items'><img src='" + val + "' class='img-responsive'> </div>");
                }
            });
        }
    });

    $('.menuBtn').on('click', function() {
        var active = $('.menuBar').hasClass('showMenu');
        if (active) {
            $('.showMenu').removeClass('showMenu');
        } else {
            $('.menuBar, .thePage').addClass('showMenu');
        }
    });
});
