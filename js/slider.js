
$(document).ready(function(){

  
        // var xy = $("<div><img class='img-fluid' src='###SRC###'></img>");
        // xy.find('img').attr('src', source);

        // $('.image-carousel').append(xy);
        //     // console.log($(".img-fluid").eq(i).attr("src", source));


        //slider content for list container
        $('.list-container').slick({
            fade: false,
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            draggable: false,
            speed: 800  
        });

        $('.content-slider').slick({
            fade: true,
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            draggable: false,
            speed: 800  
        });
});

    