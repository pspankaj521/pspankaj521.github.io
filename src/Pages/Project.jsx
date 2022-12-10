import React from 'react'
import Co_Schedule from "../Images/Co-Schedule.png"
// import geek from "../images/Geek-Buying.png";
import Email_Trap from "../Images/Email_Trap.png"
import { motion } from 'framer-motion'

export default function Project() {

  const slideLeft = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  }

  const slideRight = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  }

  return (
    <div id='project'>
      <h1 className='projectText name1'>Projects</h1>
      <h3 className='projectText'>Here are a few projects I've worked on recently.</h3>


      <motion.div initial='hidden' whileInView='visible' variants={slideLeft} >
        <div className='p1'>

          <div>
            <img src={Email_Trap} alt="Email_Trap project image" />
            <h2 className='projectText name1'>Tech Stack</h2>
            <div className='techStack'>
              <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </div>
          </div>

          <div>
            <h2 className='projectText name1'>Mailtrap Clone</h2>
            <li className='projectUl'> Mailtrap is a fake SMTP server designed to test, view, and share emails sent from the development and staging environments without spamming real customers or flooding your own inboxes.</li>
            <li className='projectUl'>Users can login and SignUp</li>
            <li className='projectUl'>User can see pages of email testing</li>
            <div className='p1Btn'>
              <button><a href="https://super-pithivier-ba36c1.netlify.app/" target='_blank' >Live</a></button>
              <button><a href="https://github.com/SubhadeepBid/alleged-partner-6503" target='_blank' >View Code</a> </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial='hidden' whileInView='visible' variants={slideRight} >
        <div className='p1'>
          <div>
            <img src={Co_Schedule} alt="Co_Schedule project image" />
            <h2 className='projectText name1'>Tech Stack</h2>
            <div className='techStack'>
              <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
              {/* <img src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" alt="" /> */}
              {/* <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" /> */}
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </div>
          </div>

          <div>
            <h2 className='projectText name1'>Co-Schedule Clone</h2>
            <li className='projectUl'>CoSchedule is marketing management website for marketers. CoSchedule provide marketers with tools & training that are uniquely helpful, fun to use, & consistently punch above their weight.</li>
            <li className='projectUl'>Users can see product page and other pages </li>
            <li className='projectUl'>Users can login and SignUp</li>
            <div className='p1Btn'>
              <button><a href="https://fascinating-brigadeiros-d32345.netlify.app/" target='_blank' >Live</a></button>
              <button><a href="https://github.com/ShashankSinha9592/-safe-drain-4510" target='_blank' >View Code</a> </button>
            </div>
          </div>
        </div>
      </motion.div>

    


      {/* <motion.div initial='hidden' whileInView='visible' variants={slideLeft} >
        <div className='p1'> */}

          {/* <div>
            <img src={rel} alt="Boat project image" />
            <h2 className='projectText name1'>Tech Stack</h2>
            <div className='techStack'>
              <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </div>
          </div>

          <div>
            <h2 className='projectText name1'>Reliance-Digital Clone</h2>
            <li className='projectUl'>Reliance is one of the most profitable companies in India, the largest publicly traded company in India by market capitalisation.</li>
            <li className='projectUl'>Users can login and SignUp</li>
            <li className='projectUl'>Users can add product to Cart</li>
            <li className='projectUl'>User can see the products in the Home Page</li>
            <div className='p1Btn'>
              <button><a href="https://reliance-app.netlify.app" target='_blank' >Live</a></button>
              <button><a href="https://github.com/meshiv5/plastic-zephyr-2114" target='_blank' >View Code</a> </button>
            </div>
          </div>
        </div>
      </motion.div> */}


    </div>
  )
}