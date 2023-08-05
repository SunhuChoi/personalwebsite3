import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import headerImg from "../assets/mypfp.jpg";
import "../styles/Home.css";

export const Home = () => {


  return (
    <div className="home">
      <div className="about">
        <img src={headerImg} alt="Oh hi"></img>
        <h2>Hello, my name is Sunhu Choi</h2>
        <div className="prompt">
          <h4>Student at UCSB, aspiring SWE</h4>
          <BiLogoLinkedinSquare
            onClick={() =>
              window.open("https://www.linkedin.com/in/sunhuchoi/", "_blank")
            }
          />
          <BiLogoGithub
            onClick={() =>
              window.open("https://github.com/SunhuChoi", "_blank")
            }
          />
          <a href="mailto:svnhuchoi@gmail.com">
            <BiLogoGmail />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          {/* <li className="item">
            <h2>Front-End</h2>
            <span>Hello</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Hi</span>
          </li> */}
          <li className="item">
            <h2>Languages</h2>
            <span>C++, Java, JavaScript, Python, Assembly</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
