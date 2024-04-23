import {objectToQueryString} from "../utils/objectToQueryString.js";
import {API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION} from "./constants/index.js";
import {getQueryParamValue} from "../utils/getQueryString.js";
import {createMovieCard, createMovieList} from "../movieList.js";
import emptySearchResult from "../search/emptySearchResult.js";
import setMoviesResponseNormalized from "../utils/setMoviesResponseNormalized.js";

export const getSearchMovies = () => {
  return new Promise((resolve) => {
  const searchWord = getQueryParamValue('query');
  const queryOptions = {
    ...DEFAULT_QUERIES,
    query: searchWord,
  };

  const queryString = objectToQueryString(queryOptions);

  return fetch(`${API_MAIN_PATH}search/collection?${queryString}`, API_OPTION)
    .then(res => res.json())
    .then(({results}) => {
      console.log(results);
      const normalizeResults = setMoviesResponseNormalized(results);

      createMovieList({
        data: normalizeResults,
        isRandom: false,
        isCarousel: false,
        selector: '#searchListSection',
        createElementFunc: createMovieCard,
        emptyElementFunc: emptySearchResult
      });
    })
    .catch(err => console.error(err))
    .finally(() => resolve(true));
  });
}