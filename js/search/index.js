import includeHTML from "../utils/includeHTML.js";
import common from "../common.js";
import {getSearchMovies} from "../api/index.js";
import {getQueryParamValue} from "../utils/getQueryString.js";
import onSearch from "./onSearch.js";
import customCursor from "../customCursor.js";

document.addEventListener("DOMContentLoaded", (() => {
  includeHTML(async () => {
    common();
    onSearch();
    setSearchKeyword();
    await getSearchMovies();
    await customCursor();
  });
}));

const setSearchKeyword = () => {
  const searchWord = getQueryParamValue('query');
  const input = document.querySelector('#searchInput');

  input.value = decodeURIComponent(searchWord);
};