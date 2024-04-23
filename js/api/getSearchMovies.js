import {objectToQueryString} from "../utils/objectToQueryString.js";
import {API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION} from "./constants/index.js";
import {getQueryParamValue} from "../utils/getQueryString.js";
import {createMovieCard, createMovieList} from "../movieList.js";
import emptySearchResult from "../search/emptySearchResult.js";

export const getSearchMovies = () => {
  const searchWord = getQueryParamValue('query');
  const queryOptions = {
    ...DEFAULT_QUERIES,
    query: searchWord,
  };

  const queryString = objectToQueryString(queryOptions);

  fetch(`${API_MAIN_PATH}search/collection?${queryString}`, API_OPTION)
    .then(res => res.json())
    .then(({results}) => {
      console.log(results);

      createMovieList({
        data: results,
        isRandom: false,
        isCarousel: false,
        selector: '#searchListSection',
        createElementFunc: createMovieCard,
        emptyElementFunc: emptySearchResult
      });
    })
    .catch(err => console.error(err));
}