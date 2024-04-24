import includeHTML from "../utils/includeHTML.js";
import common from "../common.js";
import {getMovieDetail} from "../api/getMovieDetail.js";
import customCursor from "../customCursor.js";

document.addEventListener("DOMContentLoaded", (() => {
  includeHTML(() => {
    common();
    onGoBack();
    
    getMovieDetail()
      .then(() =>  customCursor());
  });
}));

const onGoBack = () => {
  const button = document.querySelector('#goBackBtn');

  button.onclick = () => window.history.back();
};