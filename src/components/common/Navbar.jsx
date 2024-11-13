import { Link, NavLink } from "react-router-dom";
import { logoBlue } from "../../assets";
import navLinks from ".";
import Button from "../utils/Button";
import styles from "../../style";

const Navbar = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className={`${styles.boxWidth} ${styles.paddingX}`}>
        <div className={`flex flex-row justify-between items-center py-[15px]`}>
          <Link className="flex items-center">
            <img
              src={logoBlue}
              className="w-[146px] h-[50px] mt-[-5px] object-contain"
              alt=""
            />
          </Link>

          <div className="hidden lg:block">
            <ul className="flex lg:space-x-10">
              {navLinks.map((items) => (
                <li key={items.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-[#1A2580] ${isActive ? "text-[#1A2580]" : ""}`
                    }
                    to={items.link}
                  >
                    {items.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <Button to="/" className="bg-[#1A2580] text-white">
            Explore Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
