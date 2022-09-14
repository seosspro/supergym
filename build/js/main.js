import IMask from 'imask';
import Swiper from 'swiper/swiper-bundle';

// переключатель тарифов
window.addEventListener('load', () => {
  const tubs = document.querySelectorAll('.sub__month-link');
  const lists = document.querySelectorAll('.sub__list');

  function changeLists(tubs, lists, jsClass, cssClass) {
    tubs.forEach((tub, i) => {
      tub.addEventListener('click', (evt) => {
        evt.preventDefault();
        tubs.forEach((el) => {
          el.classList.remove(cssClass);
        });
        tub.classList.add(cssClass);
        lists.forEach((list) => {
          list.classList.add(jsClass);
        });
        lists[i].classList.remove(jsClass);
      });
    });
  }

  if (tubs) {
    changeLists(tubs, lists, 'sub__list-hidden', 'sub__month-link--active');
  }
});

// маска телефона

let elements = document.querySelectorAll('.imaskjs');

for (let i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7}(000)000-00-00',
  });
}

// слайдер отзывов

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

const coachesSwiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
        spaceBetween: 40,
  navigation: {
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 42,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});
