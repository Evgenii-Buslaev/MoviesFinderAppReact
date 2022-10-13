import { ids } from "../utils/countries_genres_ids";

const URL = {
  premiers:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=OCTOBER",
  films:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=",
  series:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=",
  shows:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SHOW&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=",
};

const PacketURL = {
  comedies:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=13&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=3",
  russian_series:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=34&genres=13&order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=5",
  soviet_detective:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=33&genres=5&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1",
  children_cartoons:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=18&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1",
};

const ID_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/filters";

/* const KEY = "8793b375-41ed-45e8-99f2-dddaf5296a1c"; */
const KEY_RESERVE = "986eeea7-968e-4022-9877-e84daf01fcc7";
/* const KEY_RESERVE2 = "b0f850d3-735d-4517-84a1-f12798847e34" */
const headers = {
  method: "GET",
  headers: {
    "X-API-KEY": KEY_RESERVE,
    "Content-Type": "application/json",
  },
};

export default class FilmsService {
  static async getPremiers() {
    const response = await fetch(URL.premiers, headers);
    return response;
  }

  static async getFilms(page) {
    const response = await fetch(`${URL.films}${page}`, headers);
    return response;
  }

  static async getSeries(page) {
    const response = await fetch(`${URL.series}${page}`, headers);
    return response;
  }

  static async getShows(page) {
    const response = await fetch(`${URL.shows}${page}`, headers);
    return response;
  }

  static async getPacketComedies() {
    const response = await fetch(PacketURL.comedies, headers);
    return response;
  }

  static async getPacketRussianSeries() {
    const response = await fetch(PacketURL.russian_series, headers);
    return response;
  }

  static async getPacketSovietDetective() {
    const response = await fetch(PacketURL.soviet_detective, headers);
    return response;
  }

  static async getPacketChildrensCartoons() {
    const response = await fetch(PacketURL.children_cartoons, headers);
    return response;
  }

  static async search(page, keyword, country, genre, years) {
    let yearsStart;
    let yearsEnd;
    if (years) {
      yearsStart = years.split("-")[0];
      yearsEnd = years.split("-")[1];
    } else {
      yearsStart = 1000;
      yearsEnd = 3000;
    }

    const country_ID = country
      ? ids.countries.filter((elem) => elem.country === country)[0].id
      : "";
    const genre_ID = genre
      ? ids.genres.filter((elem) => elem.genre === genre)[0].id
      : "";

    const search_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${keyword}&countries=${country_ID}&genres=${genre_ID}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=${yearsStart}&yearTo=${yearsEnd}&page=${page}`;
    const response = await fetch(search_URL, headers);
    return response;
  }
}
