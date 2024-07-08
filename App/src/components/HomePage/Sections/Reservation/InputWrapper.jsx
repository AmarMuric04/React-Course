import { useState } from "react";

import { motion } from "framer-motion";

import Input from "./Input";
import TextArea from "./TextArea";

export default function InputWrapper({ errors, isSubmitted }) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      whileInView={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      initial="hidden"
      animate={isInView ? "visible" : ""}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <div className="flex gap-4 ">
        <Input
          invalid={errors.invalidName}
          isSubmitted={isSubmitted}
          label="Your Name*"
          id="name"
          type="text"
          placeholder="Your real name..."
          extraClasses="w-1/2"
        />
        <Input
          invalid={errors.invalidEmail}
          isSubmitted={isSubmitted}
          label="Your Email*"
          id="email"
          type="email"
          placeholder="Your email..."
          extraClasses="w-1/2"
        />
      </div>
      <div className="flex gap-4 ">
        <Input
          invalid={errors.invalidNumber}
          isSubmitted={isSubmitted}
          label="Your Number*"
          id="number"
          type="tel"
          placeholder="Your number..."
          extraClasses="w-1/2 sm:w-2/3"
        />
        <Input
          invalid={errors.invalidDate}
          isSubmitted={isSubmitted}
          label="Reservation Date*"
          id="date"
          type="date"
          extraClasses="w-1/2 sm:w-1/3"
        />
      </div>
      <div className="flex gap-4 ">
        <Input
          invalid={errors.invalidAmount}
          isSubmitted={isSubmitted}
          label="Amount of People*"
          id="amount"
          type="number"
          min="0"
          placeholder="2"
          extraClasses="w-1/2 sm:w-1/3"
        />{" "}
        <Input
          invalid={errors.invalidTime}
          isSubmitted={isSubmitted}
          label="Reservation Time*"
          id="time"
          type="time"
          extraClasses="w-1/2 sm:w-2/3"
        />
      </div>
      <div>
        <TextArea
          label="Notes*"
          placeholder="Write something..."
          isSubmitted={isSubmitted}
        />
      </div>
    </motion.div>
  );
}
