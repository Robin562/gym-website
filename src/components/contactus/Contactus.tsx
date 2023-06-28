import ContactUsGraphic from "@/assets/ContactUsPageGraphic.png";
import { useGlobalContext } from "@/context/useNavContext";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contactus = () => {
  const { setSelected } = useGlobalContext();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: React.FormEvent) => {
    const valid = await trigger();
    if (!valid) e.preventDefault();
  };

  return (
    <section id="contactus" className="py-20">
      <div className="w-[90%] m-auto flex flex-col gap-8 max-w-[1200px]">
        <h1 className="text-3xl font-montserrat uppercase text-center">
          <span className="text-primary-500">Join Now</span> to get in shape
        </h1>
        <p className="text-center text-sm xs:text-base">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <motion.form
            action="https://formsubmit.co/a20f982bf8d87ed6a510d87af9efa78d"
            className="flex flex-col gap-4 basis-3/5"
            onViewportEnter={() => setSelected("contactus")}
            onSubmit={(e) => handleSubmit(e)}
            method="POST"
          >
            <input
              type="text"
              id="name"
              className="bg-primary-300 placeholder:text-white px-4 py-2 rounded-md"
              placeholder="your name"
              {...register("name", { required: true, maxLength: 30 })}
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">name is required</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className="text-red-500">name cannot exceed 30 characters</p>
            )}
            <input
              type="email"
              className="bg-primary-300 placeholder:text-white px-4 py-2 rounded-md"
              placeholder="your email"
              {...register("email", { required: true, maxLength: 30 })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}
            {errors.email?.type === "maxLength" && (
              <p className="text-red-500">email cannot exceed 30 characters</p>
            )}

            <textarea
              {...register("message", { required: true, maxLength: 2000 })}
              name="message"
              className="bg-primary-300 placeholder:text-white px-4 py-2 rounded-md resize-none h-48"
              placeholder="message"
            ></textarea>
            {errors.message?.type === "required" && (
              <p className="text-red-500">message is required</p>
            )}
            {errors.message?.type === "maxLength" && (
              <p className="text-red-500">
                {" "}
                Error : message cannot exceed 2000 characters
              </p>
            )}
            <button
              type="submit"
              className="bg-secondary-500 self-center py-2 px-10 rounded-lg hover:text-white transition-all"
            >
              Submit
            </button>
          </motion.form>
          <div className="self-center md:self-start">
            <img src={ContactUsGraphic} alt="contact us graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
