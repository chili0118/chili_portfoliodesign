$("#banner").slick({
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$("#works").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});