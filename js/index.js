import {getPopularMovies, getNowPlayingMovies} from "./api/index.js";
import includeHTML from './utils/includeHTML.js';
import common from "./common.js";
import onSearch from "./search/onSearch.js";
import customCursor from "./customCursor.js";

document.addEventListener("DOMContentLoaded", (() => {
  includeHTML(async () => {
    common();
    onSearch();
    await getPopularMovies();
    await getNowPlayingMovies();
    await customCursor();
  });
}));

