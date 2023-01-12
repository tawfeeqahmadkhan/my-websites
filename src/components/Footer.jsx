import React from "react";
import me from "../assets/logo.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMessage,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Tawfeeq khan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://instagram.com/mr__hacker__08__" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/tawfeeqahmadkhan" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://github.com/tawfeeqahmadkhan" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/mr__hacker__08__/inbox" target={"blank"}>
            <AiFillMessage />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;