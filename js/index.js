import {getPopularMovies} from "./api/index.js";
import includeHTML from './utils/includeHTML.js';
import common from "./common.js";

document.addEventListener("DOMContentLoaded", function() {
  includeHTML(() => {
    common();
    getPopularMovies();
  });
});
