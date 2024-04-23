import {IMG_PATH} from "./api/constants/index.js";

const createMovieList = ({data, isRandom = false, selector, createElementFunc}) => {
  if (!selector || typeof createElementFunc !== 'function') {
    console.error('createMovieList에 필수 매개변수가 없습니다.');
    return false;
  }

  const list = document.querySelector(selector);

  if (isRandom) {
    data.sort(() => Math.random() - 0.5);
  }

  return data.forEach((movie) => list.appendChild(createElementFunc(movie)));
}

const createMovieCard = (movie) => {
  const listItem = document.createElement('li');
  listItem.classList.add('contents');

  const link = document.createElement('a');
  link.href = `./detail.html?movieId=${movie.id}`;

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
  listItem.appendChild(link);

  return listItem;
}

export { createMovieList, createMovieCard };