import FilmsService from "../API/FilmsService";

export async function getItems(page, packet, setList, setIsLoading) {
  let data;
  switch (packet) {
    case "premiers":
      data = await FilmsService.getPremiers();
      break;
    case "films":
      data = await FilmsService.getFilms(page);
      break;
    case "series":
      data = await FilmsService.getSeries(page);
      break;
    case "tv-shows":
      data = await FilmsService.getShows(page);
      break;
    case "comedies":
      data = await FilmsService.getPacketComedies();
      break;
    case "russian series":
      data = await FilmsService.getPacketRussianSeries();
      break;
    case "soviet detective":
      data = await FilmsService.getPacketSovietDetective();
      break;
    case "childrens cartoons":
      data = await FilmsService.getPacketChildrensCartoons();
      break;
    default:
      data = await FilmsService.getFilms(page);
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
  console.log(res);
}
