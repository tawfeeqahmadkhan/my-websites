import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = (props) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={props.setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => props.setMenuOpen(!props.menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = (props) => {
  return (
    <div className={`navPhone ${props.menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={props.setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>TAWFEEQ.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#About">
      More About 
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:dynotawfeeq@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;