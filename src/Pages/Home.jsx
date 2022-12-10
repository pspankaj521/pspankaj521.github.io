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
          <h1><span className='name1'>I am Pankaj Singh</span></h1>
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
            <h2><a className='name1' target='_blank' rel='noreferrer' href={cv} download >Resume</a></h2>
          </div>
        </div>
      </div>
    </div>
  )
}