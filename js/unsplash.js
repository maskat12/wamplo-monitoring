
$(document).ready(function(){

    //slider for images background

    $.get("https://api.unsplash.com/photos/curated?client_id=03db7c168157d5f522aed8dde18a87fe669c6156c1eeeb6b6ef4551741f7032e",function (data) {
        data.forEach( function(d,i) {
            // console.log(d)
            var source = d.urls.regular;
            source = source.replace("w=1080", "w=1920");
            source = source.replace("fit=max", "fit=crop");
            source += "&max-h=1080";

            var xy = $("<div><img class='img-fluid' src='###SRC###'></img>");
            xy.find('img').attr('src', source);

            $('.image-carousel').append(xy);
            // console.log($(".img-fluid").eq(i).attr("src", source));
        });
        $('.image-carousel').slick({
            fade: true,
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 10000,
            draggable: true,
            speed: 800,
            lazyLoad: 'progressive'
        });
    })
    .fail(function(){

    });
});

    