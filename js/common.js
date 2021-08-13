$(document).ready(function() {
    // menu
    $('.menu-burger').on('click', function() {
        $('body').toggleClass('menu-open noscroll');
        $('.wrapper').toggleClass('noscroll');
    })

    $('html').on('click', function() {
        $('body, .wrapper').removeClass('menu-open noscroll');
    })
    $('.menu-block, .menu-burger').on('click', function(e) {
        e.stopPropagation()
    })

    $('.service-slider').slick({
        slidesToShow: 5,
        infinite: false,
        appendArrows: '.service-slider__arrows',
        focusOnSelect: true,
        swipeToSlide: true,
        prevArrow: '<span class="prev-arrow"><svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.435371 11.0507C0.435817 11.0512 0.436187 11.0517 0.436706 11.0521L8.19286 18.7709C8.77392 19.3491 9.71375 19.347 10.2921 18.7658C10.8705 18.1848 10.8682 17.2449 10.2872 16.6666L5.07968 11.4844L36.5156 11.4844C37.3354 11.4844 38 10.8198 38 10C38 9.18019 37.3354 8.51564 36.5156 8.51564L5.07976 8.51564L10.2871 3.33339C10.8682 2.75508 10.8704 1.81525 10.2921 1.23419C9.71368 0.652981 8.77377 0.650979 8.19279 1.22914L0.436633 8.94789C0.436187 8.94834 0.435813 8.94885 0.435294 8.9493C-0.146062 9.52954 -0.144204 10.4724 0.435371 11.0507Z" fill="currentColor"/></svg></span>',
        nextArrow: '<span class="next-arrow"><svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.5646 8.94927C37.5642 8.94883 37.5638 8.94831 37.5633 8.94786L29.8071 1.22912C29.2261 0.650882 28.2862 0.653034 27.7079 1.23417C27.1296 1.81522 27.1318 2.75506 27.7128 3.33337L32.9203 8.51561H1.48438C0.664555 8.51561 0 9.18017 0 9.99999C0 10.8198 0.664555 11.4844 1.48438 11.4844H32.9202L27.7129 16.6666C27.1319 17.2449 27.1296 18.1848 27.7079 18.7658C28.2863 19.347 29.2262 19.349 29.8072 18.7709L37.5634 11.0521C37.5638 11.0517 37.5642 11.0511 37.5647 11.0507C38.1461 10.4705 38.1442 9.52759 37.5646 8.94927Z" fill="currentColor"/></svg></span>',
        responsive: [{
                breakpoint: 901,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    })

    $('.point__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true
    })

    $('.related').each(function() {
        $(this).find('.related-slider').slick({
            slidesToShow: 2,
            infinite: false,
            appendArrows: $(this).find('.related__arrows'),
            focusOnSelect: true,
            swipeToSlide: true,
            prevArrow: '<span class="prev-arrow"><svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.435371 11.0507C0.435817 11.0512 0.436187 11.0517 0.436706 11.0521L8.19286 18.7709C8.77392 19.3491 9.71375 19.347 10.2921 18.7658C10.8705 18.1848 10.8682 17.2449 10.2872 16.6666L5.07968 11.4844L36.5156 11.4844C37.3354 11.4844 38 10.8198 38 10C38 9.18019 37.3354 8.51564 36.5156 8.51564L5.07976 8.51564L10.2871 3.33339C10.8682 2.75508 10.8704 1.81525 10.2921 1.23419C9.71368 0.652981 8.77377 0.650979 8.19279 1.22914L0.436633 8.94789C0.436187 8.94834 0.435813 8.94885 0.435294 8.9493C-0.146062 9.52954 -0.144204 10.4724 0.435371 11.0507Z" fill="currentColor"/></svg></span>',
            nextArrow: '<span class="next-arrow"><svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.5646 8.94927C37.5642 8.94883 37.5638 8.94831 37.5633 8.94786L29.8071 1.22912C29.2261 0.650882 28.2862 0.653034 27.7079 1.23417C27.1296 1.81522 27.1318 2.75506 27.7128 3.33337L32.9203 8.51561H1.48438C0.664555 8.51561 0 9.18017 0 9.99999C0 10.8198 0.664555 11.4844 1.48438 11.4844H32.9202L27.7129 16.6666C27.1319 17.2449 27.1296 18.1848 27.7079 18.7658C28.2863 19.347 29.2262 19.349 29.8072 18.7709L37.5634 11.0521C37.5638 11.0517 37.5642 11.0511 37.5647 11.0507C38.1461 10.4705 38.1442 9.52759 37.5646 8.94927Z" fill="currentColor"/></svg></span>',
            responsive: [{
                    breakpoint: 1620,
                    settings: {
                        slidesToShow: 3,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                    }
                },
            ]
        })
    })

    $('.product-card__slider-preview').slick({
        vertical: true,
        slidesToShow: 3,
        focusOnSelect: true,
        asNavFor: '.product-card__slider',
        infinite: false,
        verticalSwiping: true,
        prevArrow: '<span class="prev-arrow"></span>',
        nextArrow: '<span class="next-arrow"></span>',

    })
    $('.product-card__slider').slick({
        slidesToShow: 1,
        asNavFor: '.product-card__slider-preview',
        infinite: false,
        arrows: false,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    arrows: true,
                    prevArrow: '<span class="prev-arrow"><svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.435371 11.0507C0.435817 11.0512 0.436187 11.0517 0.436706 11.0521L8.19286 18.7709C8.77392 19.3491 9.71375 19.347 10.2921 18.7658C10.8705 18.1848 10.8682 17.2449 10.2872 16.6666L5.07968 11.4844L36.5156 11.4844C37.3354 11.4844 38 10.8198 38 10C38 9.18019 37.3354 8.51564 36.5156 8.51564L5.07976 8.51564L10.2871 3.33339C10.8682 2.75508 10.8704 1.81525 10.2921 1.23419C9.71368 0.652981 8.77377 0.650979 8.19279 1.22914L0.436633 8.94789C0.436187 8.94834 0.435813 8.94885 0.435294 8.9493C-0.146062 9.52954 -0.144204 10.4724 0.435371 11.0507Z" fill="currentColor"/></svg></span>',
                    nextArrow: '<span class="next-arrow"><svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.5646 8.94927C37.5642 8.94883 37.5638 8.94831 37.5633 8.94786L29.8071 1.22912C29.2261 0.650882 28.2862 0.653034 27.7079 1.23417C27.1296 1.81522 27.1318 2.75506 27.7128 3.33337L32.9203 8.51561H1.48438C0.664555 8.51561 0 9.18017 0 9.99999C0 10.8198 0.664555 11.4844 1.48438 11.4844H32.9202L27.7129 16.6666C27.1319 17.2449 27.1296 18.1848 27.7079 18.7658C28.2863 19.347 29.2262 19.349 29.8072 18.7709L37.5634 11.0521C37.5638 11.0517 37.5642 11.0511 37.5647 11.0507C38.1461 10.4705 38.1442 9.52759 37.5646 8.94927Z" fill="currentColor"/></svg></span>',

                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    variableWidth: true
                }
            }
        ]
    })

    // slider range
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 1000,
            max: 7500,
            step: 500,
            values: [3000, 6000],
            slide: function(event, ui) {
                $("#amount").val(ui.values[0] + " - " + ui.values[1]);
                $('.range-from').text(ui.values[0])
                $('.range-to').text(ui.values[1])
            }
        });
        $(".range-from").text($("#slider-range").slider("values", 0));
        $(".range-to").text($("#slider-range").slider("values", 1));
        $("#amount").val($("#slider-range").slider("values", 0) +
            " - " + $("#slider-range").slider("values", 1));
    });

    // show all features
    $('.show-features__btn').on('click', function() {
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $(this).text('Скрыть')
        } else {
            $(this).text('Показать')
        }
        $('.place-feature__list').toggleClass('show-all');
    })

    // add-to-favorite
    $('.add-to-favorite').on('click', function() {
            $(this).toggleClass('active')
        })
        // tabs
    $('.tab-list').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-wrapper').find('.tab-content').removeClass('active').eq($(this).index()).addClass('active');
    });
})