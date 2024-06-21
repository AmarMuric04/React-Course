import { createContext, useState } from "react";

export const AccordionContext = createContext();

export default function AccordionProvider({ children }) {
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggleItem = (id) =>
    setOpenItemId((prevId) => (prevId === id ? null : id));

  const accordionValue = {
    openItemId,
    handleToggleItem,
  };

  return (
    <AccordionContext.Provider value={accordionValue}>
      {children}
    </AccordionContext.Provider>
  );
}
