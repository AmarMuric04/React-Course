import { useState } from "react";

export default function Input({
  label,
  type,
  id,
  placeholder,
  invalid = false,
  ...props
}) {
  return (
    <>
      <label>{label}</label>
      <input
        {...props}
        className={`bg-gray-100 px-4 py-3 outline-none focus:bg-gray-200
         transition-all text-xs w-full border-[0.1rem] border-transparent ${
           invalid && "border-red-400"
         }`}
        id={id}
        name={id}
        placeholder={placeholder ? placeholder : null}
        type={type}
        required
      />
    </>
  );
}
