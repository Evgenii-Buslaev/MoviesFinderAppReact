import FilmsService from "../API/FilmsService";

export async function getItems(packet, setList, setIsLoading) {
  let data;
  switch (packet) {
    case "premiers":
      data = await FilmsService.getPremiers();
      break;
    case "films":
      data = await FilmsService.getFilms();
      break;
    case "series":
      data = await FilmsService.getSeries();
      break;
    case "tv-shows":
      data = await FilmsService.getShows();
      break;
    case "comedies":
      data = await FilmsService.getPacketComedies();
      break;
    default:
      data = await FilmsService.getFilms();
  }

  const res = await data.json();
  setList(res);
  setIsLoading(false);
  console.log(res);
}

export async function getData(setListC, setListG, setIsLoading) {
  const data = await FilmsService.getCountriesIds();
  const res = await data.json();

  setListC(res.countries.map((object) => object.country));
  setListG(res.genres.map((object) => object.genre));
  setIsLoading(false);
}
