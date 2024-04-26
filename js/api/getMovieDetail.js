import {objectToQueryString} from "../utils/objectToQueryString.js";
import {API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION, BASE_URL} from "./constants/index.js";
import {getQueryParamValue} from "../utils/getQueryString.js";
import {insertMovieDetail} from "../movieDetail.js";
import {appendHtml} from "../utils/includeHTML.js";

export const getMovieDetail = async () => {
  const movieId = getQueryParamValue('movieId');
  const queryString = objectToQueryString(DEFAULT_QUERIES);

  await fetch(`${API_MAIN_PATH}movie/${movieId}?${queryString}`, API_OPTION)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch getMovieDetail');
      }
      return res.json();
    })
    .then((result) => {
      insertMovieDetail({
        selector: '#detailPage',
        data: result
      });
    })
    .catch(err => {
      console.error(err);
      const isProduction = !location.origin.includes('localhost');
      const filePath = isProduction ? BASE_URL + 'html/not-found.html' : '../../html/not-found.html';
      appendHtml('#detailPage', filePath);
    });
};
