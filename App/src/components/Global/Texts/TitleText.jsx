import JumpAndFadeIn from "@Animations/JumpAndFadeIn";

export default function TitleText({ children, extraClasses }) {
  return (
    <JumpAndFadeIn>
      <h1
        className={`z-50 font-bold leading-tight use-playfair ${extraClasses}`}
      >
        {children}
      </h1>
    </JumpAndFadeIn>
  );
}
