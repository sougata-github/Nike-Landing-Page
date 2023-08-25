import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      className="padding-x py-8 absolute z-10 w-full"
      data-aos="fade-down"
    >
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

        {toggleMenu ? (
          <div className="bg-gray-100 transition-all ease-in-out duration-100 px-2 py-0 absolute top-[20px] right-0  hidden max-lg:block text-right rounded-sm">
            <button
              className="my-2 mr-2 font-semibold text-xl text-slate-500 leading-none"
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              x
            </button>
            <ul className="flex justify-center items-center flex-col gap-1 py-2 text-lg">
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
          </div>
        ) : (
          <div className="hidden max-lg:block">
            <img
              src={hamburger}
              alt="hamburger icon"
              width={25}
              height={25}
              onClick={() => setToggleMenu(true)}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
