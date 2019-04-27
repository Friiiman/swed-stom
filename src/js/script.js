import $ from 'jquery';
import slick from './../../node_modules/slick-carousel/slick/slick.min.js';
import svg4everybody from 'svg4everybody'

svg4everybody();

$(document).ready(function($){

  $('.doctors-card__button').click(function(){
    $(this).siblings('.doctors-card__text-more').toggleClass('doctors-card__text--hide');
  });

  //***PARALLAX***
  $(window).scroll(function(){
    const st = $(this).scrollTop();
    console.log(st);

    $('.promo__inner').css({
      'transform' : 'translate(0%, -' + st /7 +'%'
    });

    $('.about').css({
      'transform' : 'translate(0%, -' + st /7 +'%'
    });

  });

});
