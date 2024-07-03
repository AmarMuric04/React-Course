import SlideAndFadeIn from "@Animations/SlideAndFadeIn";

export default function ParagraphText({
  children,
  extraClasses,
  wrapperClasses,
}) {
  return (
    <SlideAndFadeIn
      starting="-100"
      end="0"
      className={`flex py-4 gap-4 ${wrapperClasses}`}
    >
      <p className={`mt-4 use-poppins my-8 ${extraClasses}`}>{children}</p>
    </SlideAndFadeIn>
  );
}
