import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { json } from "react-router-dom";
import store from "../redux/redux";
import { miscActions } from "../redux/misc";

export default function AfterPurchasePage() {
  return (
    <main className="w-full h-screen flex flex-col items-center">
      <Sidebar
        title={
          <Fragment>
            <div className="bg-white p-2 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
                className="text-green-400"
              >
                <g
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="currentColor"
                    fill-opacity="0"
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.2s"
                      dur="0.15s"
                      values="0;0.3"
                    />
                  </circle>
                  <path
                    fill="none"
                    stroke-dasharray="14"
                    stroke-dashoffset="14"
                    d="M8 12L11 15L16 10"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.2s"
                      values="14;0"
                    />
                  </path>
                </g>
              </svg>
            </div>
            <h1 className="font-bold">THANK YOU!</h1>
            <h2 className="uppercase">Your order is confirmed</h2>
            <p>
              We will be sending you an email when the order gets to your
              address
            </p>
          </Fragment>
        }
        iterable={[]}
      />
    </main>
  );
}

export const loader = () => {
  const purchaseCompleted = store.getState().misc.purchased;

  if (!purchaseCompleted) throw json({ message: "error" }, { status: 404 });
  else {
    store.dispatch(miscActions.setPurchased(false));
    return null;
  }
};
