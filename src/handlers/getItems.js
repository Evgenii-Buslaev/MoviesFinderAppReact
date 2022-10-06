import FilmsService from "../API/FilmsService";

export async function getItems(packet, setList, setIsLoading) {
  let data;
  switch (packet) {
    case "premiers":
      data = await FilmsService.getPremiers();
      break;
    case "top":
      data = await FilmsService.getTop();
      break;
    default:
      data = await FilmsService.getTop();
  }

  const res = await data.json();
  setList(res);
  setIsLoading(false);
  console.log(res);
}
