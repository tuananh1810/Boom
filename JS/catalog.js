$('.fa-plus-circle, .fa-minus-circle').click(function () {
    $(this).css('display', 'none');
    $(this).siblings().css('display', 'block');
});



$('.catalog-show').click(function () {
    $(this).children('.chevron-up').toggleClass('rotate');
});

$(document).ready(function () {
    $(".icon-mode").click(function () {
        $(this).addClass("show-active");
        $(".icon-mode").not(this).removeClass("show-active");
    });

    $(".pro_size").click(function () {
        $(this).addClass("pro_size-active");
        $(".pro_size").not(this).removeClass("pro_size-active");
    });

    $(".pro_color").click(function () {
        $(this).addClass("pro_color-active");
        $(".pro_color").not(this).removeClass("pro_color-active");
    });

    $(".pro_material").click(function () {
        $(this).addClass("pro_material-active");
        $(".pro_material").not(this).removeClass("pro_material-active");
    });
});

$('.card-image').on({
    mouseenter: function () {
        var current = $(this).children()[1];
        $(current).removeClass('slideOut');
        $(current).addClass('slideInRight')
    },
    mouseleave: function () {
        var current = $(this).children()[1];
        $(current).addClass('slideOut');
        $(current).removeClass('slideInRight');
    }
});

$(document).ready(function () {
    $('.product-list:not(:first)').css('display', 'none');
});

$('#showMore').click(function () {
    if ($('.product-list:not(:first)').css('display') === 'none') {
        $('.product-list:not(:first)').css('display', 'flex');
        $('#showMore').css('display', 'none');
    }
    else {
        $('.product-list:not(:first)').css('display', 'none');
    }
});

$('.pro_btn').click(function () {
    $(this).siblings('.quick_view').css('display', 'block');
    $(this).siblings('.pro_view').css('display', 'block');
});

$('.quick_view').click(function () {
    $(this).css('display', 'none');
    $(this).next().css('display', 'none');
});

$(document).ready(function () {
    $('.quick_view').addClass('slideDownFull');
    $('.pro_view').addClass('slideDownHalf');
});

var quantity = 0;

$('.fa-plus').click(function () {
    quantity++;
    $('#quantity').html(quantity);
});

$('.fa-minus').click(function () {
    if (quantity > 0) {
        quantity--;
        $('#quantity').html(quantity);
    }
});


// $('.pro_btn').live('click', function(){
//     $(this).toggle(function(){
//         $(this).siblings('.quick_view').removeClass('slideDownFull').addClass('slideUp');
//     }, function(){
//         $(this).siblings('.quick_view').removeClass('slideUp').addClass('slideDownFull');
//     }).trigger('click');
// });

// $(".sub_img").click(function () {

//     console.log($(this).parents().find('.main_img'));
// });

// var mainImg = document.getElementsByClassName('main_img');
// for(var i = 0; i < mainImg.length; i++){
//     console.log($(".main_img"));
// }
