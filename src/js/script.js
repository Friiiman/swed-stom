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
    $(this).toggleClass('burger__item-open');
    $('.burger').toggleClass('burger__heartbeat');
    $('.main-nav').toggleClass('main-nav--active');
  });


  $('.js-contacts__slider').slick({
  });


});

// //*****CARD*****
// const cards = document.querySelectorAll('.services-card');

// for (let i = 0; i < cards.length; i++) {
//   const card = cards[i];
//   card.addEventListener('mousemove', startRotate);
//   card.addEventListener('mouseout', stopRotate);
// }

// function startRotate(event){
//   const cardItem = this.querySelector('.services-card__inner');
//   const halfHeight = cardItem.offsetHeight / 2;
//   const halfWidth = cardItem.offsetWidth / 2;
//   cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 7 + 'deg) rotateY(' + -(event.offsetX - halfWidth) / 7 + 'deg)';
// }

// function stopRotate(event){
//   const cardItem = this.querySelector('.services-card__inner');
//   cardItem.style.transform = 'rotate(0)';
// }
