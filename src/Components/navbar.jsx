import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import resume from "../Images/resume.png";
import home from "../Images/house (1).png";
import about from "../Images/man.png";
import phone from "../Images/contact.png";
import project from "../Images/idea.png";
import skills from "../Images/pencil.png";

export default function Navbar() {
  let handleClick = () => {
    document.querySelector("#headers").classList.toggle("active");
  };

  return (
    <div id="navbar">
      <div>
        <h1 id="name">Pankaj Singh</h1>
        <img
          id="img"
          onClick={handleClick}
          src="https://cdn-icons-png.flaticon.com/512/7711/7711100.png"
        />
      </div>
      <div id="headers">
        <div className="icons">
          <img width="20px" height="20px" src={home} alt="resume logo" />
          <h2>
            <Link smooth to="#home" className="link">
              Home
            </Link>
          </h2>
        </div>

        <div className="icons">
          <img width="20px" height="20px" src={about} alt="resume logo" />
          <h2>
            <Link smooth to="#about" className="link">
              About me
            </Link>
          </h2>
        </div>

        
        <div className="icons">
          <img width="20px" height="20px" src={project} alt="resume logo" />
          <h2>
            <Link smooth to="#project" className="link">
              Project
            </Link>
          </h2>
        </div>
        <div className="icons">
          <img width="20px" height="20px" src={skills} alt="resume logo" />
          <h2>
            <Link smooth to="#skills" className="link">
              Skills
            </Link>
          </h2>
        </div>
        <div className="icons">
          <img width="20px" height="20px" src={phone} alt="resume logo" />
          <h2>
            <Link smooth to="#contact" className="link">
              Contact
            </Link>
          </h2>
        </div>
        <div className="icons">
          <img width="20px" height="20px" src={resume} alt="resume logo" />
          <h2>
            <a
              style={{ textDecoration: "none", color: "#ff3d00" }}
              // target="_blank"
              // href="https://drive.google.com/file/d/1IipT1LQaDd7qkRpNkObyxbefUhl4gFeA/view?usp=share_link"
              href={resume}
              download="Pankaj_Singh_Resume"
              onClick={()=>window.open("https://drive.google.com/file/d/1IipT1LQaDd7qkRpNkObyxbefUhl4gFeA/view?usp=share_link")}
            >
              Resume
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
