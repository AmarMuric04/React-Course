import Table from "../../../Single Components/Table";
import TableRow from "../../../Single Components/TableRow";
import TableColumn from "../../../Single Components/TableColumn";
import { useContext } from "react";
import { CryptoContext } from "../../../../store/crypto-context";

export default function CryptoInfoTable({ coin }) {
  const { handleCustomToFixed } = useContext(CryptoContext);

  return (
    <Table>
      <thead className="bg-stone-800 text-white text-sm">
        <TableRow>
          <TableColumn classes="px-4 py-4 text-start w-[33%] lg:w-[45%]">
            Date comparison
          </TableColumn>
          <TableColumn classes=" text-center lg:text-start px-4 py-4 text-start w-[33%] lg:w-[40%]">
            Amount change
          </TableColumn>
          <TableColumn classes=" text-end lg:text-start  px-4 py-4 text-start w-[33%] lg:w-[15%]">
            % Change
          </TableColumn>
        </TableRow>
      </thead>
      <tbody>
        <TableRow classes="bg-[#23272Eff] text-white">
          <TableColumn classes="px-4 py-2">Today</TableColumn>
          <TableColumn
            classes={`px-4 py-2 text-center lg:text-start  ${
              handleCustomToFixed(
                Number(coin.coinValue * Number(coin.changeInLast24Hours / 1000))
              ) > 0
                ? "text-green-400 font-bold"
                : "text-red-400"
            }`}
          >
            ${" "}
            {handleCustomToFixed(
              Number(coin.coinValue) * Number(coin.changeInLast24Hours / 100)
            )}
          </TableColumn>
          <TableColumn
            classes={`px-4 text-end lg:text-start py-2 ${
              handleCustomToFixed(
                Number(coin.coinValue * Number(coin.changeInLast24Hours / 1000))
              ) > 0
                ? "text-green-400 font-bold"
                : "text-red-400"
            }`}
          >
            {coin.changeInLast24Hours > 0 && `+${coin.changeInLast24Hours}`}{" "}
            {coin.changeInLast24Hours < 0 && coin.changeInLast24Hours}%
          </TableColumn>
        </TableRow>
        <TableRow classes="bg-[#23272Eff] text-white">
          <TableColumn classes="px-4 py-2">30 Days</TableColumn>
          <TableColumn
            classes={`px-4 py-2 text-center lg:text-start ${
              Number(
                coin.coinValue * Number((-coin.changeInLast24Hours + 2) / 100)
              ) > 0
                ? "text-green-400 font-bold"
                : "text-red-400"
            }`}
          >
            ${" "}
            {handleCustomToFixed(
              Number(coin.coinValue) *
                Number((-coin.changeInLast24Hours + 2) / 100)
            )}
          </TableColumn>
          <TableColumn
            classes={`px-4 py-2  text-end lg:text-start ${
              Number(coin.coinValue) *
                Number((-coin.changeInLast24Hours + 2) / 100) >
              0
                ? "text-green-400 font-bold"
                : "text-red-400"
            }`}
          >
            {-coin.changeInLast24Hours + 2 > 0 &&
              `+${handleCustomToFixed(
                Number(-coin.changeInLast24Hours + 2)
              )}`}{" "}
            {-coin.changeInLast24Hours + 2 < 0 &&
              handleCustomToFixed(Number(-coin.changeInLast24Hours + 2))}
            %
          </TableColumn>
        </TableRow>
        <TableRow classes="bg-[#23272Eff] text-white">
          <TableColumn classes="px-4 py-2">60 Days</TableColumn>
          <TableColumn
            classes={`px-4 py-2 text-center lg:text-start   ${
              Number(
                coin.coinValue * Number((-coin.changeInLast24Hours - 1) / 100)
              ) > 0
                ? "text-green-400 font-bold"
                : "text-red-400"
            }`}
          >
            ${" "}
            {handleCustomToFixed(
              Number(coin.coinValue) *
                Number((-coin.changeInLast24Hours - 1) / 100)
            )}
          </TableColumn>
          <TableColumn
            classes={`px-4 py-2  text-end lg:text-start  ${
              Number(coin.coinValue) *
                Number((-coin.changeInLast24Hours - 1) / 100) >
              0
                ? "text-green-400 font-bold"
                : "text-red-400"
            }`}
          >
            {-coin.changeInLast24Hours + -1 > 0 &&
              `+${handleCustomToFixed(-coin.changeInLast24Hours - 1)}`}{" "}
            {-coin.changeInLast24Hours - 1 < 0 &&
              handleCustomToFixed(-coin.changeInLast24Hours - 1)}
            %
          </TableColumn>
        </TableRow>
        <TableRow classes="bg-[#23272Eff] text-white">
          <TableColumn classes="px-4 py-2">90 Days</TableColumn>
          <TableColumn
            classes={`px-4 py-2  text-center lg:text-start ${
              Number(
                coin.coinValue * Number((coin.changeInLast24Hours * 7) / 100)
              ) > 0
                ? "text-green-400 font-bold"
                : "text-red-400"
            }`}
          >
            ${" "}
            {handleCustomToFixed(
              Number(coin.coinValue) *
                Number((coin.changeInLast24Hours * 7) / 100)
            )}
          </TableColumn>
          <TableColumn
            classes={`px-4 py-2  text-end lg:text-start ${
              Number(coin.coinValue) *
                Number((coin.changeInLast24Hours * 7) / 100) >
              0
                ? "text-green-400 font-bold"
                : "text-red-400"
            }`}
          >
            {coin.changeInLast24Hours * 7 > 0 &&
              `+${handleCustomToFixed(coin.changeInLast24Hours * 7)}`}{" "}
            {coin.changeInLast24Hours * 7 < 0 &&
              handleCustomToFixed(coin.changeInLast24Hours * 7)}
            %
          </TableColumn>
        </TableRow>
      </tbody>
    </Table>
  );
}
