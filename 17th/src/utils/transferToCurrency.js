export const formatNumber = (number) => {
  const newNumber = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(number);

  return newNumber;
};
