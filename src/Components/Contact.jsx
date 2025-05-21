import React from 'react'
import { Fade } from 'react-reveal'
import "../css/Contact.css"
import "font-awesome/css/font-awesome.min.css"
const Contact = () => {

  const Github =()=>{
    window.open("https://github.com/Aditya-Choudhary0");
  }

  const LinkedIn=()=>{
    window.open("https://www.linkedin.com/in/aditya-choudhary-08134a243")
  }

  
  return (
    <div id="contact">
      <button className='heading-textbtn'>
          <h1 className='mainheading'><span style={{ color: "#D9C5F2",paddingBottom:"100px" }}>Get in touch 💬 </span></h1>
        </button>
      <Fade duration={5000}>
        <p className="para" style={{paddingTop:"20px"}}>Feel free to get in touch with me for any inquiries, collaboration opportunities, or just to say hello! I'm always excited to connect with like-minded individuals, businesses, and organizations who are passionate about technology and innovation.</p>
      </Fade>
      <br/>
      <Fade left cascade duration={1500}>
        <div className="contact-links">
          <div className="contact-icons" id="contact-github" onClick={Github}>
          <i className="fa fa-github"></i>
            <p onClick={Github} >github.com/Aditya-Choudhary0</p>
          </div>
          <div className="contact-icons" id="contact-linkedin" onClick={LinkedIn}>
          <i className="fa fa-linkedin"></i>
            <p>in/aditya-choudhary-08134a243</p>
          </div>
          <a href="mailto:adityanerves@gmail.com" className="contact-icons" id="contact-email">
          <i className="fa fa-envelope"></i>
            <p>adityanerves@gmail.com</p>
          </a>
          <a href="#contact" className="contact-icons" id="contact-phone">
          <i class="fa fa-phone"></i>
            <p>+91 7775975460</p>
          </a>
        </div>
      </Fade>
    </div>
  )
}

export default Contact