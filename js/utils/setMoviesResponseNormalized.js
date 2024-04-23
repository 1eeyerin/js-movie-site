const setMoviesResponseNormalized = (data) => {
  return data.map((movie) => {
    const title = movie.title || movie.name;

    return {
      ...movie,
      title
    }
  });
}

export default setMoviesResponseNormalized;