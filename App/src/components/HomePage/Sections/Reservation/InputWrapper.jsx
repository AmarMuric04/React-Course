import { motion } from "framer-motion";
import Input from "./Input";
import { useState } from "react";

export default function InputWrapper({ errors }) {
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
      <div className="flex gap-4">
        <Input
          invalid={errors.invalidName}
          label="Your Name*"
          id="name"
          type="text"
          placeholder="Your real name..."
          extraClasses="w-1/2"
        />
        <Input
          invalid={errors.invalidEmail}
          label="Your Email*"
          id="email"
          type="email"
          placeholder="Your email..."
          extraClasses="w-1/2"
        />
      </div>
      <div className="flex gap-4">
        <Input
          invalid={errors.invalidNumber}
          label="Your Number*"
          id="number"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Your number..."
          extraClasses="w-2/3"
        />
        <Input
          invalid={errors.invalidDate}
          label="Reservation Date*"
          id="date"
          type="date"
          extraClasses="w-1/3"
        />
      </div>
      <div className="flex gap-4">
        <Input
          invalid={errors.invalidAmount}
          label="Amount of People*"
          id="amount"
          type="number"
          placeholder="2"
          extraClasses="w-1/3"
        />{" "}
        <Input
          invalid={errors.invalidTime}
          label="Reservation Time*"
          id="time"
          type="time"
          extraClasses="w-2/3"
        />
      </div>
      <div>
        <motion.label
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          transition={{
            type: "spring",
          }}
        >
          Notes*
        </motion.label>
        <motion.textarea
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          transition={{
            type: "spring",
          }}
          className="bg-gray-100 px-4 py-3 outline-none focus:bg-gray-200 max-h-48 transition-all text-xs w-full "
          id="text"
          name="text"
          rows="4"
          cols="50"
        ></motion.textarea>
      </div>
    </motion.div>
  );
}
