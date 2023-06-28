import { useGlobalContext } from "@/context/useNavContext";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsItem from "./BenefitsItem";
import BenefitsGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";
import { BenefitsItemType } from "@/shared/types";

const Benefits = () => {
  const benefitsDetails: BenefitsItemType[] = [
    {
      icon: <HomeModernIcon className="h-8 w-8 " />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 " />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8 " />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];
  const { setSelected } = useGlobalContext();

  return (
    <section className="min-h-full py-20" id="benefits">
      <motion.div
        className="w-5/6 m-auto flex flex-col gap-4 md:gap-8"
        onViewportEnter={() => setSelected("benefits")}
      >
        <motion.h1
          className="text-center text-3xl font-montserrat uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          More than just a Gym
        </motion.h1>
        <motion.p
          className="text-sm md:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {benefitsDetails.map((item: BenefitsItemType) => {
            const { icon, title, description }: BenefitsItemType = item;
            return (
              <BenefitsItem
                key={title}
                icon={icon}
                title={title}
                description={description}
                setSelected={setSelected}
              />
            );
          })}
        </motion.div>

        {/* BELOW HEADING */}

        <div className="flex flex-col gap-4 md:flex-row items-center">
          {/* GRAPHIC */}

          <img alt="benefits graphic" src={BenefitsGraphic} className=""></img>

          {/* DESCRIPTION AND BUTTON*/}

          <div className="flex flex-col gap-4 md:basis-2/4 self-center">
            <div className="relative">
              <h1 className="uppercase text-3xl font-montserrat before:content-abstractwaves before:absolute before:-top-16 before:-left-10">
                millions of happy members getting{" "}
                <span className="text-primary-500">fit</span>
              </h1>
            </div>

            <p>
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>

            <div className="relative self-start my-5 bg-black">
              <div className="absolute before:content-sparkles -z-10 -top-6"></div>
              <ActionButton name="Join Now" setSelected={setSelected} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
