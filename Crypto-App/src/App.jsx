import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [wallet, setWallet] = useState([]);

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

  function handleFormat(amount) {
    let newAmount = amount;
    if (amount > 1000000) newAmount = (amount / 1000000).toFixed(0) + "M";
    if (amount > 1000000000) newAmount = (amount / 1000000000).toFixed(0) + "B";
    if (amount > 1000000000000)
      newAmount = (amount / 1000000000000).toFixed(0) + "T";

    return newAmount;
  }

  useEffect(() => {
    async function fetchCrypto() {
      const response = await fetch(`https://api.coincap.io/v2/assets?limit=20`);
      const data = await response.json();

      setCoins(data.data);
    }

    fetchCrypto();
  });

  return (
    <main className="bg-stone-500 max-w-screen min-h-screen h-auto flex justify-center">
      <ul className="flex flex-col gap-3 mt-96">
        {coins.map((coin) => {
          const coinRank = coin.rank;
          const coinSymbol = coin.symbol;
          const coinName =
            coin.id.slice(0, 1).toUpperCase() +
            coin.id.slice(1, coin.id.length).replace("-", " ");
          const coinValue = Number(coin.priceUsd).toFixed(2);
          const coinMarketCap = handleFormat(
            Number(coin.marketCapUsd).toFixed(0)
          );

          return (
            <ul
              className="flex items-center bg-white py-8 text-2xl px-16 rounded-xl"
              key={coin.id}
            >
              <li className="w-32">Rank: {coinRank}</li>
              <li className="w-48">Coin: {coinSymbol}</li>
              <li className="w-72">Name: {coinName}</li>
              <li className="w-72">Current value: {coinValue}$</li>
              <li className="w-64">Market Cap: {coinMarketCap}$</li>
              <button
                className="bg-green-400 px-4 py-2 cursor-pointer text-white rounded-xl"
                onClick={() =>
                  handleBuy({
                    id: coin.id,
                    symbol: coin.symbol,
                    rank: coin.rank,
                    value: Number(coin.priceUsd).toFixed(2),
                    marketCap: Number(coin.marketCapUsd).toFixed(0),
                  })
                }
              >
                Buy
              </button>
            </ul>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
