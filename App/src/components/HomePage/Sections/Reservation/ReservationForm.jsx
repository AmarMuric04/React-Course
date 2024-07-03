import { SendArrow } from "@Icons/Icons";

import SlideAndFadeIn from "@Animations/SlideAndFadeIn";

import YellowButton from "@GlobalComponents/Buttons/YellowButton";

import InputWrapper from "./InputWrapper";

export default function ReservationForm({ handleSubmit, errors }) {
  return (
    <SlideAndFadeIn starting="-150" end="0">
      <form
        onSubmit={handleSubmit}
        className="min-w-[35rem] w-[35rem] bg-white flex flex-col p-8 rounded-md gap-2"
      >
        <h1 className="use-playfair text-[1.6rem] leading-tight font-bold pb-8">
          Smooth Reservations for <br /> Memorable Dining Experiences
        </h1>
        <InputWrapper errors={errors} />
        <YellowButton
          extraWrapperClasses="w-full flex items-center justify-center"
          width="full"
          text="Request Reservation"
          icon={<SendArrow width="1.5em" height="1.5em" />}
        />
      </form>
    </SlideAndFadeIn>
  );
}
