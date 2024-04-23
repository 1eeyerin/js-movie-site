import {getPopularMovies, getNowPlayingMovies} from "./api/index.js";
import includeHTML from './utils/includeHTML.js';
import common from "./common.js";
import onSearch from "./search/onSearch.js";
import customCursor from "./customCursor.js";

document.addEventListener("DOMContentLoaded", (() => {
  includeHTML(() => {
    common();
    onSearch();

    getMoviesWithPromiseAll()
      .then(() => customCursor());
  });
}));

const getMoviesWithPromiseAll = () => {
  return Promise.all([getPopularMovies(), getNowPlayingMovies()]);
}

