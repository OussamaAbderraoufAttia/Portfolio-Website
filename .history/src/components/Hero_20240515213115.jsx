import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import OussamaImage from '../images/Oussama.jpg';
import closeIcon from '../images/x.svg';
import menuIcon from '../images/menu.svg';
import { isMobile } from "react-device-detect";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1WeHR-sPqeZHGi3y1qQy-EFfdDWj6-o8W/view";
    window.open(resumeUrl);
  };

  const toggleLinkTree = () => {
    const linkTree = "https://linktr.ee/oussamaabderraoufattia";
    window.open(linkTree);
  };

  const renderNavLinks = () => (
    <ul className="list-none">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`text-white hover:text-good-purple text-sm font-medium cursor-pointer ${active === link.title ? "font-bold" : ""}`}
          onClick={() => {
            setActive(link.title);
            setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li className="text-white hover:text-good-purple text-sm font-medium cursor-pointer">
        <button onClick={toggleResume}>Resume</button>
      </li>
      <li className="text-white hover:text-good-purple text-sm font-medium cursor-pointer">
        <button onClick={toggleLinkTree}>Find me online!</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="w-full flex items-center py-3 fixed top-0 z-20 bg-primary">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={OussamaImage} alt="logo" className="w-9 h-9 ml-2 object-contain rounded-full" />
            <p className="text-white text-lg font-bold cursor-pointer flex">
              Oussama Abderraouf&nbsp;
              <span className="sm:block hidden">ATTIA</span>
            </p>
          </Link>
          {isMobile && (
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? closeIcon : menuIcon}
                alt="toggle"
                className="w-6 h-6 mr-2 object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            </div>
          )}
        </div>
      </nav>
      {/* Vertical Navbar */}
      {isMobile && toggle && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-30">
          <div className="bg-white p-4 rounded-md shadow-md">
            {renderNavLinks()}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
