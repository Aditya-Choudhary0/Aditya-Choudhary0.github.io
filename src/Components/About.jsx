import React from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade';
import resume from '../files/Aditya_Krishandeo_Choudhary.pdf'
import Aditya_Choudhary from '../images/Aditya_Choudhary.jpg'
import "../css/About.css"

const About = () => {
   
    function redirectToLinkAndDownload() {
        // Redirect Link
        window.open("https://drive.google.com/file/d/1haJSVLwQoB_EeEJjG-fO1fWaMmoTc3lP/view", "_blank");

        // Download Link
        // var link = document.createElement('a');
        // link.href = 'https://drive.google.com/uc?export=download&id=1haJSVLwQoB_EeEJjG-fO1fWaMmoTc3lP';
        // link.click();
    }

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
                            <a href={ resume } id="resume-link-2" target="_blank" rel="noreferrer" download>
                                <button className="resume-button" id="resume-button-2" onClick={redirectToLinkAndDownload}>
                                    <i class="fa fa-download" id="icon" style={{ paddingRight: "10px" }}></i> Resume
                                </button>
                            </a>
                        </div>

                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default About