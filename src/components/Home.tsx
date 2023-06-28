import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import ActionButton from "@/shared/ActionButton";
import { useGlobalContext } from "@/context/useNavContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const home = () => {
  const [isToTopBtnVisible, setIsToTopBtnVisible] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setIsToTopBtnVisible(true);
    } else {
      setIsToTopBtnVisible(false);
    }
  });

  const { setSelected } = useGlobalContext();

  return (
    <section
      className="bg-gray-20 min-h-full py-10 flex flex-col justify-between md:pb-0"
      id="home"
    >
      <AnchorLink
        className={`fixed right-5 bottom-5 bg-secondary-500 rounded-md p-2 animate-bounce z-50 ${
          isToTopBtnVisible ? "block" : "hidden"
        }`}
        href="#home"
      >
        <ArrowUpIcon className="w-8 h-8" />
      </AnchorLink>
      {/* TITLE DESCRIPTION IMAGE */}

      <motion.div
        className="w-[85%] m-auto align items-center flex flex-col md:flex-row justify-between bg-none pt-20 pb-16"
        onViewportEnter={() => setSelected("home")}
      >
        {/* TITLE DESCRIPTION */}

        <motion.div
          className="flex flex-col gap-8 items-center md:items-start basis-2/4 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative z-10">
            <div className="md:before:content-evolvetext before:absolute before:-z-10 before:-top-20 before:-left-20 ">
              <img src={HomePageText} alt="text" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              quam vel libero omnis excepturi voluptatum a, perspiciatis itaque
              quibusdam velit.
            </p>
          </motion.div>
          <motion.div
            className="flex gap-4 self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton name="Join Now" setSelected={setSelected} />
            <AnchorLink
              onClick={() => {
                setSelected("contactus");
              }}
              className="self-center underline text-primary-500 hover:text-secondary-500"
              href="#contactus"
            >
              Learn more
            </AnchorLink>
          </motion.div>
        </motion.div>

        {/* GRAPHIC */}

        <div className="z-10 basis-2/4 flex justify-end">
          <img src={HomePageGraphic} alt="gym girl" />
        </div>
      </motion.div>
      <div className="hidden bg-primary-100 md:block p-8 my-4">
        <div className="w-4/5 m-auto flex flex-row gap-40 ">
          <img src={SponsorRedBull} alt="redbull" className="self-center" />
          <img src={SponsorForbes} alt="forbes" className="self-center" />
          <img src={SponsorFortune} alt="fortune" className="self-center" />
        </div>
      </div>
    </section>
  );
};

export default home;
