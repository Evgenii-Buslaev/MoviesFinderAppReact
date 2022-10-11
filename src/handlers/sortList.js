export function sortList(sort, setSort, list, setList) {
  setSort(sort);
  if (sort === "ratingKinopoisk" || sort === "year") {
    setList([...list].sort((a, b) => b[sort] - a[sort]));
  } else {
    setList(
      [...list].sort((a, b) => {
        a = a.nameRu || "";
        b = b.nameRu || "";
        return a.localeCompare(b);
      })
    );
  }
}
