"use client";
import Image from "next/image";
import Link from "next/link";
import "./Intro.css";
import Projects from "./display_projects"
import { useEffect, useState } from "react";
export default function Home() {
  const[over,setover]=useState(false);
  const[below_scocial,setbelow]=useState(false)

  useEffect(()=>{
    function handlescroll(){
      let scrollInVh = (window.scrollY / window.innerHeight) * 100;
        if(scrollInVh>9.1){
          console.log("yeah")
          console.log(scrollInVh)
          setover(true);
        }else{
          setover(false);
        }
    }
    window.addEventListener("scroll",handlescroll);
    return()=>{

      window.removeEventListener("scroll",handlescroll)
    }
  },[])
  return (
    <div className="board">
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
              <p className="skill_typography">Data Scientists</p>
              <p className="skill_typography">Mobile App Developer</p>
            </div>
          </div>
          <div className="socials">
            <p className="social_text">Socials</p>
            <div className="social_list_box">
              <ul className="social_list">
                <li>
                  Gmail(
                  <a
                    className="gmail"
                    target="blank"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=marfoofficial111@gmail.com"
                  >
                    marfoofficial111
                  </a>
                  )
                </li>
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Resume</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="r2">
          <div className="Ido">
            <p className="whatIdo">What I do</p>
            <p>Making AI Accessible To All Through Mobile Apps</p>
            <div className="grouptext">
              <p>
                Harnessing The Power Of Data To Gather Bussiness Insights
                And Trends
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <Projects name={`projectbox ${over?"move":""}`}></Projects>
    </div>
  );
}
