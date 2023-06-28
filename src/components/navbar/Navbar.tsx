import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { useState } from "react";
import Link from "./Link";
import { useGlobalContext } from "@/context/useNavContext";
import ActionButton from "@/shared/ActionButton";

const Navbar = () => {
  const { selected, setSelected, isOnTop } = useGlobalContext();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav
      className={`z-40 fixed w-full py-4 ${
        isOnTop ? "" : "bg-primary-100 shadow"
      }`}
    >
      <div className="m-auto w-[90%] flex justify-between gap-8 ">
        <div className="flex w-full justify-between sm:w-auto">
          <img src={Logo} alt="logo" className="self-center"></img>

          {/* Open Button */}
          <button
            className="rounded-full bg-secondary-500 p-2 text-white sm:hidden"
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <Bars3Icon className="w-[20px]" />
          </button>
        </div>

        <div className="hidden w-full flex-row justify-between text-sm sm:flex">
          {/* left */}
          <ul className="flex list-none flex-row justify-between gap-4 self-center">
            <li>
              <Link
                page={"Home"}
                selected={selected}
                setSelected={setSelected}
              />
            </li>
            <li>
              <Link
                page={"Benefits"}
                selected={selected}
                setSelected={setSelected}
              />
            </li>
            <li>
              <Link
                page={"Our Classes"}
                selected={selected}
                setSelected={setSelected}
              />
            </li>
            <li>
              <Link
                page={"Contact Us"}
                selected={selected}
                setSelected={setSelected}
              />
            </li>
          </ul>
          {/* right */}
          <div className="flex flex-row gap-4">
            <a
              href=""
              className="whitespace-nowrap self-center hover:underline"
            >
              Sign in
            </a>
            <ActionButton name="Become a Member" setSelected={setSelected} />
          </div>
        </div>
      </div>

      {/* SIDEBAR */}

      <div
        className={`${
          showSidebar ? "w-[300px]" : "w-0"
        }  fixed right-0 bottom-0 h-screen bg-primary-100 z-40 flex list-none flex-col gap-4 sm:hidden overflow-hidden transition-all duration-500 drop-shadow-xl`}
      >
        <button
          className="m-4 p-4 self-end hover:text-gray-400"
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <XMarkIcon className="w-[20px]" />
        </button>
        <ul className="self-center flex flex-col gap-4 text-lg ">
          <li>
            <Link page={"Home"} selected={selected} setSelected={setSelected} />
          </li>
          <li>
            <Link
              page={"Benefits"}
              selected={selected}
              setSelected={setSelected}
            />
          </li>
          <li>
            <Link
              page={"Our Classes"}
              selected={selected}
              setSelected={setSelected}
            />
          </li>
          <li>
            <Link
              page={"Contact Us"}
              selected={selected}
              setSelected={setSelected}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
