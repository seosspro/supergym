import IMask from 'imask';
import Swiper from 'swiper/swiper-bundle';

// переключатель тарифов
const subMonth = document.querySelectorAll('.sub__month-link');
const subList = document.querySelectorAll('.sub__list');

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

if (subMonth) {
  changeLists(subMonth, subList, 'sub__list-hidden', 'sub__month-link--active');
}

// маска телефона

let elements = document.querySelectorAll('.imaskjs');

for (let i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7}(000)000-00-00',
  });
}

// слайдер отзывов

new Swiper('.js-swiper', {
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

// слайдер тренеров

new Swiper('.mySwiper', {
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
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 44.5,
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
  let regexp =
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
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

function generateURL() {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/9TZXsZItgdw' + query;
}

findVideos();
