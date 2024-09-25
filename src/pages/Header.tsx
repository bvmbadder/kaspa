import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import logo from "../assets/Kaspa-LDSP-Dark-Full-Color.svg";
import Footer from "../layout/Footer";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLink = [
    {
      to: "/about",
      name: "about kaspa",
      dropdownLinks: [
        { name: "about", to: "/about" },
        { name: "vision", to: "/vision" },
        { name: "tokenomics", to: "/tokenomics" },
        { name: "contribution", to: "/contribution" },
        { name: "get involved", to: "/get-involved" },
        { name: "publications", to: "/publications" },
        { name: "media kit", to: "/media-kit" },
      ],
    },
    {
      to: "/issues",
      name: "Issues",
    },
    {
      to: "/",
      name: "resources",
    },
    {
      to: "/",
      name: "developments",
    },
    {
      to: "/",
      name: "mining",
    },
    {
      to: "/",
      name: "news",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full items-center bg-white z-10 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center px-7 py-5 justify-between">
            <NavLink to="/">
              <img src={logo} alt="kaspa" className="w-28 md:w-48" />
            </NavLink>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-3xl focus:outline-none text-pry"
              >
                {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex list-none gap-9 capitalize font-normal text-blackBG">
                {navLink.map((item) => (
                  <div className="relative group" key={item.to}>
                    <NavLink
                      to={item.to}
                      className="uppercase font-light flex items-center"
                    >
                      <span className="cursor-pointer">{item.name}</span>
                      {item.dropdownLinks && <MdArrowDropDown />}
                    </NavLink>

                    {item.dropdownLinks && (
                      <div className="absolute left-0 bg-white shadow-lg hidden group-hover:block pt-10 p-2 pr-10">
                        <ul className="py-2">
                          {item.dropdownLinks.map((link) => (
                            <li key={link.to}>
                              <NavLink
                                to={item.to}
                                className="block px-4 py-2 text-gray-700 uppercase"
                              >
                                {link.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <ul className="flex flex-col gap-4 p-4">
                {navLink.map((item) => (
                  <div key={item.to}>
                    <NavLink
                      to={item.to}
                      className="capitalize  flex items-center justify-between border-b pb-1"
                    >
                      <span className="cursor-pointer">{item.name}</span>
                      {item.dropdownLinks && <MdArrowDropDown />}
                    </NavLink>

                    {item.dropdownLinks && (
                      <ul className="ml-4 mt-2">
                        {item.dropdownLinks.map((link) => (
                          <li key={link.to}>
                            <NavLink
                              to={link.to}
                              className="block py-1 text-gray-700 capitalize border-b pb-1"
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
