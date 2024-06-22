import Product from "./Product";
import { motion } from "framer-motion";

export default function Products({ products }) {
  return (
    <motion.ul
      key={products}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="p-0 flex flex-wrap w-full h-full gap-[2.66rem]"
    >
      {products.map((product) => (
        <Product product={product} />
      ))}
    </motion.ul>
  );
}
