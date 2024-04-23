export const objectToQueryString = (obj) => {
  const keys = Object.keys(obj);

  return keys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
}