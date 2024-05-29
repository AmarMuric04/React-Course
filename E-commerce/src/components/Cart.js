import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../assets/icons";
import CartItems from "./CartItems";
import { convertToCurrency } from "../util/dataModifiers";
import { discounts } from "../util/discounts";
import CartEmpty from "../assets/cart-empty.png";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);

  const [cartIsShowing, setCartIsShowing] = useState(false);
  const [discount, setDiscount] = useState("");

  const discountInput = useRef();

  const handleToggleCart = () => setCartIsShowing(!cartIsShowing);
  const handleChangeDiscount = () => setDiscount(discountInput.current.value);

  const subtotalPrice = cart.reduce(
    (accumulator, currValue) => accumulator + currValue.total,
    0
  );

  const delivery = cart.reduce(
    (accumulator, currValue) => accumulator + currValue.delivery,
    0
  );

  let discountAmount = 0;
  let discountPercentage =
    Object.values(discounts)[
      Object.keys(discounts).findIndex((el) => el === discount)
    ];

  if (Object.keys(discounts).includes(discount))
    discountAmount = (subtotalPrice * discountPercentage) / 100;

  const totalPrice = subtotalPrice + delivery - discountAmount;

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
        onClick={handleToggleCart}
        className={`z-20 text-black p-8 pt-16 absolute top-[-1rem]
         left-[-1.2rem] bg-white shadow-xl transition-all scrollbar ${
           !cartIsShowing
             ? "rounded-full opacity-0 rounded-tl-none h-0 w-0 overflow-hidden "
             : "rounded-none opacity-100 h-[50rem] w-[40rem] shadow-xl overflow-auto"
         }`}
      >
        {cart.length === 0 ? (
          <div className="flex flex-col items-center text-center mt-32">
            <img
              className="w-32 h-32 object-contain"
              src={CartEmpty}
              alt="Empty cart"
            />
            <p className="font-bold">Your cart is empty!</p>
            <p className="w-2/5">
              Looks like you have not added anything to your cart. Go ahead &
              explore top categories.
            </p>
          </div>
        ) : (
          <Fragment>
            <CartItems />
            <section
              className="flex gap-5 justify-around border-t-2 
        border-zinc-200 py-4"
            >
              <div className="w-1/2 flex flex-col gap-5">
                <div
                  className="px-3 py-4 border-2 border-zinc-200 rounded-md flex
          justify-between items-center"
                >
                  <p className="text-sm">Discount:</p>
                  <p className="font-bold flex gap-2 items-center">
                    {convertToCurrency(discountAmount)}
                    {discountPercentage && (
                      <p className="text-gray-400 text-xs font-thin">
                        ( {discountPercentage}% )
                      </p>
                    )}
                  </p>
                </div>
                <div
                  className="px-3 py-4 border-2 border-zinc-200 rounded-md flex
          justify-between items-center"
                >
                  <p className="text-sm">Delivery:</p>
                  <p className="font-bold">
                    {delivery < 1 ? "FREE" : convertToCurrency(delivery)}
                  </p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-5">
                <div
                  className="px-3 py-4 border-2 border-zinc-200 rounded-md flex
          justify-between items-center"
                >
                  <p className="text-sm">Subtotal:</p>
                  <p className="font-bold">
                    {convertToCurrency(subtotalPrice)}
                  </p>
                </div>
                <div
                  className="px-3 py-4 border-2 border-zinc-200 rounded-md flex
          justify-between items-center"
                >
                  <p className="text-sm">Total:</p>
                  <p className="font-bold">{convertToCurrency(totalPrice)}</p>
                </div>
              </div>
            </section>
            <section className="flex flex-col">
              <p className="p-4 text-sm text-gray-400">
                If you have a promotion code, please enter it here:
              </p>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <input
                    ref={discountInput}
                    className="border-2 border-zinc-200 py-[0.5rem] px-4"
                    type="text"
                    placeholder="Discount..."
                  />
                  <button
                    onClick={handleChangeDiscount}
                    className="bg-green-400 border-2
               border-green-400 text-white py-2 px-4 hover:bg-green-700 transition-all"
                  >
                    Apply Discount
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="bg-green-400 border-2 border-green-400 px-4 py-2 text-white
              hover:bg-green-700 transition-all"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={handleToggleCart}
                    className="border-2 border-green-400 hover:bg-zinc-200 transition-all px-4 py-2"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </section>
          </Fragment>
        )}
      </div>
    </main>
  );
}
