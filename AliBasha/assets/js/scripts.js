$('#owl-carousel').owlCarousel({
    rtl: true,
     dots:false,

});
$('#owl-carousel-1').owlCarousel({
    rtl: true,
     dots:false,

});
$('#owl-carousel-2').owlCarousel({
    rtl: true,
     dots:false,

});


$('#owl-carousel-3').owlCarousel({
    rtl: true,
    dots:false,
    items:4,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
     responsiveClass:true,
     responsive:{
        0:{
            items:1,
        },
        400:{
            items:2,
        },
          600:{
            items:3,
           
        },
        1000:{
            items:4,
          
            loop:false
        }
    }


});
$('#owl-carousel-5').owlCarousel({
    rtl: true,
    dots:false,
    nav:true,
    items:4,
    autoplay:true,
    autoplayTimeout:3000,
      responsiveClass:true,
     responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:2,
            nav:false
        },
          600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }



});


$('#owl-carousel-4').owlCarousel({
    rtl: true,
    items:4,
    loop:true,
     dots:false,
    margin:10,
    nav:true,
    padding:10,
dots: false,
});
var owl = $('#owl-carousel-4');
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
$('#owl-carousel-8').owlCarousel({
    rtl: true,
    dots:false,
    items:6,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
     responsiveClass:true,
     responsive:{
        0:{
            items:1,
        },
        400:{
            items:3,
        },
          600:{
            items:6,
           
        },
        1000:{
            items:6,
          
            loop:false
        }
    }


});
$('#owl-carousel-10').owlCarousel({
    rtl: true,
    dots:false,
    nav:true,
    items:4,
    autoplay:true,
    autoplayTimeout:3000,
      responsiveClass:true,
     responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:2,
            nav:false
        },
          600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }



});