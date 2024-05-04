import { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext({
  _mainCoinsList: [],
  coinsList: [],
  userWallet: [],
  showCryptoList: [],
  favoriteCryptos: [],
  isLoading: true,
  addFavorite: () => {},
  formatList: () => {},
  handleFormatNumber: () => {},
  handlePreventDefault: () => {},
  handleShowCryptoList: () => {},
  handleCustomToFixed: () => {},
  handleGetRandomNumber: () => {},
});

export default function CryptoContextProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [favoriteCryptos, setFavoriteCryptos] = useState([]);
  const [showCryptoList, setShowCryptoList] = useState("main");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCrypto() {
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets?limit=20`
        );
        const data = await response.json();

        if (!response.ok) throw new Error("Something went wrong!");

        setCoins(data.data);
        setFilteredCoins(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCrypto();
  }, []);

  function handleFavorite(coin) {
    const newFavoriteCryptos = [...favoriteCryptos];

    if (newFavoriteCryptos.includes(coin)) {
      newFavoriteCryptos.splice(
        newFavoriteCryptos.findIndex((el) => el === coin),
        1
      );
    } else newFavoriteCryptos.push(coin);

    console.log(newFavoriteCryptos);

    setFavoriteCryptos(newFavoriteCryptos);
  }

  function handleCustomToFixed(number) {
    if (Math.abs(number) >= 0.1 || Math.abs(number) === 0) {
      return handleFormatNumberWithCommas(number.toFixed(2));
    } else {
      let strNumber = number.toString();
      let decimalIndex = strNumber.indexOf(".");
      if (decimalIndex !== -1) {
        let nonZeroIndex = decimalIndex + 1;
        while (
          nonZeroIndex < strNumber.length &&
          strNumber.charAt(nonZeroIndex) === "0"
        ) {
          nonZeroIndex++;
        }
        let precision = Math.min(
          strNumber.length - decimalIndex - 1,
          nonZeroIndex - decimalIndex - 1
        );
        return handleFormatNumberWithCommas(number.toFixed(precision + 2));
      } else {
        return handleFormatNumberWithCommas(number.toString());
      }
    }
  }

  function handleFormatList(event, arrOfCoins, type) {
    let newCoins = [];

    if (event.target.value === "rank") {
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(a.rank) - Number(b.rank)
      );
    }

    if (event.target.value === "rank-reversed")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(b.rank) - Number(a.rank)
      );

    if (event.target.value === "cost")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(b.priceUsd) - Number(a.priceUsd)
      );

    if (event.target.value === "cost-reversed")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(a.priceUsd) - Number(b.priceUsd)
      );

    if (event.target.value === "marketcap")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(b.marketCapUsd) - Number(a.marketCapUsd)
      );

    if (event.target.value === "marketcap-reversed")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(a.marketCapUsd) - Number(b.marketCapUsd)
      );

    if (event.target.value === "volume")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(b.volumeUsd24Hr) - Number(a.volumeUsd24Hr)
      );

    if (event.target.value === "volume-reversed")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(a.volumeUsd24Hr) - Number(b.volumeUsd24Hr)
      );

    if (event.target.value === "change")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
      );

    if (event.target.value === "change-reversed")
      newCoins = [...arrOfCoins].sort(
        (a, b) => Number(a.changePercent24Hr) - Number(b.changePercent24Hr)
      );

    type === "main" ? setFilteredCoins(newCoins) : setFavoriteCryptos(newCoins);
  }

  function handleFormatNumber(amount) {
    let newAmount = amount;

    if (amount > 1000000) newAmount = (amount / 1000000).toFixed(0) + "M";
    if (amount > 1000000000) newAmount = (amount / 1000000000).toFixed(0) + "B";
    if (amount > 1000000000000)
      newAmount = (amount / 1000000000000).toFixed(0) + "T";

    return newAmount;
  }

  function handlePreventDefault(event) {
    if (event.target.closest("a")) {
      event.preventDefault();
    }
  }

  function handleShowCryptoList(identifier) {
    setShowCryptoList(identifier);
  }

  function handleFormatNumberWithCommas(number) {
    const parts = number.toString().split(".");
    const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (parts.length > 1) {
      return formattedInteger + "." + parts[1];
    } else {
      return formattedInteger;
    }
  }

  function handleGetRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const cryptoValue = {
    _mainCoinsList: coins,
    coinsList: filteredCoins,
    userWallet: [],
    showCryptoList,
    favoriteCryptos,
    isLoading,
    addFavorite: handleFavorite,
    formatList: handleFormatList,
    handleFormatNumber,
    handlePreventDefault,
    handleShowCryptoList,
    handleFormatNumberWithCommas,
    handleCustomToFixed,
    handleGetRandomNumber,
  };

  return (
    <CryptoContext.Provider value={cryptoValue}>
      {children}
    </CryptoContext.Provider>
  );
}
