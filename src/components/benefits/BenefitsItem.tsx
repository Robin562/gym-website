import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactElement } from "react";
import { motion } from "framer-motion";

type Props = {
  setSelected: (value: string) => void;
  icon: ReactElement;
  title: string;
  description: string;
};

const BenefitsItem = ({ setSelected, icon, title, description }: Props) => {
  return (
    <motion.div
      className="border-2 border-solid px-4 text-center flex flex-col gap-2 py-14 hover:shadow-xl hover:cursor-pointer"
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <i className="rounded-full bg-primary-100 p-2 self-center border-2 ">
        {icon}
      </i>
      <h6 className="font-montserrat">{title}</h6>
      <p>{description}</p>
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
  );
};

export default BenefitsItem;
