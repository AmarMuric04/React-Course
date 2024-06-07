import { useState } from "react";
import StarRating from "./StarRating";
import { formatISODate } from "../util/dataModifiers";

export default function ProductMenu({ product }) {
  const [activeButton, setActiveButton] = useState("description");

  const handleSetActiveButton = (identifier) => setActiveButton(identifier);

  return (
    <section>
      <menu className="flex gap-2 my-2">
        <button
          onClick={() => handleSetActiveButton("description")}
          className={`uppercase text-sm font-bold py-2 px-4 border-b-4
           ${
             activeButton === "description"
               ? "border-green-400"
               : "border-transparent"
           }`}
        >
          Description
        </button>
        <button
          onClick={() => handleSetActiveButton("details")}
          className={`uppercase text-sm font-bold py-2 px-4 border-b-4
           ${
             activeButton === "details"
               ? "border-green-400"
               : "border-transparent"
           }`}
        >
          Details
        </button>
        <button
          onClick={() => handleSetActiveButton("reviews")}
          className={`uppercase text-sm font-bold py-2 px-4 border-b-4
           ${
             activeButton === "reviews"
               ? "border-green-400"
               : "border-transparent"
           }`}
        >
          Reviews
        </button>
      </menu>
      <div className="text-gray-200 h-36 overflow-auto custom-scrollbar">
        {activeButton === "description" && <p>{product.description}</p>}
        {activeButton === "details" && (
          <section>
            <div className="flex gap-2">
              <p className="text-sm font-bold flex gap-1 items-center m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M8 2a1 1 0 0 1 1 1v2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3v4a1 1 0 1 1-2 0v-4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3V3a1 1 0 0 1 1-1m9 0a1 1 0 0 1 .993.883L18 3v4a3 3 0 0 1 2.995 2.824L21 10v6a3 3 0 0 1-2.824 2.995L18 19v2a1 1 0 0 1-1.993.117L16 21v-2a3 3 0 0 1-2.995-2.824L13 16v-6a3 3 0 0 1 2.824-2.995L16 7V3a1 1 0 0 1 1-1"
                    />
                  </g>
                </svg>{" "}
                Availability:{" "}
              </p>
              <p className="m-0">{product.availabilityStatus}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm font-bold flex gap-1 items-center m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a1 1 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a1 1 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a1 1 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a1 1 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a1 1 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a1 1 0 0 1-.696-.288l-.893-.893A2.98 2.98 0 0 0 12 2m3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253l-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
                Warranty:{" "}
              </p>
              <p className="m-0">{product.warrantyInformation}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm font-bold flex gap-1 items-center m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.825 13H15q.425 0 .713-.288T16 12t-.288-.712T15 11h-3.175l.9-.9Q13 9.825 13 9.413t-.3-.713q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.688.287t.712-.287q.275-.275.275-.7t-.275-.7zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-16.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212"
                  />
                </svg>{" "}
                Return policy:{" "}
              </p>
              <p className="m-0">{product.returnPolicy}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm font-bold flex gap-1 items-center m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 20q-1.25 0-2.125-.875T3 17H1V6q0-.825.588-1.412T3 4h14v4h3l3 4v5h-2q0 1.25-.875 2.125T18 20t-2.125-.875T15 17H9q0 1.25-.875 2.125T6 20m0-2q.425 0 .713-.288T7 17t-.288-.712T6 16t-.712.288T5 17t.288.713T6 18m12 0q.425 0 .713-.288T19 17t-.288-.712T18 16t-.712.288T17 17t.288.713T18 18m-1-5h4.25L19 10h-2z"
                  />
                </svg>{" "}
                Shipping:{" "}
              </p>
              <p className="m-0">{product.shippingInformation}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold flex gap-1 items-center m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 2.739a.25.25 0 0 1-.403.197L1.004 1.697a.25.25 0 0 1 0-.394L2.597.063A.25.25 0 0 1 3 .262v.74h6V.26a.25.25 0 0 1 .404-.197l1.592 1.239a.25.25 0 0 1 0 .394l-1.592 1.24A.25.25 0 0 1 9 2.738V2H3zM9.5 5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5m-7-1A1.5 1.5 0 0 0 1 5.5v7A1.5 1.5 0 0 0 2.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 9.5 4zm12.239 2H14v6h.739a.25.25 0 0 1 .197.403l-1.239 1.593a.25.25 0 0 1-.394 0l-1.24-1.593a.25.25 0 0 1 .198-.403H13V6h-.739a.25.25 0 0 1-.197-.403l1.239-1.593a.25.25 0 0 1 .394 0l1.24 1.593a.25.25 0 0 1-.198.403"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
                Dimensions:{" "}
              </p>
              <ul className="flex text-sm px-2 flex-col mb-0">
                <li className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="bg-green-400 text-black rounded-full"
                  >
                    <path
                      fill="currentColor"
                      d="m7 16l-4-4l4-4l1.425 1.4l-1.6 1.6h10.35L15.6 9.4L17 8l4 4l-4 4l-1.4-1.4l1.575-1.6H6.825L8.4 14.6z"
                    />
                  </svg>
                  <p className=" m-0">Width: </p>
                  {product.dimensions.width}
                  <span className="text-xs">cm</span>
                </li>
                <li className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="bg-green-400 text-black rounded-full"
                  >
                    <path
                      fill="currentColor"
                      d="m12 21l-4-4l1.4-1.4l1.6 1.575V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.425l-1.6-1.6v10.35l1.6-1.575L16 17z"
                    />
                  </svg>
                  <p className=" m-0">Height: </p>
                  {product.dimensions.height}
                  <span className="text-xs">cm</span>
                </li>
                <li className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="bg-green-400 text-black rounded-full"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M2 20h20M5 4h14M3 16.01l.01-.011m18 .011l-.01-.011M4 12.01l.01-.011m16 .011l-.01-.011M5 8.01l.01-.011m14 .011L19 7.999M12 7v10m0-10l-1.5 1.5M12 7l1.5 1.5M12 17l-3-3m3 3l3-3"
                    />
                  </svg>
                  <p className=" m-0">Depth:</p> {product.dimensions.depth}
                  <span className="text-xs">cm</span>
                </li>
              </ul>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-bold flex gap-1 items-center m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <mask id="ipSWeight0">
                        <g fill="none">
                          <path
                            fill="#fff"
                            stroke="#fff"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"
                          />
                          <path
                            stroke="#000"
                            stroke-linecap="round"
                            stroke-width="4"
                            d="M12 19.054c3.325-4 7.325-6 12-6s8.675 2 12 6"
                          />
                          <path
                            fill="#000"
                            d="M24 31a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
                          />
                          <path
                            stroke="#000"
                            stroke-linecap="round"
                            stroke-width="4"
                            d="m19 21l5.008 7"
                          />
                        </g>
                      </mask>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M0 0h48v48H0z"
                      mask="url(#ipSWeight0)"
                    />
                  </svg>{" "}
                  Weight:{" "}
                </p>
                <p className="m-0">{product.weight}</p>
                <span className="text-xs">lbs</span>
              </div>
            </div>
          </section>
        )}
        {activeButton === "reviews" && (
          <ul className="flex flex-col gap-2">
            {product.reviews.map((review) => (
              <li className="border-l-2 border-green-400 pl-4" key={product.id}>
                <p className="flex justify-between items-center m-0">
                  <p className="font-bold m-0">{review.reviewerName}</p>
                  <StarRating rating={review.rating} />
                </p>
                <p className="italic text-sm m-0">"{review.comment}"</p>
                <p className="text-sm italic text-gray-400 m-0">
                  {review.reviewerEmail}
                </p>
                <p className="text-xs m-0">{formatISODate(review.date)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
