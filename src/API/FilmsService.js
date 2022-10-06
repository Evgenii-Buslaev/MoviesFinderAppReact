const PREMIERS_URL =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=OCTOBER";

const headers = {
  method: "GET",
  headers: {
    "X-API-KEY": "986eeea7-968e-4022-9877-e84daf01fcc7",
    "Content-Type": "application/json",
  },
};

export default class FilmsService {
  static async getPremiers() {
    const response = await fetch(PREMIERS_URL, headers);
    return response;
  }
}
