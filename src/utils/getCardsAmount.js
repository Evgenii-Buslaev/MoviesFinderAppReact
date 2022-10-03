export function getCardsAmount(screen) {
  // 150 is fixed card width
  const amount = Math.floor(screen / 150);

  const fixedAmount = screen > 650 ? 3 : 2;
  const calculatedAmount = screen > 2000 ? 10 : amount - 3;

  return screen > 750 ? calculatedAmount : fixedAmount;
}
