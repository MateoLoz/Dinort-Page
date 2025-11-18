import "../app/globals.css";

type HamburgerProps = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
};

const Hamburger = ({ setMenu, menu }: HamburgerProps) => {
  return (
    <>
      <label className="hamburger-menu">
        <input
          type="checkbox"
          className="peer"
          onClick={() => setMenu(!menu)}
        />
      </label>
    </>
  );
};

export default Hamburger;
