$(function () {
    initialize();
    $(window).resize(function () {
        initialize();
    });
    $('.featwork ul li').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.featwork .works .row').children().css('opacity', '0.08').removeClass('vis').end().children($(this).data('target')).css('opacity', '1').addClass('vis');
        }
    });
});
function initialize() {
    $('#HeaderSlider').height($(window).height() - $('.upper-bar').innerHeight() - $('.navbar').innerHeight());
    if ($(window).innerWidth() < 768) {
        $('.featwork ul li').eq(0)[0].click();
    }
}