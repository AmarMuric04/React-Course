import { useRef, useState } from "react";

import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import ReservationForm from "./ReservationForm";

import { RightArrowIcon } from "@Icons/Icons";

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
    <div className="bg-[#141210] w-full py-16 use-poppins flex items-start justify-center gap-20">
      <div className="w-[1280px] flex justify-between">
        <ReservationForm handleSubmit={handleSubmit} errors={errors} />
        <div className="w-[40%] text-white mt-16">
          <TitleText extraClasses="text-[2rem] text">
            Elevate Your Dining <br /> Experience with a Reserved
            <br /> Table at <SpecialText>DineDivine</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1rem]">
            Enjoy the perfect blend of convenience and quality, where each meal
            is prepared to delight your taste buds in a relaxed and welcoming
            atmosphere.
          </ParagraphText>
          <YellowButton
            width="[15rem]"
            text="Read More"
            icon={<RightArrowIcon width="2em" height="2em" />}
          />
        </div>
      </div>
    </div>
  );
}
