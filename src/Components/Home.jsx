import React from 'react';
import "../css/Home.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: ['A FullStack Developer', 'A MERN Stack Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const githublink = () => {
    window.open("https://github.com/Aditya-Choudhary0");
  };

  const emaillink = () => {
    window.location.href = 'mailto:adityanerves@gmail.com';
  };

  const linkedinlink = () => {
    window.open("https://www.linkedin.com/in/aditya-choudhary-08134a243/");
  };

  return (
    <div className='intro-main' id="home" style={{ paddingTop: "90px" }}>
      
      <div className='intro-main-img-div'>
        <div className='intro-main-text-div' style={{ color: "whitesmoke",}}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h1 className='nameh1tag' id="user-detail-name" >
              <span style={{ color: "whitesmoke"}}>Hi, I'm Aditya</span>
            </h1>

            <h2 className='typewriter'>
              {text} <span><Cursor cursorStyle="A" /></span>
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='devloperimg-div'
            >
              <iframe className="devloperimg" src="https://giphy.com/embed/m6pvmOSXuTEPaKFWBz" ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='socialamedialogos'
          >
            <motion.div onClick={githublink} id="contact-github"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <FaGithub className='icon-github' />
            </motion.div>
            <motion.div onClick={emaillink} id="contact-email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <MdAlternateEmail className='icon-email' />
            </motion.div>
            <motion.div onClick={linkedinlink}  id="contact-linkedin"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <AiFillLinkedin className='icon-linkedin' />
            </motion.div>
          </motion.div>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
