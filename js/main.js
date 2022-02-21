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

  // range slider's

  // price
  const slider1 = document.getElementById('rangeFilter1');
  const slider1Input1 = document.getElementById('rangeFilter1Input1');
  const slider1Input2 = document.getElementById('rangeFilter1Input2');
  const inputs1 = [slider1Input1, slider1Input2];

  const setRangeSlider1 = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    slider1.noUiSlider.set(arr);
  };

  noUiSlider.create(slider1, {
    start: [0, 154600],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 154600,
    },
  });

  slider1.noUiSlider.on('update', function (values, handle) {
    inputs1[handle].value = Math.round(values[handle]);
  });

  inputs1.forEach((el, i) => {
    el.addEventListener('change', (event) => {
      setRangeSlider1(i, event.currentTarget.value);
    });
  });

  // area
  const slider2 = document.getElementById('rangeFilter2');
  const slider2Input1 = document.getElementById('rangeFilter2Input1');
  const slider2Input2 = document.getElementById('rangeFilter2Input2');
  const inputs2 = [slider2Input1, slider2Input2];

  const setRangeSlider2 = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    slider2.noUiSlider.set(arr);
  };

  noUiSlider.create(slider2, {
    start: [15, 42],
    connect: true,
    step: 1,
    range: {
      min: 15,
      max: 90,
    },
  });

  slider2.noUiSlider.on('update', function (values, handle) {
    inputs2[handle].value = Math.round(values[handle]);
  });

  inputs2.forEach((el, i) => {
    el.addEventListener('change', (event) => {
      setRangeSlider2(i, event.currentTarget.value);
    });
  });

  // cooling
  const slider3 = document.getElementById('rangeFilter3');
  const slider3Input1 = document.getElementById('rangeFilter3Input1');
  const slider3Input2 = document.getElementById('rangeFilter3Input2');
  const inputs3 = [slider3Input1, slider3Input2];

  const setRangeSlider3 = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    slider3.noUiSlider.set(arr);
  };

  noUiSlider.create(slider3, {
    start: [1.5, 150],
    connect: true,
    step: 0.5,
    range: {
      min: 1.5,
      max: 150,
    },
  });

  slider3.noUiSlider.on('update', function (values, handle) {
    inputs3[handle].value = values[handle];
  });

  inputs3.forEach((el, i) => {
    el.addEventListener('change', (event) => {
      setRangeSlider3(i, event.currentTarget.value);
    });
  });

  // noise
  const slider4 = document.getElementById('rangeFilter4');
  const slider4Input1 = document.getElementById('rangeFilter4Input1');
  const slider4Input2 = document.getElementById('rangeFilter4Input2');
  const inputs4 = [slider4Input1, slider4Input2];

  const setRangeSlider4 = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    slider4.noUiSlider.set(arr);
  };

  noUiSlider.create(slider4, {
    start: [1, 78],
    connect: true,
    step: 1,
    range: {
      min: 1,
      max: 150,
    },
  });

  slider4.noUiSlider.on('update', function (values, handle) {
    inputs4[handle].value = Math.round(values[handle]);
  });

  inputs4.forEach((el, i) => {
    el.addEventListener('change', (event) => {
      setRangeSlider4(i, event.currentTarget.value);
    });
  });
});
