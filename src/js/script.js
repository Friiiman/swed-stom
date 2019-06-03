import $ from 'jquery';
import slick from './../../node_modules/slick-carousel/slick/slick.min.js';
import svg4everybody from 'svg4everybody'

svg4everybody();

$(document).ready(function($){


  //*****BUTTON IN DOCTORS-CARD*****
  $('.doctors-card__button').click(function(){
    $(this).siblings('.doctors-card__text-more').toggleClass('doctors-card__text--hide');
  });


  //*****PARALLAX PROMO*****
  $(window).scroll(function(){
    const st = $(this).scrollTop();
    $('.promo__inner').css({
      'transform' : 'translate(0%, -' + st / 4 +'%'
    });
    $('.promo').css({
      'top': -st / 2
    });
  });


  //*****BURGER MENU*****
  $('.burger').click(function(menuOpen){
    $('#burger__item').toggleClass('burger__item-open');
    $('.burger').toggleClass('burger__heartbeat');
    $('.main-nav').toggleClass('main-nav--active');
    menuOpen.stopPropagation();
  });

  $('body').click(function(menuClose){
    $('#burger__item').removeClass('burger__item-open');
    $('.burger').addClass('burger__heartbeat');
    $('.main-nav').removeClass('main-nav--active');
  });


  //*****POPUPS*****
  $(".licenses__item").click(function(){
    const img = $(this);
    const src = img.attr('src');
    $("body").append("<div class='licenses__popup'>" +
        "<div class='licenses__popup-bg'></div>" +
        "<img src='" + src + "' class='licenses__popup-img' alt=''лицензия />" +
      "</div>");
    $(".licenses__popup").fadeIn(800);
    $(".licenses__popup-bg").click(function(){
      $(".licenses__popup").fadeOut(800);
      setTimeout(function() {
        $(".licenses__popup").remove();
      }, 800);
    });
  });

  $(".main-slider__item").click(function(){
    const img = $(this);
    const src = img.attr('src');
    $("body").append("<div class='main-slider__popup'>" +
        "<div class='main-slider__popup-bg'></div>" +
        "<img src='" + src + "' class='main-slider__popup-img' alt=''лицензия />" +
      "</div>");
    $(".main-slider__popup").fadeIn(800);
    $(".main-slider__popup-bg").click(function(){
      $(".main-slider__popup").fadeOut(800);
      setTimeout(function() {
        $(".main-slider__popup").remove();
      }, 800);
    });
  });


  //*****SLIDERS*****
  $('.js-contacts__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.js-main-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });


  //*****UP-BUTTON*****
  const showUpButton = 300;
  const delayUpButton = 1000;
  $(document).ready(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > showUpButton) $('.up-button').addClass('up-button--active');
      else $('.up-button').removeClass('up-button--active');
    });
    $('.up-button').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delayUpButton);
    });
  });


});
