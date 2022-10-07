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
    default:
      data = await FilmsService.getFilms();
  }

  const res = await data.json();
  setList(res);
  setIsLoading(false);
  console.log(res);
}
