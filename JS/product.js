$('.fa-plus-circle, .fa-minus-circle').click(function () {
    $(this).css('display', 'none');
    $(this).siblings().css('display', 'block');
});
