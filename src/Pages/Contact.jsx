import React from 'react'

export default function Contact() {
  return (
    <div id='contact'>
      <h1 className='name1'  style={{color:"black"}}>Contact</h1>
       

      <div>
        <div id='contactDetails'>

          <div id="contact-phone" style={{width:'200px'}}>
            <img  width='45px' height='45px' color="black" src="https://cdn-icons-png.flaticon.com/128/1034/1034182.png" />
            <h2 >+917683051322</h2>
          </div>
          <div id="contact-email">
            <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/128/831/831357.png" alt="email logo" />
            <h2><a style={{ paddingLeft:'10px' ,textDecoration: 'none',  color: 'black' }} target='_blank' >pankaj.singh2151994@gmail.com</a></h2>
          </div>
          <div id="contact-github">
            <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="github logo" />
            <h2> <a style={{ paddingLeft:'10px' , textDecoration: 'none',  color: 'black'}} target='_blank' href="https://github.com/pspankaj521">pspankaj521</a> </h2>
          </div>
          <div>
            <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png" alt="linkedin logo" />
            <h2> <a style={{paddingLeft:'10px' , textDecoration: 'none',  color: 'black'}} target='_blank' href="https://www.linkedin.com/in/pankaj-singh521/">pankaj-singh521</a></h2>
          </div>
        </div>

        <div id='gif'>
          <img src="https://camo.githubusercontent.com/8ba1e66bcfa048214cf17f235c341742347c9c248831d044aa888acbeec89502/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313239323637372f73637265656e73686f74732f363133393136372f6d656469612f66636637666430633631396262383737303635333330373932343039313566332e676966" alt="" />
        </div>

      </div>

      {/* <h4 id='patent' style={{marginTop:'10vh'}}>Designed and Developed by</h4> */}
    </div>
  )
}