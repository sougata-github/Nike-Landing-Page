import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import close from "../assets/icons/close.png";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setToggleMenu(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        {toggleMenu ? (
          <>
            <div
              className="p-20 
            fixed inset-0 min-h-screen
            hidden max-lg:flex 
            flex-col items-center gap-10 justify-center
            rounded-md bg-gray-50 z-20 "
            >
              <ul className="flex items-center flex-col gap-12 py-2 text-lg ">
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
              <div className="w-fit p-[2px] flex items-center">
                <img
                  src={close}
                  alt="close icon"
                  width={18}
                  height={18}
                  onClick={() => setToggleMenu((prev) => !prev)}
                  className="cursor-pointer opacity-50"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              src={hamburger}
              alt="hamburger icon"
              width={22}
              height={22}
              onClick={() => setToggleMenu((prev) => !prev)}
              className="cursor-pointer lg:hidden"
            />
          </>
        )}
      </nav>
    </header>
  );
};

export default Nav;
