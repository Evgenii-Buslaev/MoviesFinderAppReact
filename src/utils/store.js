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

const years = [
  "2010-2023",
  "2000-2010",
  "1990-2000",
  "1980-1990",
  "1970-1980",
  "1960-1970",
  "1950-1960",
  "1940-1950",
];

export { selectOptions, years };
