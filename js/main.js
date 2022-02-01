document.addEventListener('DOMContentLoaded', function () {
  const louver = document.querySelector('.louver');
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerHeaderBtn = document.querySelector('.burger-menu__btn-open');
  const filter = document.querySelector('.filter');
  const html = document.querySelector('html');

  function changeBurger(add = true) {
    if (add) {
      burgerHeaderBtn.classList.add('burger-menu__btn-open--active');
      burgerMenu.classList.add('burger-menu--active');
      louver.classList.add('louver--active');
      html.style.overflowY = 'hidden';
    } else {
      burgerHeaderBtn.classList.remove('burger-menu__btn-open--active');
      burgerMenu.classList.remove('burger-menu--active');
      if (!filter.classList.contains('filter--active')) {
        louver.classList.remove('louver--active');
      }
      html.removeAttribute('style');
    }
  }

  document.addEventListener('click', function (event) {
    const target = event.target;

    // burger
    if (target.closest('.burger-menu__btn-open')) {
      changeBurger();
    }

    if (target.closest('.burger-menu__btn-close')) {
      changeBurger(false);
    }

    if (target.closest('.louver')) {
      changeBurger(false);
      filter.classList.remove('filter--active');
      louver.classList.remove('louver--active');
    }

    // filter
    if (target.closest('.catalog__settings-filter-btn')) {
      filter.classList.add('filter--active');
      louver.classList.add('louver--active');
    }
    if (target.closest('.filter__btn-close')) {
      filter.classList.remove('filter--active');
      louver.classList.remove('louver--active');
    }
    if (target.classList.contains('advantage__item')) {
      // advantages slider
      let index = $(target).index();
      $('.advantage__slider').slick('slickGoTo', parseInt(index));
    }
    if (target.classList.contains('advantage__title')) {
      let index = $($(target).parents('div')[0]).index();
      $('.advantage__slider').slick('slickGoTo', parseInt(index));
    }
  });

  // resize
  window.addEventListener('resize', function () {
    if (document.body.clientWidth > 992) {
      changeBurger(false);
    }
    if (document.body.clientWidth > 1200) {
      filter.classList.remove('filter--active');
    }
  });

  // advantages slider
  $('.advantage__slider').slick({
    dots: false,
    arrows: false,
  });

  // portfolio slider
  $('.portfolio__slider').slick({
    dots: true,
    arrows: true,
    prevArrow: '<span></span>',
    nextArrow: '<span></span>',
    appendArrows: $('.portfolio__slider-arrows'),
    appendDots: $('.portfolio__slider-nav'),
  });

  // about-us slider
  $('.about-us__reviews-slider').slick({
    dots: false,
    arrow: true,
    prevArrow: '<span></span>',
    nextArrow: '<span></span>',
    appendArrows: $('.about-us__reviews-slider-nav'),
  });
});
