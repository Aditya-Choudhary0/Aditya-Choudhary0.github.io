import React from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade';
import Aditya_Choudhary from '../images/Aditya_Choudhary.jpg'
import "../css/About.css"

const About = () => {
   
    return (
        <div id="about" className="about section">
            {/* <button className='heading-textbtn'> */}
                   <h1 className='mainheading'  style={{ color: "#D9C5F2",paddingTop:"50px"}}>
                   About</h1>
            <div className="intro-section">
                <Fade left duration={2000}>
                    <div className="illustration">
                        <img src={Aditya_Choudhary} alt="illustartion" className="home-img" style={{borderRadius: "15px"}}/>
                    </div>
                </Fade>
                <Fade right duration={2000}>
                    <div id="user-detail-intro" className="about-me">
                        <Flip bottom duration={3000}>
                            <h1 style={{ color: "#cfcfcf"}}>Hello <span>👋🏻</span></h1>
                        </Flip>
                        <p>An Aspiring Full Stack Web Developer proficient in React, HTML and CSS, and an Enthusiastic Learner. I have always found it fascinating to turn my problem-solving skills and creative ideas into real-world applications.</p>

                        <div className="button">
                            <a href="https://drive.google.com/file/d/1haJSVLwQoB_EeEJjG-fO1fWaMmoTc3lP/view?usp=sharing" id="resume-link-2" rel="noreferrer" download>
                                <button className="resume-button" id="resume-button-2"><i class= "fa fa-download" id="icon" fill="white" style={{paddingRight:"10px"}}></i> Resume</button>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default About