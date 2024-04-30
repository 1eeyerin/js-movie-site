import {IMG_PATH, KOR_DATE_FORMAT} from "./api/constants/index.js";

const renderMovieDetail = ({ selector, data }) => {
  const $wrapper = document.querySelector(selector);

  const featureSection = `
    <section class="feature-section">
      <div class="detail-bg" style="background-image: url('${IMG_PATH}${data.poster_path}')"></div>
    </section>
  `;

  const topInfoSection = `
    <section class="top-info-section">
      <img class="detail-thumbnail custom_mousemove" src="${IMG_PATH}${data.poster_path}"/>
      <h1 class="detail-title" style="${data.title.length > 10 ? 'font-size: 58px' : ''}">
        ${data.title.split('').map(char => `<span>${char}</span>`).join('')}
      </h1>
      <div class="detail-date">(${data.release_date.slice(0, 4)})</div>
      ${!!data.overview ? `<p class="detail-summary">${data.overview}</p>` : ''}
      <ul class="detail-bottom-information">
        <li>평점 : ${Math.floor(data.vote_average * 10) / 10}</li>
        <li>개봉일 : ${new Date(data.release_date).toLocaleDateString('ko-KR', KOR_DATE_FORMAT)}</li>
        <li>장르 : ${data.genres.map(({name}) => name).join(', ')}</li>
        <li>상영 시간 : ${data.runtime}분</li>
      </ul>
    </section>
  `;

  $wrapper.innerHTML = featureSection + topInfoSection;
};

export default renderMovieDetail;