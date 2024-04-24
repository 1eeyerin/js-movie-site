const hideLoadingOverlay = () => {
  const loadingOverlay = document.getElementById('loadingPage');

  const hideOverlay = setTimeout(() => {
    loadingOverlay.style.display = 'none';

    clearTimeout(hideOverlay);
  }, 500);
}

export default hideLoadingOverlay;