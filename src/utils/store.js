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

const homeInitialData = {
  top: { items: [] },
  comedies: { items: [] },
  series: { items: [] },
  cartoons: { items: [] },
  detectives: { items: [] },
};

const swiperParams = {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

export { selectOptions, years, homeInitialData, swiperParams, months };
