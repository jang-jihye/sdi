$(document).ready(function () {

    // dividend2.html DropdownMenu 구현
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(200);
    });

    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(200);
    });

    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('value'));
    });

    // notice.html AccordionMenu 구현
    $(".content").hide();

    $('.menu').click(function () {

        $(this).next().slideToggle(300);
        $('.menu').not(this).next().slideUp(300);

        $(this).find('.left > a').toggleClass('colored');
        $('.menu').not(this).find('.left > a').removeClass('colored');

        var a = $(this).parent('li');
        if (a.hasClass('open')) {
            a.removeClass('open');
        } else {
            a.addClass('open');
            a.siblings('li').removeClass('open');
        }

        var b = $(this).children().next().children('img');
        var src = (b.attr('src') == './images/plus.png')
            ? './images/min.png'
            : './images/plus.png';

        b.attr('src', src);
        $('.menu').not(this).children().next().children('img').attr('src','./images/plus.png');
    });

    // 모바일 햄버거 + 슬라이드메뉴바
    $('.mNav').click(function () {
        $(this).toggleClass('on');
        $(this).siblings('.slide').toggleClass('open');
        $(this).siblings('.dim').toggleClass('on');
    });

    // dim
//     $('.dim').click(function () {
//         var c = $(this).siblings('div');
//         if(c.hasClass('open')) {
//             $(this).siblings('.slide').removeClass('open');
//             $('.dim').removeClass('on');
//         }
//     });
});
