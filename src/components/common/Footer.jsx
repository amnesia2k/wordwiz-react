import { Link, NavLink } from "react-router-dom";
import { footerLinks } from ".";
import { apple, google, logoWhite } from "../../assets";
import styles from "../../style";
import Button from "../utils/Button";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={`bg-footerBlue ${styles.padding}`}>
      <div>
        <div className={`flex flex-col md:flex-row justify-between`}>
          <div className="flex flex-col items-start gap-4 max-w-[327px]">
            <Link to="/">
              <img
                className="w-[228px] h-[79px]"
                src={logoWhite}
                alt="wordwiz-logo"
              />
            </Link>
            <h1 className="text-start text-[20px] text-white leading-[24.38px]">
              We are committed to improving your spelling skills and overall
              knowledge.
            </h1>
            <hr className="w-full border" />
          </div>

          <div className="flex flex-col md:flex-row gap-20 text-white">
            {footerLinks.map((footerLink) => (
              <div key={footerLink.key}>
                <h4 className="text-[24px] leading-[29.26px] font-bold mb-5">
                  {footerLink.title}
                </h4>
                <ul>
                  {footerLink.Links.map((link, index) => (
                    <li
                      className={`${
                        index !== footerLink.Links.length - 1 ? "mb-3" : "mb-0"
                      }`}
                      key={link.id}
                    >
                      <NavLink
                        className={`hover:underline text-[20px] leading-[24.38px] font-medium `}
                        to={link.link}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-[24px] text-white leading-[29.26px] font-bold mb-5">
              Choose your Language
            </h4>
            <div className="flex justify-between items-center gap-2">
              <select
                className="p-2 text-[20px] leading-[30px] font-semibold w-[250px] cursor-pointer"
                name=""
                id=""
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
              <Button
                className={`border rounded-sm shadow-sm py-[5px] px-4 text-white text-[24px] leading-[36px] font-bold`}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="text-white flex flex-col">
            <h4 className="text-[20px] leading-[24.38px] font-medium pb-5">
              Check out our Socials
            </h4>
            <div className="flex gap-7">
              <a href="#">
                <FaFacebookF size={28} />
              </a>
              <a href="#">
                <FaLinkedinIn size={28} />
              </a>
              <a href="#">
                <FaXTwitter size={28} />
              </a>
              <a href="#">
                <IoMdMail size={28} />
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#">
              <img src={apple} alt="apple_app_store" />
            </a>
            <a href="#">
              <img src={google} alt="google_play_store" />
            </a>
          </div>
        </div>

        <div className="mt-20">
          <hr className="mb-5" />
          <h4 className="text-[20px] leading-[30px] font-normal text-white text-center">&copy; 2024 WordWiz. All Right Reserved.</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
