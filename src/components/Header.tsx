import Logo from "../ui/Logo";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <header
      style={{ gridArea: "header" }}
      className="border border-border-main flex flex-row items-center justify-between"
    >
      <Logo />
      <Searchbar />
    </header>
  );
}

export default Header;
