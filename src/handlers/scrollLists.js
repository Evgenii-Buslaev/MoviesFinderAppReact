export function scrollLists(next, list, state, setFunc, amount) {
  if (state === 0 && !next) {
    setFunc(list.length - amount + 1);
  }
  if (state === list.length - amount && next) {
    setFunc(-1);
  }
  if (next) {
    setFunc((prevState) => prevState + 1);
  } else {
    setFunc((prevState) => prevState - 1);
  }
}

export function scrollListFetching(e, setFunc) {
  if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100) {
    setFunc(true);
  }
}
