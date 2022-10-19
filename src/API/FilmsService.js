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
  id: "https://kinopoiskapiunofficial.tech/api/v2.2/films/",
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

const KEYS = [
  "8793b375-41ed-45e8-99f2-dddaf5296a1c",
  "986eeea7-968e-4022-9877-e84daf01fcc7",
  "b0f850d3-735d-4517-84a1-f12798847e34",
  "d813835e-60a8-4642-b8f8-a6e3e19b9eef",
  "bb3124ba-285b-4637-8090-0132ebb487b0",
  "a595254b-5a7e-4a76-b72a-0bb61d682232",
  "ec134678-1ffb-48ac-9656-3991bb2e1ffd",
];

const headers = {
  method: "GET",
  headers: {
    "X-API-KEY": KEYS[0],
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

  static async getCountriesIds() {
    const response = await fetch(ID_URL, headers);
    return response;
  }

  static async search(page, keyword, country, genre, years) {
    let yearsStart;
    let yearsEnd;
    yearsStart = +years.split("-")[0];
    yearsEnd = +years.split("-")[1];
    if (isNaN(yearsStart) || isNaN(yearsEnd)) {
      yearsStart = 1000;
      yearsEnd = 3000;
    }

    const country_ID = ids.countries.filter((elem) =>
      elem.country.toLowerCase().includes(country.toLowerCase())
    );

    const genre_ID = ids.genres.filter((elem) =>
      elem.genre.toLowerCase().includes(genre.toLowerCase())
    );

    let country_data = country_ID.length
      ? `&countries=${country_ID[0]?.id}`
      : "";
    let genre_data = genre_ID.length ? `&genres=${genre_ID[0]?.id}` : "";

    const search_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${keyword}${country_data}${genre_data}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=${yearsStart}&yearTo=${yearsEnd}&page=${page}`;
    const response = await fetch(search_URL, headers);
    return response;
  }

  static async getById(id) {
    const response = await fetch(`${URL.id}${id}`, headers);
    const data = response.json();
    return data;
  }

  static async getImagesById(id) {
    const response = await fetch(`${URL.id}${id}/images`, headers);
    const data = response.json();
    return data;
  }

  static async getSimilarById(id) {
    const response = await fetch(`${URL.id}${id}/similars`, headers);
    const data = response.json();
    return data;
  }

  static async getVideoById(id) {
    const response = await fetch(`${URL.id}${id}/videos`, headers);
    const data = response.json();
    return data;
  }
}
