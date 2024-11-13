import { Link, NavLink } from "react-router-dom";
import { logoBlue } from "../../assets";
import navLinks from ".";
import Button from "../utils/Button";
import styles from "../../style";

const Navbar = () => {
  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className={`${styles.boxWidth} ${styles.paddingX}`}>
        <div className={`flex flex-row justify-between items-center py-[15px]`}>
          <Link to="/" className="flex items-center">
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
                      `text-[16px] font-medium leading-[24px] hover:text-bluee ${
                        isActive ? "text-bluee" : ""
                      }`
                    }
                    to={items.link}
                  >
                    {items.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <Button
            to="/explore"
            className="bg-bluee text-[20px] font-medium leading-[30px] text-white py-2 px-[25px] hover:bg-blueHover hover:ease-in-out duration-500 hover:transition-all"
          >
            Explore Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
