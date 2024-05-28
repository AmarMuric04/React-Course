export const convertToCurrency = (number) => {
  const numToCurrency = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(number);

  return numToCurrency;
};

export const transformString = (string) => {
  return string[0].toUpperCase() + string.slice(1).replaceAll("-", " ").trim();
};
