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

export const formatISODate = (isoString) => {
  const date = new Date(isoString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
