import AnimatedButton from "@Animations/AnimatedButton";

export default function YellowButton({
  text,
  icon = null,
  extraButtonClasses,
  extraTextClasses,
  extraWrapperClasses,
  width,
  ...props
}) {
  return (
    <AnimatedButton
      {...props}
      width={width && width.replace("[", "").replace("]", "")}
      wrapperClasses={extraWrapperClasses}
      buttonClasses={`bg-yellow-500 px-6 py-3 flex items-center justify-center hover:bg-yellow-600 w-${width} max-w-${
        width ? width : "15rem"
      }  ${extraButtonClasses}`}
      textClasses={`flex w-${width} max-w-${width} items-center justify-center gap-2 font-bold use-poppins text-black text-sm ${extraTextClasses}`}
    >
      {text}
      {icon && icon}
    </AnimatedButton>
  );
}
