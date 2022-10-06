const PREMIERS_URL =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=OCTOBER";

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
    const response = await fetch(PREMIERS_URL, headers);
    return response;
  }
}
