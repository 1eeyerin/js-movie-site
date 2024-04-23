import {objectToQueryString} from "../utils/objectToQueryString.js";
import {API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION} from "./constants/index.js";
import {createMovieCard, createMovieList} from "../movieList.js";

export const getNowPlayingMovies = () => {
  const queryString = objectToQueryString(DEFAULT_QUERIES);

  fetch(`${API_MAIN_PATH}movie/now_playing?${queryString}`, API_OPTION)
    .then(res => res.json())
    .then(({results}) => {
      console.log(results);

      createMovieList({
        data: results,
        isRandom: true,
        isCarousel: false,
        selector: '#playingListSection',
        createElementFunc: createMovieCard
      });
    })
    .catch(err => console.error(err));
}