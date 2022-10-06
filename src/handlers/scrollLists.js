export function scrollLists(next, list, state, setFunc) {
  if (state === list.length) {
    setFunc(0);
  }
  if (next) {
    setFunc((prevState) => prevState + 1);
  } else {
    setFunc((prevState) => prevState - 1);
  }
}
