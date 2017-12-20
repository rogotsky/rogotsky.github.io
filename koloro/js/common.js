'use strict';

$(document).ready(function () {

  $('.slider').slick({
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: $('.slider-wrap .prev'),
    nextArrow: $('.slider-wrap .next')
  });

  //Hamburger trigger
  $('.menu_trigger').on('click', function() {
    $(this).toggleClass('menu_active');
    $('.main_menu').toggleClass('show_menu');
  });

  //Scroll shenanigans
  var header = $('header');
  var menu = $('.main_menu');
  var lastScrollTop = $(window).scrollTop();

  function checkScrollPos() {
    if (lastScrollTop >= 200) {
      header.addClass('menu_visible');
      menu.addClass('change_color');
    }
  }

  checkScrollPos();

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();

    if (lastScrollTop <= 200) {
      header.removeClass('menu_hidden');
      header.removeClass('menu_visible');
      menu.removeClass('change_color');
    }
    
    if (st < lastScrollTop) {
      if (header.hasClass('menu_hidden')) {
        header.removeClass('menu_hidden');
        header.addClass('menu_visible');
        menu.addClass('change_color');
      }
    }
    else {
      if (st >= 200 && menu.hasClass('show_menu') == false) {
        header.removeClass('menu_visible');
        header.addClass('menu_hidden');
        menu.addClass('change_color');
      }
    }

    lastScrollTop = st;
  });

  //Animate.css + viewportChecker
  $('.top-landscape .top_header').addClass('animated fadeInDown');
  $('.top-landscape .top_square').addClass('animated fadeInUp');
  $('.middle-info .brand-descr .left').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: 100
  });
  $('.middle-info .brand-descr .right').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: 100
  });
  $('.middle-info .brand-descr .add-descr').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: 100
  });
  $('.middle-info .brand-descr .kvadrat').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: 100
  });
  $('.middle-concepts .left').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: 100
  });
  $('.middle-concepts .right').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: 100
  });
  $('.bottom-slider').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeIn',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: 150
  });
});