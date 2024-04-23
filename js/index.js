import {getPopularMovies, getNowPlayingMovies} from "./api/index.js";
import includeHTML from './utils/includeHTML.js';
import common from "./common.js";
import onSearch from "./search/onSearch.js";

document.addEventListener("DOMContentLoaded", function() {
  includeHTML(() => {
    common();
    onSearch();
    getPopularMovies();
    getNowPlayingMovies();
  });
});
