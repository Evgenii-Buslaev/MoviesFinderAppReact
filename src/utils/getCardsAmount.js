export function getCardsAmount(screen, card) {
  const amount = Math.floor(screen / card);

  const fixedAmount = screen > 650 ? 3 : 2;
  const calculatedAmount = screen > 2000 ? 10 : amount - 3;

  return screen > 750 ? calculatedAmount : fixedAmount;
}
