import {IMG_PATH, KOR_DATE_FORMAT} from "./api/constants/index.js";

const renderMovieDetail = ({ selector, data }) => {
  const fragment = new DocumentFragment();
  const $wrapper = document.querySelector(selector);

  const featureSection = document.createElement('section');
  const topInfoSection = document.createElement('section');
  featureSection.classList.add('feature-section');
  topInfoSection.classList.add('top-info-section');

  const bg = document.createElement('div');
  bg.classList.add('detail-bg');
  bg.style.backgroundImage = `url('${IMG_PATH}${data.poster_path}')`;
  featureSection.appendChild(bg);

  const thumbnailImg = document.createElement('img');
  thumbnailImg.classList.add('detail-thumbnail', 'custom_mousemove');
  thumbnailImg.src = `${IMG_PATH}${data.poster_path}`;
  topInfoSection.appendChild(thumbnailImg);

  const title = document.createElement('h1');
  title.classList.add('detail-title');

  if (data.title.length > 10) {
    title.style.fontSize = '58px';
  }

  data.title.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    title.appendChild(span);
  });

  topInfoSection.appendChild(title);

  const date = document.createElement('div');
  date.classList.add('detail-date');
  date.textContent = `(${data.release_date.slice(0, 4)})`;
  topInfoSection.appendChild(date);

  if (!!data.overview) {
    const summary = document.createElement('p');
    summary.classList.add('detail-summary');
    summary.textContent = data.overview;
    topInfoSection.appendChild(summary);
  }

  const bottomInformation = document.createElement('ul');
  bottomInformation.classList.add('detail-bottom-information');


  const infoItems = [
    `평점 : ${Math.floor(data.vote_average * 10) / 10}`,
    `개봉일 : ${new Date(data.release_date).toLocaleDateString('ko-KR', KOR_DATE_FORMAT)}`,
    `장르 : ${data.genres.map(({name}) => name).join(', ')}`,
    `상영 시간 : ${data.runtime}분`
  ];

  infoItems.forEach(itemText => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    bottomInformation.appendChild(listItem);
  });

  topInfoSection.appendChild(bottomInformation);
  fragment.appendChild(featureSection);
  fragment.appendChild(topInfoSection);
  $wrapper.appendChild(fragment);
};

export default renderMovieDetail;