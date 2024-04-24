const AUTH_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTY4NGNmNzM4NmRhMzgyYzgxNzY0NTYyM2NkZDMxYiIsInN1YiI6IjY2MjY1OGU4ZTU0ZDVkMDE3ZWVlMGUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwJDgIMBULDW24zeUBfe6EHoXFNQTyZP6Ii5KXE47gY';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
const API_MAIN_PATH = 'https://api.themoviedb.org/3/';

const DEFAULT_QUERIES = {
  include_adult: false,
  language: 'ko-KR',
  page: 1
};

const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`}
};
const KOR_DATE_FORMAT = { year: 'numeric', month: 'long', day: 'numeric' };

export {AUTH_KEY, IMG_PATH, API_MAIN_PATH, DEFAULT_QUERIES, API_OPTION, KOR_DATE_FORMAT};