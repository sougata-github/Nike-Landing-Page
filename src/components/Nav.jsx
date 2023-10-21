import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
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
          <div className="bg-black ease-in-out duration-100 py-8 px-5 absolute top-[20px] right-[10px]  hidden max-lg:flex flex-col items-end text-right rounded-lg  z-20">
            <button
              className="my-2 mr-2 font-semibold text-xl leading-none pb-5 text-white"
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              x
            </button>
            <ul className="flex justify-center items-center flex-col gap-12 py-2 text-lg">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-white"
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
