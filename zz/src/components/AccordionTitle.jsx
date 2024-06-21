import { useAccordionContext } from "./Accordion";

export default function AccordionTitle({ id, className, children }) {
  const { handleToggleItem } = useAccordionContext();

  return (
    <h3 className={className} onClick={() => handleToggleItem(id)}>
      {children}
    </h3>
  );
}
