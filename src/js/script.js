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
    $('.promo').css({'top': -$(window).scrollTop() / 2});
  });


  //*****BURGER MENU*****
  $('#burger__item').click(function(menuOpen){
    $(this).toggleClass('burger__item-open');
    $('.burger').toggleClass('burger__heartbeat');
    $('.main-nav').toggleClass('main-nav--active');
    menuOpen.stopPropagation();
  });

  $('body').click(function(menuClose){
    $('#burger__item').removeClass('burger__item-open');
    $('.burger').addClass('burger__heartbeat');
    $('.main-nav').removeClass('main-nav--active');
  });


  //*****SLIDERS*****
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
