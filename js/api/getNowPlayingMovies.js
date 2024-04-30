import {objectToQueryString} from "../utils/objectToQueryString.js";
import {API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION} from "./constants/index.js";
import {renderMovieCardText, renderMovieList} from "../renderMovieList.js";

export const getNowPlayingMovies = async () => {
  const queryString = objectToQueryString(DEFAULT_QUERIES);

  await fetch(`${API_MAIN_PATH}movie/now_playing?${queryString}`, API_OPTION)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch getNowPlayingMovies');
      }
      return res.json();
    })
    .then(({results}) => {
      renderMovieList({
        data: results,
        isRandom: true,
        isCarousel: false,
        selector: '#playingListSection',
        renderCardText: renderMovieCardText
      });
    })
    .catch(err => console.error(err));
};