import FilmsService from "../API/FilmsService";

export async function getItems(page, packet, setList, endFetching) {
  let data;
  switch (packet) {
    case "films":
      data = await FilmsService.getFilms(page);
      break;
    case "series":
      data = await FilmsService.getSeries(page);
      break;
    case "tv-shows":
      data = await FilmsService.getShows(page);
      break;
    default:
      data = await FilmsService.getFilms(page);
  }
  const res = await data.json();
  setList(res);
  console.log(res);
  endFetching();
}

export async function getData(setListC, setListG, setIsLoading) {
  const data = await FilmsService.getCountriesIds();
  const res = await data.json();

  setListC(res.countries);
  setListG(res.genres);
  setIsLoading(false);
  console.log(res);
}

export function listFetching(
  packet,
  list,
  setList,
  page,
  setPage,
  setIsLoading,
  setTotalPages
) {
  let data;
  switch (packet) {
    case "films":
      data = FilmsService.getFilms(page);
      break;
    case "series":
      data = FilmsService.getSeries(page);
      break;
    case "tv-shows":
      data = FilmsService.getShows(page);
      break;
    default:
      console.log("fetching");
  }

  data
    .then((res) => res.json())
    .catch((error) => console.log(error))
    .then((result) => {
      console.log(result);
      setTotalPages(result.totalPages);
      setList([...list, ...result.items]);
      setPage((prevPage) => prevPage + 1);
    })
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false));
}
