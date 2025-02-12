import Image from "next/image";
import Link from "next/link";
import "./my.css";
export default function Home() {
  return (
    <div className="Main">
      <div className="r1">
        <div className="imagebox">
          <div className="image"></div>
          <p className="Myname">Derrick Marfo</p>
        </div>
        <div className="skillbox">
          <h1 className="title">Portfolio</h1>
          <div className="skills">
            <p className="skill_typography">Machine Learning Engineer</p>
            <p className="skill_typography">Data Scientist</p>
            <p className="skill_typography">Mobile App Developer</p>
          </div>
        </div>
        <div className="socials">
          <p className="social_text">Socials</p>
          <div className="social_list_box">
            <ul className="social_list">
              <li>Gmail: <a href="www.google.com" target="blank">marfoofficial111@gmail.com</a></li> 
              <li>LinkedIn</li> 
              <li>GitHub</li> 
              <li>Resume</li> 

            </ul>
          </div>
         
        </div>
      </div>
      <div className="r2"></div>
    </div>
  );
}
