import $ from 'jquery';
import slick from './../../node_modules/slick-carousel/slick/slick.min.js';
import svg4everybody from 'svg4everybody'

svg4everybody();

$(document).ready(function($){


  $('.doctors-card__button').click(function(){
    $(this).siblings('.doctors-card__text-more').toggleClass('doctors-card__text--hide');
  });


  //*****PARALLAX*****
  $(window).scroll(function(){
    const st = $(this).scrollTop();

    $('.promo__inner').css({
      'transform' : 'translate(0%, -' + st / 4 +'%'
    });

    $('.promo').css({'top': -$(window).scrollTop() / 2});
  });


  // $('.main-nav__phone-title').click(function(){
  //     $('.main-nav__phone-list').toggleClass('main-nav__phone-list--hide');
  // });


  $('#burger__item').click(function(menuOpen){
    // menuOpen.eventDefault();
    $(this).toggleClass('burger__item-open');
    $('.main-nav').toggleClass('main-nav--active');
  });


  $('.js-contacts__slider').slick({
  });


});
