import { ids } from "../utils/countries_genres_ids";
import { defineMonth } from "../handlers/defineMonth";
import { months } from "../utils/store";

const URL = {
  premiers:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=",
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
  /*   "8793b375-41ed-45e8-99f2-dddaf5296a1c", */
  "986eeea7-968e-4022-9877-e84daf01fcc7",
  "b0f850d3-735d-4517-84a1-f12798847e34",
  "d813835e-60a8-4642-b8f8-a6e3e19b9eef",
  "bb3124ba-285b-4637-8090-0132ebb487b0",
  "a595254b-5a7e-4a76-b72a-0bb61d682232",
  "ec134678-1ffb-48ac-9656-3991bb2e1ffd",
  "b190295b-55aa-4660-8764-7ad7b487d480",
  "d914743b-6526-443d-9f6f-82560fa3ea3b",
  "6515a4a7-db8e-4b05-855b-9698f7fd7cdd",
  "dc1b1049-c3b8-445f-abe4-9e26187d5036",
  "52bfe665-6248-4b6f-a8b6-2112a00cce28",
  "afa1e8ce-725a-4b13-8bf9-d19e22c30456",
  "dba938b4-152e-439f-8047-2630e87041fb",
];

export default class FilmsService {
  static async getPremiers() {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[0],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(
        `${URL.premiers}${months[defineMonth()]}`,
        headers
      );
      console.log(response);
    } catch (err) {
      console.log(err.status);
    } finally {
      return response;
    }
  }

  static async getFilms(page) {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[1],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(`${URL.films}${page}`, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
  }

  static async getSeries(page) {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[2],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(`${URL.series}${page}`, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
  }

  static async getShows(page) {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[3],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(`${URL.shows}${page}`, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
  }

  static async getPacketComedies() {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[4],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(PacketURL.comedies, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
  }

  static async getPacketRussianSeries() {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[5],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(PacketURL.russian_series, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
  }

  static async getPacketSovietDetective() {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[6],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(PacketURL.soviet_detective, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
  }

  static async getPacketChildrensCartoons() {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[7],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(PacketURL.children_cartoons, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
  }

  static async getCountriesIds() {
    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[8],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(ID_URL, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
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

    let response;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[9],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(search_URL, headers);
    } catch (err) {
      console.log(err);
    } finally {
      return response;
    }
  }

  static async getById(id) {
    let response;
    let data;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[10],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(`${URL.id}${id}`, headers);
    } catch (err) {
      console.log(err);
    }
    try {
      data = response.json();
    } catch (err) {
      console.log(err);
    } finally {
      return data;
    }
  }

  static async getSimilarById(id) {
    let response;
    let data;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[11],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(`${URL.id}${id}/similars`, headers);
    } catch (err) {
      console.log(err);
    }
    try {
      data = response.json();
    } catch (err) {
      console.log(err);
    } finally {
      return data;
    }
  }

  static async getVideoById(id) {
    let response;
    let data;
    const headers = {
      method: "GET",
      headers: {
        "X-API-KEY": KEYS[12],
        "Content-Type": "application/json",
      },
    };
    try {
      response = await fetch(`${URL.id}${id}/videos`, headers);
    } catch (err) {
      console.log(err);
    }
    try {
      data = response.json();
    } catch (err) {
      console.log(err);
    } finally {
      return data;
    }
  }
}
