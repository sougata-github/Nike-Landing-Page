import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";
import close from "../assets/icons/close.png";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block transition-all ease-in-out cursor-pointer duration-100">
          <img
            src={toggleMenu ? close : hamburger}
            alt="hamburger icon"
            width={22}
            height={22}
            onClick={() => setToggleMenu((prev) => !prev)}
          />
        </div>
        {toggleMenu && (
          <div
            className=" ease-in-out duration-100 pt-4 pb-8 px-10 transition-all
            absolute top-[75px] right-[40px] 
            hidden max-lg:flex 
            flex-col items-end 
            text-right 
            rounded-md bg-gray-100 z-20"
          >
            <ul className="flex justify-center items-center flex-col gap-12 py-2 text-lg ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-gray-500 hover:text-black"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
