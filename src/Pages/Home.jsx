import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import cv from '../Images/Pankaj_Singh_Resume.pdf'
import resume from '../Images/resume.png'
export default function Home() {
  return (
    <div id='home'>
      <div id='homeContainer'>
        <div>
          <img src="https://avatars.githubusercontent.com/u/107526796?v=4" alt="" />
        </div>
        <div id='homeText'>
          <h2>Hi There!</h2>
          <h1><span id='user-detail-name'>I am Pankaj Singh</span></h1>
          <div id='typewriter'>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
              words={["Web Developer.", "Full Stack Web Developer.", "MERN Stack Developer"]}
            />
          </div>
          <div style={{gap: '10px',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img width='35px' height='35px' src={resume} alt="resume logo" />
            <h2>
              {/* <a className='name1' target='_blank' rel='noreferrer' href={cv} download >Resume</a> */}
              <a className='name1'
              style={{ textDecoration: "none", color: "#ff3d00" }}
              // target="_blank"
              // href="https://drive.google.com/file/d/1IipT1LQaDd7qkRpNkObyxbefUhl4gFeA/view?usp=share_link"
              href={cv}
              download="Pankaj_Singh_Resume"
              onClick={()=>window.open("https://drive.google.com/file/d/1IipT1LQaDd7qkRpNkObyxbefUhl4gFeA/view?usp=share_link")}
            >
              Resume
            </a>
            
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}