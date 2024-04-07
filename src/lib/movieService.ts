import api from "./api/api";
import { MovieResponse } from "./api/movieResponse";

const movieService = {
  getMovies: async () => {
    return await api.get<MovieResponse[]>("movies");
  },
};

export default movieService;
