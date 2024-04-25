import includeHTML from "../utils/includeHTML.js";
import common from "../common.js";
import {getMovieDetail} from "../api/getMovieDetail.js";
import customCursor from "../customCursor.js";
import hideLoadingOverlay from "../hideLoadingOverlay.js";
import setPageAnimate from "./setPageAnimate.js";

document.addEventListener("DOMContentLoaded", (() => {
  includeHTML(async () => {
    common();
    onGoBack();
    await getMovieDetail();
    await customCursor();
    await hideLoadingOverlay();
    setPageAnimate();
  });
}));

const onGoBack = () => {
  const button = document.querySelector('#goBackBtn');

  button.onclick = () => window.history.back();
};