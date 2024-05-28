import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../assets/icons";
import { convertToCurrency } from "../util/dataModifiers";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);

  console.log(cart);

  const [cartIsShowing, setCartIsShowing] = useState(false);

  const handleToggleCart = () => setCartIsShowing(!cartIsShowing);

  useEffect(() => {
    const toggleBodyScroll = (disable) => {
      if (disable) {
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
      } else {
        document.body.style.overflow = "";
      }
    };

    toggleBodyScroll(cartIsShowing);

    return () => {
      document.body.style.overflow = "";
    };
  }, [cartIsShowing]);
  return (
    <main className="relative">
      <div
        onClick={handleToggleCart}
        className="flex items-center h-full relative cursor-pointer"
      >
        <CartIcon />
        <p
          className="z-50 absolute top-4 right-[-0.3rem] bg-red-400 rounded-full text-white
          px-1 text-xs font-bold"
        >
          {cart.reduce(
            (accumulator, currValue) => accumulator + currValue.quantity,
            0
          )}
        </p>
      </div>
      {cartIsShowing && (
        <div
          className="z-10 absolute top-[-1rem] left-[-2rem]
         w-screen h-screen bg-black opacity-50"
        ></div>
      )}

      <div
        className={`z-20 text-black pt-16 absolute top-[-1rem] left-[-1.2rem]
         bg-white shadow-xl transition-all overflow-hidden  ${
           !cartIsShowing
             ? "rounded-full opacity-0 rounded-tl-none h-0 w-0"
             : "rounded-none opacity-100 h-[50rem] w-[40rem]"
         }`}
      >
        <table className="w-full">
          <tr className="flex justify-between">
            <th className="w-48">Description</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th className="w-32 text-end">Price</th>
          </tr>
          {cart.map((product) => (
            <tr
              key={product.id}
              className="flex w-full justify-between items-center"
            >
              <td className="flex items-center overflow-hidden w-48">
                <img
                  className="w-16 h-16 object-contain"
                  src={product.image}
                  alt="Product"
                />
                <p className="font-bold whitespace-nowrap truncate">
                  {product.title}
                </p>
              </td>
              <td className="flex gap-2 items-center">
                <button className="border-2 border-green-400 p-2 rounded-md">
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
                <p>{product.quantity}</p>
                <button
                  className="p-2 text-white bg-green-400 border-2 rounded-md
                 border-green-400"
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
              <td className="border-2 border-red-400 bg-red-400 text-white p-2 rounded-md">
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
              </td>
              <td className="w-32 text-end">
                <p>{convertToCurrency(product.total)}</p>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </main>
  );
}
