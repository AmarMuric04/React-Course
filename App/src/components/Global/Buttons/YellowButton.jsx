import AnimatedButton from "../../Animations/AnimatedButton";

export default function YellowButton({
  text,
  icon = null,
  extraButtonClasses,
  extraTextClasses,
  extraWrapperClasses,
  width,
}) {
  return (
    <AnimatedButton
      wrapperClasses={extraWrapperClasses}
      buttonClasses={`bg-yellow-500 px-6 py-3 flex items-center justify-center hover:bg-yellow-600 w-${
        width && width
      } max-w-${width && width} ${extraButtonClasses && extraButtonClasses}`}
      textClasses={`flex w-${width && width} max-w-${
        width && width
      } items-center justify-center gap-2 font-bold use-poppins text-black text-sm ${
        extraTextClasses && extraTextClasses
      }`}
    >
      {text}
      {icon && icon}
    </AnimatedButton>
  );
}
