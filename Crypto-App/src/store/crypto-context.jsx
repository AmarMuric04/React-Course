import { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext({
  _mainCoinsList: [],
  coinFilter: "",
  userWallet: [],
  showCryptoList: [],
  favoriteCryptos: [],
  isLoading: true,
  userAccount: {},
  addFavorite: () => {},
  handleSetFilters: () => {},
  handleFormatNumber: () => {},
  handlePreventDefault: () => {},
  handleShowCryptoList: () => {},
  handleCustomToFixed: () => {},
  handleGetRandomNumber: () => {},
  handleBuyCrypto: () => {},
  handleFilterCoins: () => {},
});

export default function CryptoContextProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [coinFilter, setCoinFilter] = useState("");
  const [favoriteCryptos, setFavoriteCryptos] = useState([]);
  const [showCryptoList, setShowCryptoList] = useState("main");
  const [isLoading, setIsLoading] = useState(true);
  const [userAccount, setUserAccount] = useState({
    firstName: "",
    lastName: "",
    balance: 150000000000,
    purchaseHistory: [],
    wallet: [],
  });

  useEffect(() => {
    async function fetchCrypto() {
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets?limit=20`
        );
        const data = await response.json();

        if (!response.ok) throw new Error("Something went wrong!");

        setCoins(data.data);

        setFavoriteCryptos((prevFavoriteCryptos) => {
          return prevFavoriteCryptos.map((favoriteCrypto) => {
            const favoritedCrypto = data.data.find(
              (coin) => coin.id === favoriteCrypto.id
            );

            return {
              ...favoritedCrypto,
            };
          });
        });

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCrypto();

    setInterval(() => {
      fetchCrypto();
    }, 5000);
  }, []);

  useEffect(() => {
    console.log(userAccount);
  }, [userAccount]);

  function handleBuyCrypto(coin, cashAmount, coinAmount) {
    const time = `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`;

    let alreadyBoughtCoin =
      userAccount &&
      userAccount.wallet.find(
        (purchasedCoin) => purchasedCoin.id === coin.coinId
      );

    if (!alreadyBoughtCoin)
      setUserAccount((prevUserAccount) => {
        return {
          ...prevUserAccount,
          balance: userAccount.balance - cashAmount,
          wallet: [
            ...userAccount.wallet,
            {
              id: coin.coinId,
              purchasedPrice: coin.coinValue,
              amountOfCoins: coinAmount,
              moneySpent: cashAmount,
              time: [time],
            },
          ],
          purchaseHistory: [
            ...userAccount.purchaseHistory,
            {
              id: coin.coinId,
              purchasedPrice: coin.coinValue,
              amountOfCoins: coinAmount,
              moneySpent: cashAmount,
              time: [time],
            },
          ],
        };
      });
    else {
      alreadyBoughtCoin.purchasedPrice =
        (alreadyBoughtCoin.purchasedPrice * alreadyBoughtCoin.amountOfCoins +
          coin.coinValue * coinAmount) /
        (alreadyBoughtCoin.amountOfCoins + coinAmount);
      alreadyBoughtCoin.amountOfCoins =
        alreadyBoughtCoin.amountOfCoins + coinAmount;
      alreadyBoughtCoin.moneySpent = alreadyBoughtCoin.moneySpent + cashAmount;
      alreadyBoughtCoin.time.push(time);

      const newWallet = [...userAccount.wallet];

      newWallet.forEach(
        (purchase) =>
          (purchase = purchase.id === coin.coinId && alreadyBoughtCoin)
      );

      const newPurchaseHistory = [
        ...userAccount.purchaseHistory,
        {
          id: coin.coinId,
          purchasedPrice: coin.coinValue,
          amountOfCoins: coinAmount,
          moneySpent: cashAmount,
          time: [time],
        },
      ];

      setUserAccount((prevUserAccount) => {
        return {
          ...prevUserAccount,
          balance: userAccount.balance - cashAmount,
          wallet: newWallet,
          purchaseHistory: newPurchaseHistory,
        };
      });
    }
  }

  function handleFavorite(coin) {
    const newFavoriteCryptos = [...favoriteCryptos];

    if (newFavoriteCryptos.includes(coin)) {
      newFavoriteCryptos.splice(
        newFavoriteCryptos.findIndex((el) => el === coin),
        1
      );
    } else newFavoriteCryptos.push(coin);

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

  function handleFilterCoins(filter, givenCoins) {
    let newCoins = [...givenCoins];

    if (filter === "rank") {
      newCoins = [...newCoins].sort((a, b) => Number(a.rank) - Number(b.rank));
    }

    if (filter === "rank-reversed")
      newCoins = [...newCoins].sort((a, b) => Number(b.rank) - Number(a.rank));

    if (filter === "cost")
      newCoins = [...newCoins].sort(
        (a, b) => Number(b.priceUsd) - Number(a.priceUsd)
      );

    if (filter === "cost-reversed")
      newCoins = [...newCoins].sort(
        (a, b) => Number(a.priceUsd) - Number(b.priceUsd)
      );

    if (filter === "marketcap")
      newCoins = [...newCoins].sort(
        (a, b) => Number(b.marketCapUsd) - Number(a.marketCapUsd)
      );

    if (filter === "marketcap-reversed")
      newCoins = [...newCoins].sort(
        (a, b) => Number(a.marketCapUsd) - Number(b.marketCapUsd)
      );

    if (filter === "volume")
      newCoins = [...newCoins].sort(
        (a, b) => Number(b.volumeUsd24Hr) - Number(a.volumeUsd24Hr)
      );

    if (filter === "volume-reversed")
      newCoins = [...newCoins].sort(
        (a, b) => Number(a.volumeUsd24Hr) - Number(b.volumeUsd24Hr)
      );

    if (filter === "change")
      newCoins = [...newCoins].sort(
        (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
      );

    if (filter === "change-reversed")
      newCoins = [...newCoins].sort(
        (a, b) => Number(a.changePercent24Hr) - Number(b.changePercent24Hr)
      );

    return newCoins;
  }

  function handleSetFilters(event) {
    setCoinFilter(event.target.value);
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
    userWallet: [],
    coinFilter,
    showCryptoList,
    favoriteCryptos,
    isLoading,
    userAccount,
    addFavorite: handleFavorite,
    handleSetFilters,
    handleFormatNumber,
    handlePreventDefault,
    handleShowCryptoList,
    handleFormatNumberWithCommas,
    handleCustomToFixed,
    handleGetRandomNumber,
    handleBuyCrypto,
    handleFilterCoins,
  };

  return (
    <CryptoContext.Provider value={cryptoValue}>
      {children}
    </CryptoContext.Provider>
  );
}
