export function changeKeyHandler(array, position) {
  const filtered = array.filter((e, i) => i !== position);
  return Math.floor(Math.random() * filtered.length);
}
