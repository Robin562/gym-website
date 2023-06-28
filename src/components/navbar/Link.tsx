import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  page: string;
  selected: string;
  setSelected: (value: string) => void;
}

const Link = ({ page, selected, setSelected }: Props) => {
  const pageLowerCase = page.toLowerCase().replace(/ /g, "");
  const selectedLowerCase: string = selected.toLowerCase();
  return (
    <AnchorLink
      href={`#${pageLowerCase}`}
      onClick={() => {
        setSelected(pageLowerCase);
      }}
      className={`${
        pageLowerCase === selectedLowerCase ? "text-primary-500" : ""
      } hover:text-primary-300 transition-all`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
