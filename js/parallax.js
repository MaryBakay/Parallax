$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgpic=$(this);
        $(window).scroll(function(){
        var yPos=-($(window).scrollTop()/$bgpic.data('speed'));
        var coords='center '+ yPos+'px';
            $bgpic.css({backgroundPosition:coords});
        });
    });
});