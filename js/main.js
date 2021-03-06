var app = {
    wall: {},
    imageArr: [],
    init: function() {
        console.log('app initiate');

        app.gettyImages();
        //app.getMyImages();
        app.displayImages();
        app.addEvents();
    },

    loader: function() {
        if ($('.loader').hasClass('hide')) {
            $('.loader').removeClass('hide');
        } else {
            $('.loader').addClass('hide');
        }
    },

    addEvents: function() {
        $('.menuBtn').on('click', function() {
            var active = $('.menuBar').hasClass('showMenu');
            if (active) {
                $('.showMenu').removeClass('showMenu');
            } else {
                $('.menuBar, .thePage').addClass('showMenu');
            }
        });

        $('.header .zzz').on('click', function(e) {
            console.log('target');
            $('.masonry').css('column-count', e.target.value);
        });

        $('.items img').on('click', function() {
            var image = $(this).attr('src');
            $('.imgModal').attr('src', image);
            // $('.modal .modal-body img').css('width', '100%');
            // $('.modal .modal-body img').css('height', $(window).height());
            $('#myModal').modal('show');
        });
    },

    gettyImages: function() {
        $.ajax({
            url: 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=celebrities',
            type: "GET",
            dataType: "json",
            headers: {
                'Api-Key': '572u3a2se3yn74r2kz3htjbb'
            },
            async: false,
            success: function(data) {
                console.log(data);
                app.wall = data;
            }
        });

        $.each(app.wall.images, function(i, v) {
            app.imageArr.push(v.display_sizes[0].uri);
        });
    },

    getMyImages: function() {
        var folder = "images/";

        $.ajax({
            url: folder,
            async: false,
            success: function(data) {
                $(data).find("a").attr("href", function(i, val) {
                    if (val.match(/\.(jpe?g|png|gif)$/)) {
                        app.imageArr.push(val);
                    }
                });
            }
        });
    },

    displayImages: function() {
        $.each(app.imageArr, function(i, image) {
            $(".row .masonry").append("<div class='items'><img src='" + image + "' class='img-responsive'> </div>");
        });
    }
};

// var test = require('./nodetest.js');
// test.getImages('./../images', function(err, data) {
//     if (err) return console.log(err);
//     testObj.lol = data.slice();
//     console.log(testObj.lol);
// });

// $.each(app.wall.images, function(i, v) {
//     var imageUrl = v.display_sizes[0].uri;
//     $(".row .masonry").append("<div class='items'><img src='" + imageUrl + "' class='img-responsive'> </div>");
// });
