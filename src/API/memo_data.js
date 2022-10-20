import FilmsService from "./FilmsService";

export function getHomeData() {
  const data = [
    FilmsService.getPremiers(),
    FilmsService.getPacketComedies(),
    FilmsService.getPacketRussianSeries(),
    FilmsService.getPacketChildrensCartoons(),
    FilmsService.getPacketSovietDetective(),
  ];
  return Promise.allSettled(data).then((responses) =>
    Promise.allSettled(responses.map((r) => r.json()))
  );
}

export function getCategoriesData() {
  const data = [
    FilmsService.getFilms(1),
    FilmsService.getSeries(1),
    FilmsService.getShows(1),
  ];
  return Promise.all(data).then((responses) =>
    Promise.all(responses.map((r) => r.json()))
  );
}
