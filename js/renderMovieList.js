import {IMG_PATH} from "./api/constants/index.js";

const renderMovieList = ({
  data,
  isRandom = false,
  selector,
  isCarousel = false,
  renderCardText,
  renderNoResultElement,
}) => {
  if (!selector || typeof renderCardText !== 'function') {
    console.error('renderMovieList에 필수 매개변수가 없습니다.');
    return false;
  }

  if (!data?.length) return renderNoResultElement?.(selector);
  if (isRandom) data.sort(() => Math.random() - 0.5);

  const $target = document.querySelector(selector);
  const container = document.createElement('div');

  const list = `
    <ul class="movie-cards ${isCarousel ? 'swiper-wrapper carousel' : 'list'}">
      ${data.map(movie => renderCardText(movie, isCarousel)).join('')}
    </ul>
  `;

  if (isCarousel) {
    container.classList.add('swiper-container');
  }

  container.innerHTML = list;
  $target.appendChild(container);
}

const  renderMovieCardText = (movie, isCarousel) => {
  const link = `
    <a href="./detail.html?movieId=${movie.id}" class="custom_mousemove">
      <img src="${IMG_PATH}${movie['poster_path']}" alt=""/>
      <div class="movie-info">
        <strong class="movie-info-title">${movie.title?.length > 15 ? movie.title.slice(0, 15) + '...' : movie.title}</strong>
      </div>
    </a>
  `;

  return `
    <li class="contents${isCarousel ? ' swiper-slide': ''}">
      ${link}
    </li>
  `;
}

export { renderMovieList, renderMovieCardText };