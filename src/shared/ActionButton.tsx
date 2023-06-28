import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactNode } from "react";

type ChildrenType = {
  name: ReactNode;
  setSelected: (value: string) => void;
};

const ActionButton = ({ name, setSelected }: ChildrenType) => {
  return (
    <AnchorLink
      className="self-between whitespace-nowrap bg-secondary-500 px-10 py-2 rounded-md hover:bg-primary-500 hover:text-white hover:cursor-pointer"
      onClick={() => {
        setSelected("contactus");
      }}
    >
      {name}
    </AnchorLink>
  );
};

export default ActionButton;
