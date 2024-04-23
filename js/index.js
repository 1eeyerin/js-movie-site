import {getPopularMovies} from "./api";
import includeHTML from './utils/includeHTML.js';
import common from "./common.js";

document.addEventListener("DOMContentLoaded", function() {
  includeHTML(() => {
    common();
    getPopularMovies();
  });
});
