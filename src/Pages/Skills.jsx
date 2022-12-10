import { motion } from 'framer-motion';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function Skills() {

  const slidetop = {
    hidden: { opacity: 0, y: 30 },
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
    <div id='skills'>
      <h1 >Professional <span className='name1' >Skillset</span> </h1>

      <h1 className='skillDes'>Frontend</h1>

      <div className='haba'>

        <motion.div initial='hidden' whileInView='visible' variants={slidetop} >
          <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="javascript logo" />
          <h4>JavaScript</h4>
        </motion.div>


        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="html logo" />
          <h4>HTML </h4></motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css logo" />
          <h4>CSS </h4></motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" alt="react logo" />
          <h4>React </h4></motion.div>
        {/* <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://opencollective-production.s3.us-west-1.amazonaws.com/ada636e0-395b-11ea-8ab7-b3f0317bbc7c.png" alt="material ui logo" />
          <h4>Material UI </h4></motion.div> */}
      </div>

      <h1 className='skillDes'>Backend</h1>
      <div className='haba haba1' style={{ width: '34%', gap: '5vw', margin: 'auto' }}>
        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="nodeJS logo" />
          <h4>NodeJS </h4></motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img height='80px' src="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?pid=ImgDet&rs=1" alt="express logo" />
          <h4>Express </h4></motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://mpng.subpng.com/20190401/zsf/kisspng-mongodb-document-oriented-database-nosql-openshift-web-app-development-servcie-in-dehradun-5ca1b8cb8a0f32.3708278115541024755655.jpg" alt="mongoDb logo" />
          <h4>MongoDB </h4></motion.div>
      </div>

      <h1 className='skillDes'> <span className='name1'>Tools</span> I use</h1>
      <div className='haba haba1' style={{ width: '34%', gap: '5vw', margin: 'auto' }}>
        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://cdn-icons-png.flaticon.com/512/906/906324.png" alt="vscode logo" />
          <h4>VS Code </h4></motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png" alt="github logo" />
          <h4>GitHub </h4></motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={slidetop} ><img src="https://image.pngaaa.com/42/95042-middle.png" alt="postman logo" />
          <h4>Postman </h4></motion.div>
      </div>

      <h1 className='skillDes'>My <span className='name1'>Statistics</span></h1>
      <div id='stats'>
        <img width="70%" height="80%" src="https://camo.githubusercontent.com/3c91878355b8f53a3ab22b0fb3c4cb4e8f0df4b95584d413a4de1bdc0011f2d5/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d707370616e6b616a3532312673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="stat" />
        <img src="https://camo.githubusercontent.com/0d344b6fbed3da68cd325861ae09b72f284f18ec97c4511247ca56de3f99f48a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d707370616e6b616a3532312673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="stat" />
      </div>

      <h1 className='skillDes'>Days I <span className='name1'>Code</span></h1>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20vh' }}>
        <GitHubCalendar username="pspankaj521" />
      </div>
    </div >
  )
}