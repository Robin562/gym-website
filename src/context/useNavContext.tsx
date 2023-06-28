import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type ChildrenType = {
  children: ReactNode | ReactNode[];
};

const initContextState = {
  selected: "",
  setSelected: () => {},
  isOnTop: true,
  setIsOnTop: () => {},
};
type InitContextStateType = {
  selected: string;
  setSelected: (value: string) => void;
  isOnTop: boolean;
  setIsOnTop: (value: boolean) => void;
};
const NavContext = createContext<InitContextStateType>(initContextState);

const NavProvider = ({ children }: ChildrenType) => {
  const [selected, setSelected] = useState<string>("home");
  const [isOnTop, setIsOnTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsOnTop(true);
        setSelected("home");
      } else {
        setIsOnTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  return (
    <NavContext.Provider value={{ selected, setSelected, isOnTop, setIsOnTop }}>
      {children}
    </NavContext.Provider>
  );
};

const useGlobalContext = () => useContext(NavContext);

export default NavProvider;
export { useGlobalContext };
