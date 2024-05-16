import { useState } from "react";

export function useInput(defaultValue, validator) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validator(enteredValue);

  function handleChangeInputs(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleChangeInputs,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
