import "../../index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <img
        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
        alt="preview"
        className="logo"
      />
      <span className="header__menu">
        <GiHamburgerMenu color="white" />
        Menu
      </span>
      <form>
        <input placeholder="Search Electronics" className="search" />
      </form>
      <div className="header__icons">
        <span>
          <FaLocationDot color="white" />
          Mumbai, 560087
        </span>
        <FaUser color="white" />
        <FaShoppingCart color="white" />
      </div>
    </header>
  );
}

export default Header;
