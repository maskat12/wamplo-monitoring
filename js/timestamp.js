
$(document).ready(function(){

    setInterval( function () {
        var dt = new Date();
        var time = dt.toUTCString() ;
        var datetime = '<p>'+time+'</p>';
        $('.timestamp').html(datetime);
    },1000)
    


});