import includeHTML from "../utils/includeHTML.js";
import common from "../common.js";
import {getSearchMovies} from "../api/index.js";
import {getQueryParamValue} from "../utils/getQueryString.js";
import onSearch from "./onSearch.js";

document.addEventListener("DOMContentLoaded", function() {
  includeHTML(() => {
    common();
    onSearch();
    getSearchMovies();
    setSearchKeyword();
  });
});

const setSearchKeyword = () => {
  const searchWord = getQueryParamValue('query');
  const input = document.querySelector('#searchInput');
  input.value = decodeURIComponent(searchWord);
}