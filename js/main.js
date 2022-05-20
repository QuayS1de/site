document.addEventListener('DOMContentLoaded', function(){

    var slinky = $('.js-menu').slinky({
        title: true
    });

    $('.slider').slick({
        arrows:false, //если не нужны по дизайну
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
    });
    $('.slider2').slick({
        arrows:true, //если не нужны по дизайну
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive:[
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                }
            }
        ]

    });
    $('.slider3').slick({
        arrows:false, //если не нужны по дизайну
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                }
            }
        ]

    });

    $('.slider4').slick({
        arrows:true, //если не нужны по дизайну
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive:[
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                }
            }
        ]

    });
    $('.slider5').slick({
        arrows: false, //если не нужны по дизайну
        dots: false,
        adaptiveHeight:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive:[
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1,
                }
            },{
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                }
            }
        ]

    });


    for (let elem of document.querySelectorAll('.user-login')){
        elem.addEventListener('click', function(){
            document.querySelector('.user-cab-background').classList.remove('display-off')
            document.querySelector('.modal-background').classList.remove('display-off')

        })
    }


    document.querySelector('.close-user-cab').addEventListener('click', function(){
        document.querySelector('.user-cab-background').classList.add('display-off')
        document.querySelector('.modal-background').classList.add('display-off')
    })

    document.querySelector('.burger-menu .burger').addEventListener('click', function(){
        document.querySelector('.burger-menu').classList.add('display-off')
        document.querySelector('.js-menu').classList.remove('display-off')
        document.querySelector('.close-burger-menu').classList.remove('display-off')
    })

    document.querySelector('.close-burger-menu').addEventListener('click', function(){
        document.querySelector('.burger-menu').classList.remove('display-off')
        document.querySelector('.js-menu').classList.add('display-off')
        document.querySelector('.close-burger-menu').classList.add('display-off')
    })

    document.querySelector('.close-header-banner-desc-mob').addEventListener('click', function(){
        document.querySelector('.header-banner-desc-mob').classList.add('display-off')
    })

    if (window.innerWidth <= 1000){
        document.querySelector('.header-mob').appendChild(document.querySelector('.user-cab-background'))
    } else{
        document.querySelector('#header').appendChild(document.querySelector('.user-cab-background'))
    }

    window.addEventListener('resize', function(){
        if (window.innerWidth <= 1000){
            document.querySelector('.header-mob').appendChild(document.querySelector('.user-cab-background'))
        } else{
            document.querySelector('#header').appendChild(document.querySelector('.user-cab-background'))
        }
    })
})
