import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";

export default function MyHoldings() {
  const { handleCustomToFixed, userAccount, _mainCoinsList } =
    useContext(CryptoContext);

  return (
    <div className="bg-[#1A1C22ff] md:min-w-72 w-96 h-64 rounded-xl p-8">
      <h1 className="flex font-bold items-center gap-2">
        My Holdings
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-opacity="0"
            d="M6 8L12 3L18 8V20H16V13L15 12H9L8 13V20H6V8Z"
          >
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.9s"
              dur="0.15s"
              values="0;0.3"
            />
          </path>
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path stroke-dasharray="21" stroke-dashoffset="21" d="M5 21H19">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.2s"
                values="21;0"
              />
            </path>
            <path
              stroke-dasharray="15"
              stroke-dashoffset="15"
              d="M5 21V8M19 21V8"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.2s"
                dur="0.2s"
                values="15;0"
              />
            </path>
            <path
              stroke-dasharray="24"
              stroke-dashoffset="24"
              d="M9 21V13H15V21"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.4s"
                dur="0.4s"
                values="24;0"
              />
            </path>
            <path
              stroke-dasharray="26"
              stroke-dashoffset="26"
              d="M2 10L12 2L22 10"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.5s"
                dur="0.4s"
                values="26;0"
              />
            </path>
          </g>
        </svg>
      </h1>
      <div className="flex flex-col border-b-[0.1rem] border-black py-4">
        <p className="uppercase tracking-[0.1rem] font-bold flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M1 4.25C1 3.56 1.56 3 2.25 3h9.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-9.5C1.56 11 1 10.44 1 9.75zm3 .25V4H3v.5a.5.5 0 0 1-.5.5H2v1h.5A1.5 1.5 0 0 0 4 4.5M9 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m2-3h-1v.5A1.5 1.5 0 0 0 11.5 6h.5V5h-.5a.5.5 0 0 1-.5-.5zM4 9.5A1.5 1.5 0 0 0 2.5 8H2v1h.5a.5.5 0 0 1 .5.5v.5h1zm7 .5v-.5a.5.5 0 0 1 .5-.5h.5V8h-.5A1.5 1.5 0 0 0 10 9.5v.5zm-6.5 3a1.5 1.5 0 0 1-1.427-1.036Q3.281 12 3.5 12h8.25A2.25 2.25 0 0 0 14 9.75V5.085A1.5 1.5 0 0 1 15 6.5v3.25A3.25 3.25 0 0 1 11.75 13z"
            />
          </svg>{" "}
          In cash
        </p>
        <p className="tracking-[0.1rem] text-gray-400">
          $ {userAccount ? handleCustomToFixed(userAccount.balance) : "*****"}
        </p>
      </div>
      <div className="py-4">
        <p className="uppercase tracking-[0.1rem] font-bold flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.24 10.56c-.31 1.24-2.24.61-2.84.44l.55-2.18c.62.18 2.61.44 2.29 1.74m-3.11 1.56l-.6 2.41c.74.19 3.03.92 3.37-.44c.36-1.42-2.03-1.79-2.77-1.97m10.57 2.3c-1.34 5.36-6.76 8.62-12.12 7.28S.963 14.94 2.3 9.58A9.996 9.996 0 0 1 14.42 2.3c5.35 1.34 8.61 6.76 7.28 12.12m-7.49-6.37l.45-1.8l-1.1-.25l-.44 1.73c-.29-.07-.58-.14-.88-.2l.44-1.77l-1.09-.26l-.45 1.79c-.24-.06-.48-.11-.7-.17l-1.51-.38l-.3 1.17s.82.19.8.2c.45.11.53.39.51.64l-1.23 4.93c-.05.14-.21.32-.5.27c.01.01-.8-.2-.8-.2L6.87 15l1.42.36c.27.07.53.14.79.2l-.46 1.82l1.1.28l.45-1.81c.3.08.59.15.87.23l-.45 1.79l1.1.28l.46-1.82c1.85.35 3.27.21 3.85-1.48c.5-1.35 0-2.15-1-2.66c.72-.19 1.26-.64 1.41-1.62c.2-1.33-.82-2.04-2.2-2.52"
            />
          </svg>{" "}
          In crypto
        </p>
        <p className="tracking-[0.1rem] text-gray-400">
          ${" "}
          {userAccount
            ? handleCustomToFixed(
                Number(
                  userAccount.wallet.reduce((accumulator, currentValue) => {
                    return accumulator + Number(currentValue.moneySpent);
                  }, 0)
                )
              )
            : "*****"}
        </p>
        <p className="tracking-[0.1rem] text-gray-700 text-sm">
          ${" "}
          {userAccount
            ? handleCustomToFixed(
                Number(
                  userAccount.wallet.reduce((accumulator, currentValue) => {
                    const coin = _mainCoinsList.find(
                      (coin) => coin.id === currentValue.id
                    );
                    return (
                      accumulator +
                      Number(currentValue.amountOfCoins) * Number(coin.priceUsd)
                    );
                  }, 0)
                )
              )
            : "*****"}
        </p>
      </div>
    </div>
  );
}
