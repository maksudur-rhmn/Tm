    // Our Partners Slider
    
    $('.partslide').slick({
   dots: false,
    infinite: true,
    slidesToShow: 4,
     slidesToScroll: 1,
    autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: false,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots:false
                }
    },  
              
            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                    dots:false
                }
    },
            
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false
                }
    }

  ]
});

//    veno box
    
    $(document).ready(function(){
    $('.venobox').venobox(); 
});