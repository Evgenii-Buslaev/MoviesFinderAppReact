export function filterList(list, key) {
  const amount = list.reduce((acc, film) => {
    acc[film[key]] = (acc[film[key]] || 0) + 1;
    return acc;
  }, {});
  return list.filter((elem) => amount[elem[key]] < 2);
}
