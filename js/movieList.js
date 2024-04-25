import {IMG_PATH} from "./api/constants/index.js";

const createMovieList = ({
  data,
  isRandom = false,
  selector,
  isCarousel = false,
  createElementFunc,
  emptyElementFunc,
}) => {
  if (!selector || typeof createElementFunc !== 'function') {
    console.error('createMovieList에 필수 매개변수가 없습니다.');
    return false;
  }

  if (!data?.length) return emptyElementFunc?.(selector);
  if (isRandom) data.sort(() => Math.random() - 0.5);

  const fragment = document.createDocumentFragment();
  const $target = document.querySelector(selector);
  const container = document.createElement('div');

  const list = document.createElement('ul');
  list.className = `movie-cards ${isCarousel ? 'swiper-wrapper carousel' : 'list'}`;

  if (isCarousel) {
    container.classList.add('swiper-container');
  }

  data.forEach((movie) => fragment.appendChild(createElementFunc(movie, isCarousel)));

  list.appendChild(fragment);
  container.appendChild(list);
  $target.appendChild(container);
}

const createMovieCard = (movie, isCarousel) => {
  const li = document.createElement('li');
  li.className = `contents${isCarousel ? ' swiper-slide': ''}`;

  const link = document.createElement('a');
  link.href = `./detail.html?movieId=${movie.id}`;
  link.classList.add('custom_mousemove');

  const image = document.createElement('img');
  image.src = `${IMG_PATH}${movie['poster_path']}`;
  image.alt = '';

  const movieInfo = document.createElement('div');
  movieInfo.classList.add('movie-info');

  const title = document.createElement('strong');
  title.classList.add('movie-info-title');
  title.textContent = movie.title?.length > 15 ? movie.title.slice(0, 15) + '...' : movie.title;

  movieInfo.appendChild(title);
  link.appendChild(image);
  link.appendChild(movieInfo);
  li.appendChild(link);

  return li;
}

export { createMovieList, createMovieCard };