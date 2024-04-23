import includeHTML from "../utils/includeHTML.js";
import common from "../common.js";

document.addEventListener("DOMContentLoaded", function() {
  includeHTML(() => {
    common();
    onGoBack();
  });
});

const onGoBack = () => {
  const button = document.querySelector('#goBackBtn');

  button.onclick = () => window.history.back();
};