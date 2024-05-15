import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import OussamaImage from '../images/Oussama.jpg';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1WeHR-sPqeZHGi3y1qQy-EFfdDWj6-o8W/view";
    window.open(resumeUrl);
  };
  const togglelinkTree = () => {
    const linkTree = "https://linktr.ee/oussamaabderraoufattia";
    window.open(linkTree);
  };

  useEffect(() => {
    if (toggle) {
      setActive("");
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? "flex sm:hidden" : "hidden sm:flex"} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-white" : isSecondary ? "text-secondary" : "text-white"
          } hover:text-white text-[20px] font-medium cursor-pointer`}
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
      <li className={`text-${isSecondary ? "secondary" : "white"} hover:text-white text-[20px] font-medium cursor-pointer`}>
        <button onClick={toggleResume}>Resume</button>
      </li>

      <li className={`text-${isSecondary ? "good-purple" : "white"} hover:text-good-purple text-[20px] font-medium cursor-pointer`}>
        <button onClick={togglelinkTree}>Find me online!</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={OussamaImage} alt="logo" className="w-9 h-9 object-contain rounded-full" />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              Oussama Abderraouf&nbsp;
              <span className="sm:block hidden">ATTIA</span>
            </p>
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : "https://lohitcdn.blob.core.windows.net/portfoliocdn/Etc/menu.svg"}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${toggle ? "flex" : "hidden"}`}>
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
