import React from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade';
import "../css/Experience.css"

const Experience = () => {

    return (
        <div id="experience" className="experience section">
            {/* <button className='heading-textbtn'> */}
                   <h1 className='mainheading'  style={{ color: "#ffffff",paddingTop:"50px"}}>
                   Experience</h1>
            <div className="intro-section">
                <Fade right duration={2000}>
                    <div id="user-detail-intro" className="about-experience">
                        <Flip bottom duration={3000}>
                            <h2 style={{ color: "#2f2f2f"}}>Qicpic Innovaation Pvt. Ltd. <span style={{fontSize:15,color: "#2f2f2f"}}>(Dec-2024 to May-2025)</span></h2>
                        </Flip>
                        <p> • Worked as a Full Stack Developer, contributing significantly to 3 major in-house applications.<br />
                         • Worked on the backend of the Qicpic mobile app as well as the delivery partner app.<br />
                         • Completed a mini project successfully during the 6 month tenure.<br />
                         • Contributed to both front-end and back-end development in various projects.<br />
                         • Collaborated with cross-functional teams to deliver high-quality results on time.<br /></p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Experience;