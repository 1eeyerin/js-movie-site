export const getQueryParamValue = (paramName) => {
  if (!paramName) return '';

  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
};
