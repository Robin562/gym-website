import { ReactElement } from "react";
import { motion } from "framer-motion";

export type ClassType = {
  name: string;
  description: string;
  image: string;
};

const Class = ({ name, image, description }: ClassType): ReactElement => {
  return (
    <motion.div
      className={`relative w-96 h-60 `}
      variants={{
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
      }}
    >
      <img
        src={image}
        alt="class image"
        className="absolute w-full h-full top-0 right-0 object-cover "
      ></img>
      {/* INFO */}

      <div className="opacity-100 transition-all hover:opacity-90 ">
        <div className="absolute top-0 left-0 w-full bg-primary-500 h-full grid place-content-center opacity-80"></div>
        <div className="text-center absolute w-4/5 left-2/4 -translate-x-2/4 h-full grid place-content-center gap-4">
          <h6 className="font-montserrat text-white">{name}</h6>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Class;
