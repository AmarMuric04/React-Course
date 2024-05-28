import { convertToCurrency } from "../util/dataModifiers";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/redux";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartActions.increaseQuantity(product));
  };

  return (
    <ul className="flex flex-wrap w-full h-full gap-8">
      {products.map((product) => (
        <li
          className="w-64 h-96 flex flex-col items-center bg-zinc-100
          border-b-[0.4rem] border-transparent rounded-2xl overflow-hidden
        hover:border-green-400 hover:pb-[0.4rem] hover:translate-y-[-0.4rem]
          transition-all justify-between relative poppins shadow-md"
          key={product.id}
        >
          <section className="w-full h-48 bg-green-400 grid place-items-center">
            <img
              className="w-32 h-32 object-contain"
              src={product.images[0]}
              alt="Product"
            />
          </section>
          <section className="px-4 flex w-full flex-col items-start">
            <p
              className="font-bold text-xl w-full truncate
           overflow-hidden whitespace-nowrap poppins"
            >
              {product.title}
            </p>
            <div className="ml-[0.1rem] text-gray-400 text-[0.6rem] flex gap-2 items-center">
              <p className="font-bold">Category:</p>
              <p className=" border-[0.1rem] text-gray-700 border-green-400 rounded-full px-2">
                {product.category}
              </p>
            </div>
          </section>

          <section className="px-4 w-full flex flex-col">
            <p className="text-sm truncate overflow-hidden whitespace-nowrap w-full">
              {product.description}
            </p>
            <p>
              <StarRating rating={product.rating.toFixed(0)} />
            </p>
          </section>
          {product.discountPercentage > 1 && (
            <p className="absolute top-0 right-0 py-[0.2rem] px-4 font-bold text-white rounded-md">
              {"- " + product.discountPercentage.toFixed(0) + " %"}
            </p>
          )}
          <section className="flex w-full justify-between items-center">
            <div className="flex flex-col w-1/3 text-center px-2">
              <p className="text-green-400 font-bold">
                {convertToCurrency(product.price)}
              </p>
              <p className="text-gray-400 text-xs whitespace-nowrap">
                {"+" + product.price.toFixed(0) / 10 < 0.99
                  ? "FREE delivery"
                  : "+" + product.price.toFixed(0) / 10 + "€ delivery"}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleAddToCart(product)}
                className="poppins font-semibold text-sm text-black
                 mr-2 py-2 px-6 self-end bg-green-400 rounded-md
               hover:bg-green-600 transition-all border-2 border-green-400"
              >
                Add to cart
              </button>
              <Link
                to={`${product.id}`}
                className="poppins font-semibold text-sm text-black
                 mr-2 py-2 px-6 self-end border-2 border-green-400 rounded-md
                transition-all hover:bg-zinc-200"
              >
                See details
              </Link>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
