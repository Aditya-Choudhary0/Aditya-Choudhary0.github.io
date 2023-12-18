import React from 'react'
import Fade from 'react-reveal/Fade'
import "../css/Footer.css"

const Footer = () => {
  return (
    <div id="footer">
      <Fade duration={3000}>
        <h3 className="footer-text">👩🏻‍💻 Made by Aditya</h3>
        <h1 className="footer-text">Thank You for visiting</h1>
        <h4 className="footer-text">&copy; 2023 All rights reseved</h4>
      </Fade>
    </div>
  )
}

export default Footer