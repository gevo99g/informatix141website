$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll)

    $('#websitetitle').css({
        'transform' : 'translate(0px,' + wScroll/2 +'%)'
    });

    $('#paralaximage').css({
        'transform' : 'translate(0px,-' + wScroll/150 +'%)'
    });

});