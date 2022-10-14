import FilmsService from "./FilmsService";

export function getAllData() {
  const data = [
    FilmsService.getPacketComedies(),
    FilmsService.getPacketRussianSeries(),
    FilmsService.getPacketChildrensCartoons(),
    FilmsService.getPacketSovietDetective(),
  ];
  return Promise.all(data).then((responses) =>
    Promise.all(responses.map((r) => r.json()))
  );
}
