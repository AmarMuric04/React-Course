import { convertToCurrency } from "../util/dataModifiers";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/redux";
import { miscActions } from "../redux/misc";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleIncrease = (product) => {
    dispatch(
      cartActions.increaseQuantity({
        item: product,
        quantityIncrease: 1,
      })
    );
    dispatch(miscActions.showNotification({ showing: true, clicked: true }));
  };
  const handleDecrease = (product) =>
    dispatch(cartActions.decreaseQuantity(product));
  const handleRemove = (product) =>
    dispatch(cartActions.removeFromCart(product));

  return (
    <tr
      key={product.id}
      className="flex py-4 w-full justify-between items-center border-t-2 border-zinc-200"
    >
      <td className="flex items-center overflow-hidden w-48">
        <img
          className="w-16 h-16 object-contain"
          src={product.images[0]}
          alt="Product"
        />
        <div className="w-full flex flex-col overflow-hidden">
          <p className="font-bold whitespace-nowrap truncate m-0">
            {product.title}
          </p>
          <p className="font-thin whitespace-nowrap truncate text-sm m-0">
            {product.returnPolicy}
          </p>
          <p className="font-thin whitespace-nowrap truncate text-xs m-0 italic">
            {product.shippingInformation}
          </p>
        </div>
      </td>
      <td className="flex gap-2 items-center">
        <button
          onClick={() => handleDecrease(product)}
          className="border-2 border-green-400 p-2 rounded-md hover:bg-zinc-200 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-dasharray="18"
              stroke-dashoffset="18"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 12H19"
              fill="currentColor"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="18;0"
              />
            </path>
          </svg>
        </button>
        <p className="m-0">{product.quantity}</p>
        <button
          onClick={() => handleIncrease(product)}
          className="p-2 text-white bg-green-400 border-2 rounded-md
                 border-green-400 hover:bg-green-700 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="18"
              stroke-dashoffset="18"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M12 5V19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.3s"
                  values="18;0"
                />
              </path>
              <path d="M5 12H19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="18;0"
                />
              </path>
            </g>
          </svg>
        </button>
      </td>
      <td>
        <button
          onClick={() => handleRemove(product)}
          className="border-2 border-red-400 bg-red-400 hover:bg-red-700 transition-all
               text-white p-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="22"
              stroke-dashoffset="22"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M19 5L5 19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.3s"
                  dur="0.3s"
                  values="22;0"
                />
              </path>
              <path d="M5 5L19 19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="22;0"
                />
              </path>
            </g>
          </svg>
        </button>
      </td>
      <td className="w-32 text-end">
        <p className="font-bold">{convertToCurrency(product.total)}</p>
      </td>
    </tr>
  );
}
