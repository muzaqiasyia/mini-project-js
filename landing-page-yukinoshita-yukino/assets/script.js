$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 15){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // script slide-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });



    // script menu toggle
    $('.menu-toggle').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-toggle i').toggleClass("active");
    });
});


// script skill bar
$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 1000,
        step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});




