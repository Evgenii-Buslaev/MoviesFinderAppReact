export function getHeader(category) {
  switch (category) {
    case "films":
      return "Фильмы";
    case "series":
      return "Сериалы";
    case "tv-shows":
      return "ТВ-шоу";
    default:
      return "Фильмы";
  }
}

const selectOptions = [
  { value: "ratingKinopoisk", name: "по рейтингу" },
  { value: "nameRu", name: "по названию" },
  { value: "year", name: "сначала новое" },
];

export { selectOptions };
