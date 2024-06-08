import { cartActions } from "../redux/redux";
import { convertToCurrency } from "../util/dataModifiers";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { miscActions } from "../redux/misc";

export default function CheckoutItem({ item }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(
      cartActions.increaseQuantity({
        item,
        quantityIncrease: 1,
      })
    );
    dispatch(miscActions.showNotification({ showing: true, clicked: true }));
  };
  const handleDecreaseQuantity = () =>
    dispatch(cartActions.decreaseQuantity(item));

  return (
    <li className="flex h-28 p-2 justify-between w-full" key={item.title}>
      <div className="flex items-center gap-2">
        <div className="h-full min-w-32">
          <img
            className="h-full w-full object-contain"
            src={item.images[0]}
            alt="Item"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="m-0 font-bold w-full truncate whitespace-nowrap">
            {item.title}
          </p>
          <Link
            className="no-underline w-full whitespace-nowrap italic text-xs text-black hover:underline"
            to={`/product/${item.id}`}
          >
            See details
          </Link>
          <div className="flex gap-2 items-center">
            <p className="m-0 text-sm text-zinc-400 w-14 overflow-hidden truncate whitespace-nowrap">
              Qty: {item.quantity}
            </p>
            <button
              onClick={handleIncreaseQuantity}
              className="bg-green-400 text-xs h-4 w-4 text-white grid
             place-items-center rounded-full hover:bg-green-600 transition-all"
            >
              +
            </button>
            <button
              onClick={handleDecreaseQuantity}
              className="bg-red-400 text-xs h-4 w-4 text-white grid 
            place-items-center rounded-full hover:bg-red-600 transition-all"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="m-0">{convertToCurrency(item.total)}</p>
        {item.quantity !== 1 && (
          <p className="m-0 text-xs text-zinc-400">
            {convertToCurrency(item.price)} each
          </p>
        )}
        <p className="text-xs m-0 text-zinc-400">
          {item.delivery === 0 ? "FREE" : convertToCurrency(item.delivery)}{" "}
          delivery
        </p>
      </div>
    </li>
  );
}
