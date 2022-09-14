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

function findVideos() {
  let videos = document.querySelectorAll('.gym__video');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.gym__video-link');
  let media = video.querySelector('.gym__video-media');
  let button = video.querySelector('.gym__video-btn');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('gym__video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match;
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('gym__video-media');

  return iframe;
}

function generateURL(id) {
  let query = '?v=9TZXsZItgdw=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
