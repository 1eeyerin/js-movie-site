import {objectToQueryString} from "../utils/objectToQueryString.js";
import {API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION} from "./constants/index.js";
import {getQueryParamValue} from "../utils/getQueryString.js";

export const getMovieDetail = () => {
  const movieId = getQueryParamValue('movieId');
  const queryString = objectToQueryString(DEFAULT_QUERIES);

  fetch(`${API_MAIN_PATH}movie/${movieId}?${queryString}`, API_OPTION)
    .then(res => res.json())
    .then((result) => {
      console.log(result);

    })
    .catch(err => console.error(err));
}