import { useState } from "react";
import { convertToCurrency, formatISODate } from "../util/dataModifiers";
import ProductMenu from "./ProductMenu";
import StarRating from "./StarRating";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/redux";
import MagnifyingGlass from "./MagnifyingGlass";
import { miscActions } from "../redux/misc";

export default function ProductDetails({ product }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  console.log(product);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;

    setQuantity(newQuantity);
  };
  const handleDecrease = () => {
    const newQuantity = quantity - 1;

    if (newQuantity === 0) return;

    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    dispatch(
      cartActions.increaseQuantity({
        item: product,
        quantityIncrease: quantity,
      })
    );

    setQuantity(1);

    dispatch(miscActions.showNotification({ showing: true, clicked: true }));
  };

  let productInCart = cart.find((item) => item.id === product.id);

  if (!productInCart) productInCart = product;

  let deliveryCost = (productInCart.price.toFixed(0) / 10) * quantity;

  if (productInCart.price.toFixed(0) / 10 < 0.99) deliveryCost = 0;

  return (
    <div className="shadow-lg flex rounded-xl w-full h-auto">
      <div
        className="img-container flex items-center
         p-16 justify-center w-1/2 relative"
      >
        <MagnifyingGlass imageSrc={productInCart.images[0]} />
        {/* <img
            className="zoom-img w-96 h-96 object-contain"
            src={productInCart.images[0]}
            alt="productInCart"
          /> */}
        <p className="absolute top-4 left-4 text-gray-400 px-4 py-2 border border-gray-400 rounded-md">
          {productInCart.sku}
        </p>
        <div className="absolute bottom-8 right-4 flex flex-col items-center">
          <img
            src={productInCart.meta.qrCode}
            className=" w-32"
            alt="qr code"
          />
          <p className="m-0 text-md">{productInCart.meta.barcode}</p>
        </div>

        <p className="absolute bottom-4 left-4 text-gray-400 px-4 py-2">
          Created: {formatISODate(productInCart.meta.createdAt)}
        </p>
      </div>
      <div className="w-1/2 p-16 rounded-r-xl bg-gray-700 text-white flex flex-col justify-between">
        <section>
          <p className="text-md text-green-400 uppercase font-bold">
            {productInCart.category}
          </p>
          <h2 className="text-3xl font-bold">{productInCart.title}</h2>
          <p className="italic text-sm">{productInCart.brand}</p>
          <div className="flex justify-between my-4">
            <p className="text-4xl">{convertToCurrency(productInCart.price)}</p>
            <StarRating rating={productInCart.rating} />
          </div>
          <ProductMenu product={productInCart} />
        </section>
        <section className="text-black flex flex-col mt-8 gap-4">
          <div className="flex gap-8">
            <div className="flex gap-2 flex-col">
              <p className="text-sm font-bold text-green-400">QUANTITY</p>
              <p className=" p-2 bg-white rounded-md flex items-center gap-2">
                <button
                  onClick={handleDecrease}
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
                <p className="w-8 m-0 text-center">{quantity}</p>
                <button
                  onClick={handleIncrease}
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
              </p>
            </div>
            <div className="flex gap-2 flex-col w-28 items-center">
              <p className="text-green-400 text-sm font-bold whitespace-nowrap">
                SUBTOTAL
              </p>
              <p className="h-full flex items-center text-white font-bold">
                {convertToCurrency(productInCart.price * quantity)}
              </p>
            </div>
            <div className="flex gap-2 flex-col w-28 items-center">
              <p className="text-green-400 text-sm font-bold">DELIVERY</p>
              <p className="h-full flex items-center text-white font-bold">
                {deliveryCost ? convertToCurrency(deliveryCost) : "FREE"}
              </p>
            </div>
            <div className="flex gap-2 flex-col w-28 items-center">
              <p className="text-green-400 text-sm font-bold">TOTAL PRICE</p>
              <p className="h-full flex items-center text-white font-bold">
                {convertToCurrency(
                  productInCart.price * quantity + deliveryCost
                )}
              </p>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-green-400 text-white w-full rounded-full 
          py-3 px-4 hover:bg-green-700 transition-all"
          >
            Add to cart
          </button>
        </section>
      </div>
    </div>
  );
}
