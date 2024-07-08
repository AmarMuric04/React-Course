import TitleText from "@GlobalComponents/Texts/TitleText";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";
import SlideAndFadeIn from "@Animations/SlideAndFadeIn";
import UnderlinedButton from "@GlobalComponents/Buttons/UnderlinedButton";

import { SolidRightArrow } from "@Icons/Icons";

export default function PostItem({
  date,
  title,
  paragraph,
  titleClasses,
  paragraphClasses,
  wrapperClasses,
}) {
  return (
    <div className="text-center xl:text-start flex flex-col items-center xl:items-start">
      <SlideAndFadeIn starting="100" end="0">
        <p className="use-poppins text-xl mb-4">{date}</p>
      </SlideAndFadeIn>
      <TitleText extraClasses={titleClasses}>{title}</TitleText>
      <ParagraphText
        wrapperClasses={wrapperClasses}
        extraClasses={paragraphClasses}
      >
        {paragraph}
      </ParagraphText>
      <UnderlinedButton
        text={
          <>
            Read More <SolidRightArrow width="2em" height="2em" />
          </>
        }
        color="yellow"
      />
    </div>
  );
}
