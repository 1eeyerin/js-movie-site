import includeHTML from "../utils/includeHTML.js";
import common from "../common.js";
import {getMovieDetail} from "../api/getMovieDetail.js";
import customCursor from "../customCursor.js";
import hideLoadingOverlay from "../hideLoadingOverlay.js";

document.addEventListener("DOMContentLoaded", (() => {
  includeHTML(async () => {
    common();
    onGoBack();
    await getMovieDetail();
    await customCursor();
    await hideLoadingOverlay();
    await setPageAnimate();
  });
}));

const onGoBack = () => {
  const button = document.querySelector('#goBackBtn');

  button.onclick = () => window.history.back();
};

const setPageAnimate = () => {
  const wrapElements = document.querySelector(".top-info-section");

  if (!wrapElements) {
    return false;
  }

  const titleElements = wrapElements.querySelectorAll(".detail-title span");
  const dateElements = wrapElements.querySelector(".detail-date");
  const summaryElements = wrapElements.querySelector(".detail-summary");
  const informationElements = wrapElements.querySelector(".detail-bottom-information");

  gsap
    .timeline()
    .staggerFromTo(
      titleElements,
      0.8,
      {opacity: 0, y: '100%'},
      {opacity: 1, y: '0%', delay: 0.2, ease: Power1.easeInOut},
      0.05
    )
    .fromTo(
      [summaryElements, dateElements, informationElements].filter(el => el),
      {opacity: 0, y: '35px', filter: 'blur(10px)'},
      {
        opacity: 1,
        y: '0',
        filter: 'blur(0px)',
        delay: 0,
        ease: "power1.inOut",
        duration: 0.8
      }
    );
}