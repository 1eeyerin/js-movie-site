import {IMG_PATH} from "./api/constants";

const createMovieDetail = (movie) => {
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

export {createMovieDetail}