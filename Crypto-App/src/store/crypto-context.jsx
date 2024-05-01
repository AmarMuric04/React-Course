import { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext({
  coinsList: [],
  userWallet: [],
  formatList: () => {},
  buyCoin: () => {},
  handleFormatNumber: () => {},
});

export default function CryptoContextProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    async function fetchCrypto() {
      const response = await fetch(`https://api.coincap.io/v2/assets?limit=20`);
      const data = await response.json();

      setCoins(data.data);
    }

    fetchCrypto();
  }, []);

  function handleBuy(coin) {
    alert(`Purchased one ${coin.id} for ${coin.value}$`);

    setWallet((prevWallet) => {
      return [
        ...prevWallet,
        {
          id: coin.id,
          value: coin.value,
        },
      ];
    });
  }

  function handleFormatList(event) {
    let newCoins = [];

    if (event.target.value === "rank") {
      newCoins = [...coins].sort((a, b) => Number(a.rank) - Number(b.rank));
    }

    if (event.target.value === "rank-reversed")
      newCoins = [...coins].sort((a, b) => Number(b.rank) - Number(a.rank));

    if (event.target.value === "cost")
      newCoins = [...coins].sort(
        (a, b) => Number(b.priceUsd) - Number(a.priceUsd)
      );

    if (event.target.value === "cost-reversed")
      newCoins = [...coins].sort(
        (a, b) => Number(a.priceUsd) - Number(b.priceUsd)
      );

    if (event.target.value === "marketcap")
      newCoins = [...coins].sort(
        (a, b) => Number(b.marketCapUsd) - Number(a.marketCapUsd)
      );

    if (event.target.value === "marketcap-reversed")
      newCoins = [...coins].sort(
        (a, b) => Number(a.marketCapUsd) - Number(b.marketCapUsd)
      );

    if (event.target.value === "volume")
      newCoins = [...coins].sort(
        (a, b) => Number(b.volumeUsd24Hr) - Number(a.volumeUsd24Hr)
      );

    if (event.target.value === "volume-reversed")
      newCoins = [...coins].sort(
        (a, b) => Number(a.volumeUsd24Hr) - Number(b.volumeUsd24Hr)
      );

    if (event.target.value === "change")
      newCoins = [...coins].sort(
        (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
      );

    if (event.target.value === "change-reversed")
      newCoins = [...coins].sort(
        (a, b) => Number(a.changePercent24Hr) - Number(b.changePercent24Hr)
      );

    setCoins(newCoins);
  }

  function handleFormatNumber(amount) {
    let newAmount = amount;
    if (amount > 1000000) newAmount = (amount / 1000000).toFixed(0) + "M";
    if (amount > 1000000000) newAmount = (amount / 1000000000).toFixed(0) + "B";
    if (amount > 1000000000000)
      newAmount = (amount / 1000000000000).toFixed(0) + "T";

    return newAmount;
  }

  const cryptoValue = {
    coinsList: coins,
    userWallet: [],
    formatList: handleFormatList,
    buyCoin: handleBuy,
    handleFormatNumber,
  };

  return (
    <CryptoContext.Provider value={cryptoValue}>
      {children}
    </CryptoContext.Provider>
  );
}
