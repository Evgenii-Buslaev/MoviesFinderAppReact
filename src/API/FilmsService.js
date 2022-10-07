const URL = {
  premiers:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=OCTOBER",
  films:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1",
  series:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1",
  shows:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SHOW&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1",
};

const KEY = "8793b375-41ed-45e8-99f2-dddaf5296a1c";
/* const KEY_RESERVE = "986eeea7-968e-4022-9877-e84daf01fcc7"; */

const headers = {
  method: "GET",
  headers: {
    "X-API-KEY": KEY,
    "Content-Type": "application/json",
  },
};

export default class FilmsService {
  static async getPremiers() {
    const response = await fetch(URL.premiers, headers);
    return response;
  }

  static async getFilms() {
    const response = await fetch(URL.films, headers);
    return response;
  }

  static async getSeries() {
    const response = await fetch(URL.series, headers);
    return response;
  }

  static async getShows() {
    const response = await fetch(URL.shows, headers);
    return response;
  }
}
