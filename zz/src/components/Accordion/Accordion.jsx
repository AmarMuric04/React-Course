import AccordionProvider from "../../store/accordion-context";
import { AccordionContext } from "../../store/accordion-context";
import { useContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx)
    throw new Error(
      "Accordion-related components must be wrapped by Accordion"
    );

  return ctx;
}

export default function Accordion({ children, className }) {
  return (
    <AccordionProvider>
      <ul className={className}>{children}</ul>
    </AccordionProvider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
