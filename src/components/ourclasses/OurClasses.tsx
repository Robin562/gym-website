import { useGlobalContext } from "@/context/useNavContext";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { ClassType } from "./Class";
import Class from "./Class";
import { useState, useRef } from "react";

const OurClasses = () => {
  const { setSelected } = useGlobalContext();

  const [allowHover, setAllowHover] = useState<boolean>(false);

  const [startX, setStartX] = useState<number>(0);

  const [walk, setWalk] = useState<number>(0);

  const classRef = useRef<HTMLDivElement | null>(null);

  const [prevScrollLeft, setPrevScrollLeft] = useState<number>(0);

  const classes: ClassType[] = [
    {
      name: "Weight Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: image1,
    },
    {
      name: "Yoga Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: image4,
    },
    {
      name: "Fitness Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: image5,
    },
    {
      name: "Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: image6,
    },
  ];

  return (
    <section className="py-20 bg-primary-100" id="ourclasses">
      <div className="w-[95%] m-auto flex flex-col gap-8 max-w-[1200px]">
        <h1 className="text-center text-3xl font-montserrat">OUR CLASSES</h1>
        <p className="text-sm sm:text-base w-[90%] m-auto">
          {" "}
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
        <motion.div
          onViewportEnter={() => setSelected("ourclasses")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-flow-col gap-2 overflow-hidden select-none hover:cursor-grab active:cursor-grabbing relative"
          ref={classRef}
          onMouseMove={(e) => {
            if (!allowHover) return;
            let x;
            if (classRef.current) {
              x = e.pageX - classRef.current.offsetLeft;
            }
            if (x) setWalk(startX - x);
            if (classRef.current)
              classRef.current.scrollLeft = prevScrollLeft + walk;
          }}
          onMouseDown={(e) => {
            setAllowHover(true);
            if (classRef.current)
              setStartX(e.pageX - classRef.current.offsetLeft);
          }}
          onMouseUp={() => {
            setAllowHover(false);
            if (classRef.current)
              setPrevScrollLeft(classRef.current.scrollLeft);
          }}
          onMouseLeave={() => {
            setAllowHover(false);
          }}
        >
          {classes.map((item: ClassType) => {
            const { name, description, image } = item;
            return (
              <Class
                name={name}
                description={description}
                image={image}
                key={name}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClasses;
