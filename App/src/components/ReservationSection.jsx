import { useRef, useState } from "react";
import Input from "./Input";
import OrderButton from "./OrderButton";

const initialErrorState = {
  invalidName: false,
  invalidEmail: false,
  invalidNumber: false,
  invalidDate: false,
  invalidTime: false,
  invalidAmount: false,
};

export default function ReservationSection() {
  const [errors, setErrors] = useState(initialErrorState);
  const removeErrorsTimeout = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (removeErrorsTimeout.current) clearTimeout(removeErrorsTimeout.current);

    const data = new FormData(event.target);

    const handleSetErrors = (identifier) =>
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          [identifier]: true,
        };
      });

    const usableData = {
      name: data.get("name"),
      email: data.get("email"),
      number: data.get("number"),
      date: data.get("date"),
      time: data.get("time"),
      amount: data.get("amount"),
    };

    if (!usableData.name) handleSetErrors("invalidName");
    if (!usableData.email) handleSetErrors("invalidEmail");
    if (!usableData.number)
      if (!usableData.email) handleSetErrors("invalidNumber");
    if (!usableData.date) if (!usableData.email) handleSetErrors("invalidDate");
    if (!usableData.time) handleSetErrors("invalidTime");
    if (!usableData.amount) handleSetErrors("invalidAmount");

    removeErrorsTimeout.current = setTimeout(() => {
      setErrors(initialErrorState);
    }, 1500);
  };

  return (
    <div className="bg-[#141210] w-full px-48 py-16 use-poppins flex items-start justify-center gap-20">
      <form
        onSubmit={handleSubmit}
        className="min-w-[35rem] w-[35rem] bg-white flex flex-col p-8 rounded-md gap-2"
      >
        <h1 className="use-playfair text-[1.6rem] leading-tight font-bold pb-8">
          Smooth Reservations for <br /> Memorable Dining Experiences
        </h1>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-3 w-[40%]">
            <Input
              invalid={errors.invalidName}
              label="Your Name*"
              id="name"
              type="text"
              placeholder="Your real name..."
            />
          </div>
          <div className="flex flex-col gap-3 w-[60%]">
            <Input
              invalid={errors.invalidEmail}
              label="Your Email*"
              id="email"
              type="email"
              placeholder="Your email..."
            />
          </div>
        </div>{" "}
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-3 w-[60%]">
            <Input
              invalid={errors.invalidNumber}
              label="Your Number*"
              id="number"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Your number..."
            />
          </div>
          <div className="flex flex-col gap-3 w-[40%]">
            <Input
              invalid={errors.invalidDate}
              label="Reservation Date*"
              id="date"
              type="date"
            />
          </div>
        </div>{" "}
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-3 w-[40%]">
            <Input
              invalid={errors.invalidTime}
              label="Reservation Time*"
              id="time"
              type="time"
            />
          </div>
          <div className="flex flex-col gap-3 w-[60%]">
            <Input
              invalid={errors.invalidAmount}
              label="Amount of People*"
              id="amount"
              type="number"
              placeholder="2"
            />
          </div>
        </div>
        <div>
          <label>Notes*</label>
          <textarea
            className="bg-gray-100 px-4 py-3 outline-none focus:bg-gray-200 max-h-48 transition-all text-xs w-full "
            id="text"
            name="text"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <button className="bg-yellow-400 py-3 rounded-md hover:bg-yellow-300 mt-4">
          Request Reservation
        </button>
      </form>
      <div className="w-[40%]">
        <h1 className="use-playfair text-[3rem] font-bold text-white leading-tight">
          Elevate Your Dining <br /> Experience with a Reserved
          <br /> Table at <span className="text-green-400">Fast Food</span>
        </h1>
        <p className="use-poppins text-white my-8">
          Elevate your dining experience with a reserved table at Fast Food.
          Enjoy the perfect blend of convenience and quality, where each meal is
          prepared to delight your taste buds in a relaxed and welcoming
          atmosphere.
        </p>
        <OrderButton />
      </div>
    </div>
  );
}
