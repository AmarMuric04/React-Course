import { NavLink, Link, Form, redirect } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { convertToCurrency } from "../util/dataModifiers";
import CheckoutItem from "../components/CheckoutItem";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { discounts } from "../util/discounts";
import { useRef } from "react";
import store, { cartActions, replaceCart } from "../redux/redux";
import { countries } from "../util/countries";
import { miscActions } from "../redux/misc";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart.items);
  const discount = useSelector((state) => state.cart.discount);

  const dispatch = useDispatch();
  const discountInput = useRef();

  const handleChangeDiscount = (event) => {
    event.preventDefault();
    dispatch(cartActions.putDiscount(discountInput.current.value));
  };

  const subTotalPrice = cart.reduce(
    (accumulator, currValue) => accumulator + currValue.total,
    0
  );

  const totalDelivery = cart.reduce(
    (accumulator, currValue) => accumulator + currValue.delivery,
    0
  );

  let discountAmount = 0;
  let discountPercentage =
    Object.values(discounts)[
      Object.keys(discounts).findIndex((el) => el === discount)
    ];

  if (Object.keys(discounts).includes(discount))
    discountAmount = (subTotalPrice * discountPercentage) / 100;

  const totalPrice = subTotalPrice + totalDelivery - discountAmount;

  return (
    <main className="w-full h-screen flex justify-center items-center poppins">
      <div className="w-3/5 h-full">
        <section className="h-[10%] flex gap-2 justify-start w-full text-xs my-8 px-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `no-underline uppercase ${
                isActive ? "text-green-400 font-bold" : " text-zinc-300"
              }`
            }
            end
          >
            Home
          </NavLink>
          <span> - </span>
          <NavLink
            to={"/store/page/1"}
            className={({ isActive }) =>
              `no-underline uppercase ${
                isActive ? "text-green-400 font-bold" : " text-zinc-300"
              }`
            }
          >
            Store
          </NavLink>
          <span> - </span>
          <NavLink
            to={"/checkout"}
            className={({ isActive }) =>
              `no-underline uppercase ${
                isActive ? "text-green-400 font-bold" : " text-zinc-300"
              }`
            }
          >
            Checkout
          </NavLink>
        </section>
        <main className="h-[70%] w-full flex">
          <section className="w-1/2">
            <div className="flex gap-2 items-center">
              <Link to="..">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  className="text-green-400"
                >
                  <path
                    fill="currentColor"
                    d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"
                  />
                </svg>
              </Link>
              <img className="h-8" src={Logo} alt="Logo" />
              <p className="m-0 text-green-400 uppercase tracking-[0.1rem]">
                Shopping
              </p>

              <p
                className="m-0 text-white bg-green px-2 py-1 rounded-md
              bg-green-200 uppercase tracking-[0.1rem] hover:bg-green-400 transition-all
              cursor-default"
              >
                Checkout
              </p>
            </div>
            <div className="flex justify-between items-end my-4">
              <div>
                <p className="m-0 text-zinc-400 text-sm">Total price:</p>
                <p className="text-4xl m-0">{convertToCurrency(totalPrice)}</p>
              </div>
              {cart.length !== 0 && (
                <div>
                  <p className="m-0 text-xs text-zinc-400">
                    Got a discount? Use it!
                  </p>
                  <form onSubmit={handleChangeDiscount} className="flex">
                    <input
                      className="py-1 px-2 outline-none"
                      ref={discountInput}
                      defaultValue={discount}
                      type="text"
                      placeholder="Discount..."
                    />
                    <button
                      onClick={handleChangeDiscount}
                      className="bg-green-400 text-white border-2 border-green-400
                hover:bg-green-600 transition-all px-2 py-1 rounded-md"
                    >
                      Apply
                    </button>
                  </form>
                </div>
              )}
            </div>
            <div className="max-h-screen h-3/5 overflow-auto custom-scrollbar">
              <ul className="flex flex-col p-0 m-0">
                {cart.map((item) => (
                  <CheckoutItem item={item} />
                ))}
              </ul>
            </div>
            {cart.length !== 0 && (
              <div className="flex flex-col gap-2 w-full pl-28 text-sm">
                <div className="w-full shadow-md px-2 rounded-lg mt-4">
                  <div className="flex justify-between border-b-[0.1rem] border-zinc-200 py-2">
                    <p className="m-0">Subtotal: </p>
                    <p className="m-0">{convertToCurrency(subTotalPrice)}</p>
                  </div>
                  {totalDelivery !== 0 && (
                    <div
                      className="flex justify-between text-zinc-400 border-b-[0.1rem]
              border-zinc-200 py-2 transition-all"
                    >
                      <p className="m-0">Delivery: </p>
                      <p className="m-0">{convertToCurrency(totalDelivery)}</p>
                    </div>
                  )}
                  {discountAmount !== 0 && (
                    <div
                      className="flex justify-between text-zinc-400 border-b-[0.1rem]
              border-zinc-200 py-2 transition-all"
                    >
                      <p className="text-sm m-0">Discount:</p>
                      <p className="flex gap-2 items-center m-0">
                        <p className="text-zinc-400 text-xs m-0">
                          ( {discountPercentage}% )
                        </p>
                        {convertToCurrency(discountAmount)}
                      </p>
                    </div>
                  )}
                  <div className="flex justify-between border-b-[0.1rem] border-zinc-200 py-2">
                    <p className="m-0">Total: </p>
                    <p className="m-0">{convertToCurrency(totalPrice)}</p>
                  </div>
                </div>
              </div>
            )}
          </section>
          <section className="w-1/2 px-8">
            <div
              className="w-full bg-black rounded-md text-white flex items-center justify-center
            gap-1 py-2 cursor-pointer hover:bg-gray-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
                />
              </svg>
              <p className="m-0 text-xl monsterrat">Pay</p>
            </div>
            <div className="relative w-full border-b-[0.1rem] border-zinc-400 h-12">
              <p
                className="absolute bottom-[-25%] text-zinc-400 bg-white px-2 left-[50%]
              translate-x-[-50%] m-0"
              >
                Or pay with card
              </p>
            </div>
            <Form
              method="post"
              action="/checkout"
              className="flex flex-col w-full"
            >
              <h3 className="text-[1rem] pt-8">Shipping Information</h3>
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                name="email"
              />
              <p className="mt-4 mb-2 text-zinc-400 text-sm">
                Shipping information
              </p>
              <div className="w-full flex flex-col">
                <div className="w-full flex items-center">
                  <TextField
                    className="w-2/3"
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    name="name"
                  />
                  <FormControl
                    className="w-1/3"
                    variant="filled"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      name="country"
                    >
                      {countries.map((country) => (
                        <MenuItem
                          key={country}
                          value={country.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <TextField
                  id="filled-basic"
                  label="Address"
                  variant="filled"
                  name="address"
                />
              </div>
              <h3 className="text-[1rem] pt-8">Shipping details</h3>
              <div className="w-full flex flex-col">
                <TextField
                  id="filled-basic"
                  label="Card number"
                  variant="filled"
                  name="numbers"
                />
                <div className="flex gap-1">
                  <TextField
                    className="w-1/2"
                    id="filled-basic"
                    label="Expiration Date"
                    variant="filled"
                    name="expiration-date"
                  />
                  <TextField
                    className="w-1/2"
                    id="filled-basic"
                    label="CVC"
                    variant="filled"
                    name="cvc"
                  />
                </div>
              </div>
              <button
                className="py-2 w-full bg-green-400 text-white rounded-md mt-4
              hover:bg-green-600 border-2 border-green-400 transition-all"
              >
                Pay {convertToCurrency(totalPrice)}
              </button>
            </Form>
          </section>
        </main>
      </div>
    </main>
  );
}

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const dataObject = {
    email: data.get("email"),
    name: data.get("name"),
    country: data.get("country"),
    address: data.get("address"),
    cardNumbers: data.get("numbers"),
    expirationDate: data.get("expiration-date"),
    cvc: data.get("cvc"),
  };

  console.log(dataObject);

  store.dispatch(cartActions.replaceCart([]));
  store.dispatch(miscActions.setPurchased(true));

  return redirect("purchase-successful");
};
