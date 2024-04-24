import {objectToQueryString} from "../utils/objectToQueryString.js";
import {API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION} from "./constants/index.js";
import {getQueryParamValue} from "../utils/getQueryString.js";
import {insertMovieDetail} from "../movieDetail.js";
import hideLoadingOverlay from "../hideLoadingOverlay.js";

export const getMovieDetail = () => {
  const movieId = getQueryParamValue('movieId');
  const queryString = objectToQueryString(DEFAULT_QUERIES);

  return new Promise((resolve) => {
    fetch(`${API_MAIN_PATH}movie/${movieId}?${queryString}`, API_OPTION)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch getMovieDetail');
        }
        return res.json();
      })
      .then((result) => {
        console.log('@@ result', result);

        insertMovieDetail({
          selector: '#detailPage',
          data: result
        });
        hideLoadingOverlay();
      })
      .catch(err => {
        console.error(err);
        hideLoadingOverlay();
      })
      .finally(() => resolve(true));
  });
}