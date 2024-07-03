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
}) {
  return (
    <>
      <SlideAndFadeIn starting="100" end="0">
        <p className="use-poppins text-xl mb-4">{date}</p>
      </SlideAndFadeIn>
      <TitleText extraClasses={titleClasses}>{title}</TitleText>
      <ParagraphText extraClasses={paragraphClasses}>{paragraph}</ParagraphText>
      <UnderlinedButton
        text={
          <>
            Read More <SolidRightArrow width="2em" height="2em" />
          </>
        }
        color="yellow"
      />
    </>
  );
}
