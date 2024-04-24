import includeHTML from "../utils/includeHTML.js";
import common from "../common.js";
import {getMovieDetail} from "../api/getMovieDetail.js";
import customCursor from "../customCursor.js";

document.addEventListener("DOMContentLoaded", (() => {
  includeHTML(async () => {
    common();
    onGoBack();
    
    await getMovieDetail();
    await customCursor();
  });
}));

const onGoBack = () => {
  const button = document.querySelector('#goBackBtn');

  button.onclick = () => window.history.back();
};