import Logo from "../ui/Logo";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <header
      style={{ gridArea: "header" }}
      className="border border-b-0 border-border-main flex flex-row items-center justify-between px-5"
    >
      <Logo />
      <Searchbar />
    </header>
  );
}

export default Header;
