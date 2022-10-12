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
  { years: "2010-2023" },
  { years: "2000-2010" },
  { years: "1990-2000" },
  { years: "1980-1990" },
  { years: "1970-1980" },
  { years: "1960-1970" },
  { years: "1950-1960" },
  { years: "1940-1950" },
];

export { selectOptions, years };
