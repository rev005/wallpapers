$(document).ready(function() {
    var folder = "images/";

    // var folder = "zzz/";

    // var data = getImages(folder);
    // console.log(data);

    // $(data).find("a").attr("href", function(i, val) {
    //     if (val.match(/\.(jpe?g|png|gif)$/)) {
    //         // imgArray.push(val);
    //         imgSet.push(val);
    //         //$(".row .masonry").append("<div class='items'><img src='" + val + "' class='img-responsive'> </div>");
    //     }
    // });


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

function getImages(folder) {
    console.log('Folder is ' + folder);
    $.ajax({
        url: folder,
        async: false,
        success: function(data) {
            return data;
        }
    });
}
