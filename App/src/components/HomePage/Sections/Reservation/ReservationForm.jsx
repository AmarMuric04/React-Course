import { SendArrow } from "@Icons/Icons";

import SlideAndFadeIn from "@Animations/SlideAndFadeIn";

import TitleText from "@GlobalComponents/Texts/TitleText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import InputWrapper from "./InputWrapper";

export default function ReservationForm({
  handleSubmit,
  errors,
  isSubmitted,
  setIsSubmitted,
}) {
  return (
    <SlideAndFadeIn
      starting="-150"
      end="0"
      className="w-full flex justify-center xl:justify-start h-full"
    >
      <div className="scene w-full max-w-[35rem] h-full">
        <div
          className={`min-h-[40rem] rounded-md w-full bg-white card ${
            isSubmitted && "flipped"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full bg-white p-8 rounded-md gap-2 front face"
          >
            <h1 className="use-playfair text-[1.6rem] leading-tight font-bold pb-8">
              Smooth Reservations for <br /> Memorable Dining Experiences
            </h1>
            <InputWrapper isSubmitted={isSubmitted} errors={errors} />
            <YellowButton
              extraWrapperClasses="w-full flex items-center justify-center"
              width="full"
              text="Request Reservation"
              icon={<SendArrow width="1.5em" height="1.5em" />}
            />
          </form>
          {isSubmitted && (
            <div className="flex flex-col items-center w-full p-8 rounded-md gap-2 back face justify-between h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8em"
                height="8em"
                viewBox="0 0 24 24"
                className="text-yellow-500"
              >
                <path
                  fill="currentColor"
                  fill-opacity="0"
                  d="M6 4H10V6H14V4H18V20H6V4Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.2s"
                    dur="0.15s"
                    values="0;0.3"
                  />
                </path>
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g stroke-width="2">
                    <path
                      stroke-dasharray="66"
                      stroke-dashoffset="66"
                      d="M12 3H19V21H5V3H12Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="66;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="10"
                      stroke-dashoffset="10"
                      d="M9 13L11 15L15 11"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1s"
                        dur="0.2s"
                        values="10;0"
                      />
                    </path>
                  </g>
                  <path
                    stroke-dasharray="12"
                    stroke-dashoffset="12"
                    d="M14.5 3.5V6.5H9.5V3.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.2s"
                      values="12;0"
                    />
                  </path>
                </g>
              </svg>
              <div className="mb-32">
                <TitleText extraClasses="text-[2rem] text-center">
                  Thank you! <br />
                </TitleText>
                <ParagraphText extraClasses="text-center">
                  We will be expecting you!
                </ParagraphText>
              </div>
              <YellowButton
                onClick={() => setIsSubmitted(false)}
                extraWrapperClasses="w-full flex items-center justify-center"
                width="full"
                text="Make another one"
                icon={<SendArrow width="1.5em" height="1.5em" />}
              />
            </div>
          )}
        </div>
      </div>
    </SlideAndFadeIn>
  );
}
