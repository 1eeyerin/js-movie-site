import {objectToQueryString} from "../utils/objectToQueryString.js";
import {API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION} from "./constants/index.js";
import {getQueryParamValue} from "../utils/getQueryString.js";
import {renderMovieCard, renderMovieList} from "../renderMovieList.js";
import renderNoSearchResult from "../search/renderNoSearchResult.js";
import setMoviesResponseNormalized from "../utils/setMoviesResponseNormalized.js";

export const getSearchMovies = async () => {
  const searchWord = getQueryParamValue('query');
  const queryOptions = {
    ...DEFAULT_QUERIES,
    query: searchWord,
  };

  const queryString = objectToQueryString(queryOptions);

  await fetch(`${API_MAIN_PATH}search/movie?${queryString}`, API_OPTION)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch getNowPlayingMovies');
      }
      return res.json();
    })
    .then(({results}) => {
      const normalizeResults = setMoviesResponseNormalized(results);

      renderMovieList({
        data: normalizeResults,
        isRandom: false,
        isCarousel: false,
        selector: '#searchListSection',
        renderChildElement: renderMovieCard,
        renderNoResultElement: renderNoSearchResult
      });
    })
    .catch(err => console.error(err));
}