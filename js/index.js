import {getPopularMovies, getNowPlayingMovies} from "./api/index.js";
import includeHTML from './utils/includeHTML.js';
import common from "./common.js";
import onSearch from "./search/onSearch.js";
import customCursor from "./customCursor.js";
import removeSkeletonList from "./removeSkeletonList.js";

document.addEventListener("DOMContentLoaded", (() => {
  includeHTML(async () => {
    common();
    onSearch();
    await getPopularMovies();
    await getNowPlayingMovies();
    await customCursor();
    removeSkeletonList('#popularListSection');
    removeSkeletonList('#playingListSection');

    new Swiper(`#popularListSection .swiper-container`, {
      slidesPerView: 'auto',
      paginationClickable: true,
      spaceBetween: 12,
      freeMode: true
    });
  });
}));

