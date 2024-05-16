import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import OussamaImage from '../images/Oussama.jpg';
import closeIcon from '../images/X.svg';
import menuIcon from '../images/menu.svg';

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

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? "flex flex-col gap-4" : "hidden sm:flex flex-row gap-6"}`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title && !isSecondary ? "text-white" : "text-white"
          } hover:text-good-purple text-sm font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
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
      <nav className="fixed w-full flex items-center py-3 top-0 z-20 bg-primary">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative z-10">
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
              Oussama Abderraouf 
              <span className="sm:block hidden">ATTIA</span>
            </p>
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            {/* Toggle button */}
            {toggle ? (
              <img
                src={closeIcon}
                alt="close"
                className="w-6 h-6 mr-2 object-contain cursor-pointer"
                onClick={() => setToggle(false)}
              />
            ) : (
              <img
                src={menuIcon}
                alt="menu"
                className="w-6 h-6 mr-2 object-contain cursor-pointer"
                onClick={() => setToggle(true)}
              />
            )}
            {/* Condensed navbar links */}
            <div className={`p-4 absolute top-14 right-0 mx-2 my-2 min-w-[150px] z-10 bg-primary ${toggle ? "flex flex-col items-center" : "hidden"}`}>
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
