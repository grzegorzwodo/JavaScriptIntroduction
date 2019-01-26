$(document).ready(function(){
    $(".rectangle-menu").hover(function(){
        $(this).stop();
        $(this).animate({left: '0px'});
    }, function(){
        $(this).stop();
        $(this).animate({left: '-280px'});
    });
});