import { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext({
  _mainCoinsList: [],
  coinFilter: "",
  userWallet: [],
  showCryptoList: [],
  isLoading: true,
  userAccount: {},
  loggedInAs: {},
  account: {},
  userAccounts: [],
  addFavorite: () => {},
  handleSetFilters: () => {},
  handleFormatNumber: () => {},
  handlePreventDefault: () => {},
  handleShowCryptoList: () => {},
  handleCustomToFixed: () => {},
  handleGetRandomNumber: () => {},
  handleBuyCrypto: () => {},
  handleFilterCoins: () => {},
  handleBuyCryptoGeneral: () => {},
  handleSellCryptoGeneral: () => {},
  handleSetUserAccounts: () => {},
  handleSetUserAccount: () => {},
  handleLogOut: () => {},
});

export default function CryptoContextProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [coinFilter, setCoinFilter] = useState("");
  const [showCryptoList, setShowCryptoList] = useState("main");
  const [isLoading, setIsLoading] = useState(true);
  const [userAccounts, setUserAccounts] = useState([]);
  const [userAccount, setUserAccount] = useState(null);

  useEffect(() => {
    async function fetchCrypto() {
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets?limit=20`
        );
        const data = await response.json();

        if (!response.ok) throw new Error("Something went wrong!");

        setCoins(data.data);

        setUserAccount((prevUserAccount) => {
          if (!prevUserAccount) return prevUserAccount;

          localStorage.setItem(
            "Blajvinance-Logged-In-As",
            JSON.stringify(prevUserAccount)
          );

          const newUserAccounts = JSON.parse(
            localStorage.getItem("Blajvinance-User-Accounts")
          ).map((account) =>
            account.email === prevUserAccount.email ? prevUserAccount : account
          );

          localStorage.setItem(
            "Blajvinance-User-Accounts",
            JSON.stringify(newUserAccounts)
          );
          setUserAccounts(newUserAccounts);

          const updatedFavoriteCryptos = prevUserAccount.favoritedCryptos.map(
            (favoriteCrypto) => {
              const favoritedCrypto = data.data.find(
                (coin) => coin.id === favoriteCrypto.id
              );
              return { ...favoritedCrypto };
            }
          );

          return {
            ...prevUserAccount,
            favoritedCryptos: updatedFavoriteCryptos,
          };
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
    const alreadyLoggedIn = JSON.parse(
      localStorage.getItem("Blajvinance-Logged-In-As")
    );

    const accounts = JSON.parse(
      localStorage.getItem("Blajvinance-User-Accounts")
    );

    if (alreadyLoggedIn) {
      setUserAccount(alreadyLoggedIn);
    }

    if (accounts && accounts.length > 0) setUserAccounts(accounts);
  }, []);

  function handleSetUserAccounts(userAccounts) {
    setUserAccounts(userAccounts);
  }

  function handleLogOut() {
    setUserAccount(null);

    localStorage.setItem("Blajvinance-Logged-In-As", JSON.stringify(null));
  }

  function handleSetUserAccount(userAccount) {
    setUserAccount(userAccount);
  }

  function handleSellCryptoGeneral(coin, amount) {
    const date = `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`;

    const time = `${new Date().getHours()}:${new Date().getMinutes()}`;

    const coinToRemoveId = coin.id;
    const coinToRemoveValue = Number(coin.priceUsd);

    let coinToRemove = userAccount.wallet.find(
      (purchasedCoin) => purchasedCoin.id === coinToRemoveId
    );

    coinToRemove.amountOfCoins = coinToRemove.amountOfCoins - amount;
    coinToRemove.moneySpent =
      Number(coinToRemove.purchasedPrice) * Number(coinToRemove.amountOfCoins);

    const newWallet = userAccount.wallet;

    newWallet.forEach(
      (coin) => (coin = coin.id === coinToRemoveId && coinToRemove)
    );

    if (coinToRemove.amountOfCoins <= 0.000000001)
      newWallet.splice(
        newWallet.findIndex((coin) => coin.id === coinToRemoveId),
        1
      );

    const percentageChange = Number(
      handleCustomToFixed(
        ((coin.priceUsd - coinToRemove.purchasedPrice) /
          coinToRemove.purchasedPrice) *
          100
      )
    );

    const newPurchaseHistory = [
      {
        type: "SOLD",
        first: coin.id,
        price: coinToRemoveValue,
        priceSecond: coin.priceUsd,
        amountOfCoins: amount,
        second: "CASH",
        percentageChange,
        moneyChange: Number(amount) * Number(coinToRemoveValue),
        date: date,
        time: time,
      },
      ...userAccount.purchaseHistory,
    ];

    setUserAccount((prevUserAccount) => {
      return {
        ...prevUserAccount,
        balance: userAccount.balance + coinToRemoveValue * amount,
        wallet: newWallet,
        purchaseHistory: newPurchaseHistory,
      };
    });

    localStorage.setItem(
      "Blajvinance-Logged-In-As",
      JSON.stringify(userAccount)
    );

    const newUserAccounts = JSON.parse(
      localStorage.getItem("Blajvinance-User-Accounts")
    ).forEach(
      (account) =>
        (account = account.email === userAccount.email ? userAccount : account)
    );

    setUserAccounts(newUserAccounts);
  }

  function handleBuyCryptoGeneral(
    firstCoin,
    secondCoin,
    quantityFirst,
    quantitySecond
  ) {
    if (firstCoin === "cash") {
      const coinId = secondCoin.id;
      const coinValue = Number(secondCoin.priceUsd);

      handleBuyCrypto({ coinId, coinValue }, quantityFirst, quantitySecond);
    } else {
      const date = `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`;

      const time = `${new Date().getHours()}:${new Date().getMinutes()}`;

      const coinToRemoveId = firstCoin.id;
      const coinToRemoveValue = Number(firstCoin.priceUsd);

      let coinToRemove = userAccount.wallet.find(
        (purchasedCoin) => purchasedCoin.id === coinToRemoveId
      );

      coinToRemove.amountOfCoins = coinToRemove.amountOfCoins - quantityFirst;
      coinToRemove.moneySpent =
        Number(coinToRemove.purchasedPrice) *
        Number(coinToRemove.amountOfCoins);

      const newWallet = userAccount.wallet;

      newWallet.forEach(
        (coin) => (coin = coin.id === coinToRemoveId && coinToRemove)
      );

      if (coinToRemove.amountOfCoins <= 0.000000001)
        newWallet.splice(
          newWallet.findIndex((coin) => coin.id === coinToRemoveId),
          1
        );

      setUserAccount((prevUserAccount) => {
        return {
          ...prevUserAccount,
          balance: userAccount.balance,
          wallet: newWallet,
          purchaseHistory: userAccount.purchaseHistory,
        };
      });

      localStorage.setItem(
        "Blajvinance-Logged-In-As",
        JSON.stringify(userAccount)
      );

      const newUserAccounts = JSON.parse(
        localStorage.getItem("Blajvinance-User-Accounts")
      ).forEach(
        (account) =>
          (account =
            account.email === userAccount.email ? userAccount : account)
      );

      setUserAccounts(newUserAccounts);

      const coinToAddId = secondCoin.id;
      const coinToAddValue = Number(secondCoin.priceUsd);

      let coinToAdd = userAccount.wallet.find(
        (purchasedCoin) => purchasedCoin.id === coinToAddId
      );

      if (!coinToAdd) {
        setUserAccount((prevUserAccount) => {
          return {
            ...prevUserAccount,
            balance: userAccount.balance,
            wallet: [
              ...userAccount.wallet,
              {
                id: coinToAddId,
                purchasedPrice: coinToAddValue,
                amountOfCoins: quantitySecond,
                moneySpent: Number(quantitySecond) * Number(coinToAddValue),
                date: date,
                time: time,
              },
            ],
            purchaseHistory: [
              {
                second: coinToAddId,
                type: "TRADED",
                price: coinToAddValue,
                priceSecond: firstCoin.priceUsd,
                amountOfCoins: quantitySecond,
                first: firstCoin.id,
                moneyChange: quantityFirst,
                date: date,
                time: time,
              },
              ...userAccount.purchaseHistory,
            ],
          };
        });
        localStorage.setItem(
          "Blajvinance-Logged-In-As",
          JSON.stringify(userAccount)
        );

        const newUserAccounts = JSON.parse(
          localStorage.getItem("Blajvinance-User-Accounts")
        ).forEach(
          (account) =>
            (account =
              account.email === userAccount.email ? userAccount : account)
        );

        setUserAccounts(newUserAccounts);
      } else {
        coinToAdd.amountOfCoins = coinToAdd.amountOfCoins + quantitySecond;
        coinToAdd.moneySpent =
          Number(coinToRemove.amountOfCoins) *
          Number(coinToRemove.purchasedPrice);

        const newWallet = [...userAccount.wallet];

        newWallet.forEach(
          (coin) => (coin = coin.id === coinToAddId && coinToAdd)
        );

        setUserAccount((prevUserAccount) => {
          return {
            ...prevUserAccount,
            balance: userAccount.balance,
            wallet: newWallet,
            purchaseHistory: [
              {
                second: coinToAddId,
                type: "TRADED",
                price: coinToAddValue,
                priceSecond: firstCoin.priceUsd,
                amountOfCoins: quantitySecond,
                first: firstCoin.id,
                moneyChange: quantityFirst,
                date: date,
                time: time,
              },
              ...userAccount.purchaseHistory,
            ],
          };
        });
        localStorage.setItem(
          "Blajvinance-Logged-In-As",
          JSON.stringify(userAccount)
        );

        const newUserAccounts = JSON.parse(
          localStorage.getItem("Blajvinance-User-Accounts")
        ).forEach(
          (account) =>
            (account =
              account.email === userAccount.email ? userAccount : account)
        );

        setUserAccounts(newUserAccounts);
      }
    }
  }

  function handleBuyCrypto(coin, cashAmount, coinAmount) {
    const date = `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`;

    const time = `${new Date().getHours()}:${new Date().getMinutes()}`;

    let alreadyBoughtCoin =
      userAccount &&
      userAccount.wallet.find(
        (purchasedCoin) => purchasedCoin.id === coin.coinId
      );

    if (!alreadyBoughtCoin) {
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
              date: [date],
            },
          ],
          purchaseHistory: [
            {
              second: coin.coinId,
              type: "BOUGHT",
              price: coin.coinValue,
              amountOfCoins: coinAmount,
              moneyChange: cashAmount,
              first: "CASH",
              date: date,
              time: time,
            },
            ...userAccount.purchaseHistory,
          ],
        };
      });

      localStorage.setItem(
        "Blajvinance-Logged-In-As",
        JSON.stringify(userAccount)
      );

      const newUserAccounts = JSON.parse(
        localStorage.getItem("Blajvinance-User-Accounts")
      ).forEach(
        (account) =>
          (account =
            account.email === userAccount.email ? userAccount : account)
      );

      setUserAccounts(newUserAccounts);
    } else {
      alreadyBoughtCoin.purchasedPrice =
        (alreadyBoughtCoin.purchasedPrice * alreadyBoughtCoin.amountOfCoins +
          coin.coinValue * coinAmount) /
        (alreadyBoughtCoin.amountOfCoins + coinAmount);
      alreadyBoughtCoin.amountOfCoins =
        alreadyBoughtCoin.amountOfCoins + coinAmount;
      alreadyBoughtCoin.moneySpent = alreadyBoughtCoin.moneySpent + cashAmount;
      alreadyBoughtCoin.date.push(date);

      const newWallet = [...userAccount.wallet];

      newWallet.forEach(
        (purchase) =>
          (purchase = purchase.id === coin.coinId && alreadyBoughtCoin)
      );

      const newPurchaseHistory = [
        {
          second: coin.coinId,
          type: "BOUGHT",
          price: coin.coinValue,
          amountOfCoins: coinAmount,
          moneyChange: cashAmount,
          first: "CASH",
          date: date,
          time: time,
        },
        ...userAccount.purchaseHistory,
      ];

      setUserAccount((prevUserAccount) => {
        return {
          ...prevUserAccount,
          balance: userAccount.balance - cashAmount,
          wallet: newWallet,
          purchaseHistory: newPurchaseHistory,
        };
      });

      localStorage.setItem(
        "Blajvinance-Logged-In-As",
        JSON.stringify(userAccount)
      );

      const newUserAccounts = JSON.parse(
        localStorage.getItem("Blajvinance-User-Accounts")
      ).forEach(
        (account) =>
          (account =
            account.email === userAccount.email ? userAccount : account)
      );

      setUserAccounts(newUserAccounts);
    }
  }

  function handleFavorite(coin) {
    const newFavoriteCryptos = [...userAccount.favoritedCryptos];

    if (newFavoriteCryptos.some((favorite) => favorite.id === coin.id)) {
      newFavoriteCryptos.splice(
        newFavoriteCryptos.findIndex((el) => el.id === coin.id),
        1
      );
    } else newFavoriteCryptos.push(coin);

    setUserAccount((prevUserAccount) => {
      return {
        ...prevUserAccount,
        favoritedCryptos: newFavoriteCryptos,
      };
    });

    localStorage.setItem(
      "Blajvinance-Logged-In-As",
      JSON.stringify(userAccount)
    );

    const newUserAccounts = JSON.parse(
      localStorage.getItem("Blajvinance-User-Accounts")
    ).forEach(
      (account) =>
        (account = account.email === userAccount.email ? userAccount : account)
    );

    setUserAccounts(newUserAccounts);
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

    if (amount > 1000) newAmount = (amount / 1000).toFixed(2) + "K";
    if (amount > 1000000) newAmount = (amount / 1000000).toFixed(2) + "M";
    if (amount > 1000000000) newAmount = (amount / 1000000000).toFixed(2) + "B";
    if (amount > 1000000000000)
      newAmount = (amount / 1000000000000).toFixed(2) + "T";

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
    isLoading,
    userAccount,
    userAccounts,
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
    handleBuyCryptoGeneral,
    handleSellCryptoGeneral,
    handleSetUserAccount,
    handleSetUserAccounts,
    handleLogOut,
  };

  return (
    <CryptoContext.Provider value={cryptoValue}>
      {children}
    </CryptoContext.Provider>
  );
}
