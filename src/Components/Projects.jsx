import React from 'react'
import Slide from 'react-reveal/Slide';
import "../css/Projects.css"
import ForeverCare from '../images/ForeverCare.JPG'
import TripTribe from '../images/TripTribe.JPG'
import Gulmoharimg from '../images/Gulmohar.JPG'
import htmlimg from "../images/mini_icons/icons8-html.svg"
import Cssimg from "../images/mini_icons/icons8-css.svg"
import Javascriptimg from "../images/mini_icons/icons8-javascript.svg"
import reactimg from "../images/mini_icons/icons8-react-native.svg"
import chakraui from "../images/mini_icons/icons8-chakra-ui.svg"
import { Tooltip } from '@chakra-ui/react';
import { AiFillGithub } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";

const Projects = () => {
      const TripTribelink = ()=>{
      window.open("https://triptribe.netlify.app/");
    }
    const TripTribegithublink = ()=>{
      window.open("https://github.com/Aditya-Choudhary0/Trip_Tribe");
    }

    const ForEver_Care = ()=>{
      window.open("https://forevercare.vercel.app/")
    }
    const ForEver_CareGitHub = ()=>{
      window.open("https://github.com/Aditya-Choudhary0/overwrought-skin-2799")
    } 
  const Gulmohar = ()=>{
       window.open("https://kaleidoscopic-axolotl-77aca0.netlify.app/")
    }
    const GulmoharGitHub = ()=>{
       window.open("https://github.com/Aditya-Choudhary0/Gulmohar")
    }

  
 
        return (
          <div className='Projects-maindiv' id='projects'>
             <div className='heading project-title-div'>
                <button className='heading-textbtn'>
                   <h1 className='mainheading'><span style={{ color: "#D9C5F2" }}>My </span>
                   <span style={{ color: "#D9C5F2" }}> Projects</span></h1>
                </button>
             </div>
    
    
             <div className='Projectcards-div'>
               {/* Trip Tribe */}
                <Slide left duration={1500}>
                <div className="card project-card">
                   <div>
                      <img className='projectimage' src={TripTribe} alt="Trip Tribe" />
                      <div className='btnhover'>
                         <button className="Btn project-deployed-link" onClick={TripTribelink}>
                            <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
    
                            <div className="text">Live</div>
                         </button>
    
    
                         <button className="Btn project-github-link" onClick={TripTribegithublink}>
                            <div className="gitnubicon">
                               <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                            </div>
                            <div className="text">Github</div>
                         </button>
                      </div>
    
                      <div className='Tabscreenbtns'>
                         <button  onClick={TripTribelink}>
                            <div>
                               <VscLiveShare />
                               <p>Live</p>
                            </div>
                         </button>
                         <button onClick={TripTribegithublink}>
                            <div className='mobilegitbtn'>
                               <AiFillGithub />
                               <p>Github</p>
                            </div>
                         </button>
                      </div>
    
                   </div>
                   <div className="content">
                      <p className="heading project-title">Trip Tribe</p>
                      <p className="para project-description">
                      Trip Tribe is an innovative and user-friendly travel package booking website that aims to make trip planning a delightful experience for travelers. This platform provides a wide range of curated travel packages for various destinations, offering a seamless booking process and personalized travel experiences.
                      </p>
                      <div className='project-tech-stack techstacks'>
                         <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={htmlimg} alt="html" />
                            </div>
                         </Tooltip>
                         <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={Cssimg} alt="css" />
                            </div>
                         </Tooltip>
                         <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={Javascriptimg} alt="javascript" />
                            </div>
                         </Tooltip>
    
                      </div>
                   </div>
                   <div className='smallscreenbtns'>
                      <button onClick={TripTribelink}>
                         <div>
                            <VscLiveShare />
                            <p>Live</p>
                         </div>
                      </button>
                      <button onClick={TripTribegithublink}>
                         <div className='mobilegitbtn'>
                            <AiFillGithub />
                            <p>Github</p>
                         </div>
                      </button>
                   </div>
    
                </div>
              </Slide>
    
                {/*Forever Care*/}
                <Slide right duration={1500}>
                <div className="card project-card">
                   <div>
                      <img className='projectimage' src={ForeverCare} alt="Forever Care" />
                      <div className='btnhover'>
    
    
                         <button className="Btn project-deployed-link" onClick={ForEver_Care}>
                            <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
    
                            <div className="text">Live</div>
                         </button>
    
    
                         <button className="Btn project-github-link" onClick={ForEver_CareGitHub}>
                            <div className="gitnubicon">
                               <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                            </div>
                            <div className="text">Github</div>
                         </button>
    
                      </div>
    
                      <div className='Tabscreenbtns'>
                         <button onClick={ForEver_Care}>
                            <div>
                               <VscLiveShare />
                               <p>Live</p>
                            </div>
                         </button>
                         <button onClick={ForEver_CareGitHub}>
                            <div className='mobilegitbtn'>
                               <AiFillGithub />
                               <p>Github</p>
                            </div>
                         </button>
                      </div>
    
    
                   </div>
                   <div className="content">
                      <p className="heading project-title">Forever Care
                      </p><p className="para project-description">
                      Forever Care is a doctor consultation booking website. The website can be easily navigated according to our needs. This collaborative project utilizes HTML, CSS, and JavaScript for the frontend development, while the backend is supported by a JSON server.
                      </p>
                      <div className='project-tech-stack techstacks-fashion'>

                        <Tooltip label="React" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={reactimg} alt="React" />
                            </div>
                         </Tooltip>
                         <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={chakraui} alt="chakraui" />
                            </div>
                         </Tooltip>
                         <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={htmlimg} alt="html" />
                            </div>
                         </Tooltip>
                         <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={Cssimg} alt="css" />
                            </div>
                         </Tooltip>
                         <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={Javascriptimg} alt="javascript" />
                            </div>
                         </Tooltip>
    
                      </div>
                   </div>
                   <div className='smallscreenbtns'>
                      <button onClick={ForEver_Care}>
                         <div>
                            <VscLiveShare />
                            <p>Live</p>
                         </div>
                      </button>
                      <button onClick={ForEver_CareGitHub}>
                         <div className='mobilegitbtn'>
                            <AiFillGithub />
                            <p>Github</p>
                         </div>
                      </button>
                   </div>
    
                </div>
            </Slide>
    
                {/* Gulmohar*/}
                <Slide left duration={1500}>
                <div className="card project-card">
                   <div>
                      <img className='projectimage' src={Gulmoharimg} alt="Gulmohar" />
                      <div className='btnhover'>
    
    
                         <button className="Btn project-deployed-link" onClick={Gulmohar}>
                            <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
    
                            <div className="text">Live</div>
                         </button>
    
    
                         <button className="Btn project-github-link" onClick={GulmoharGitHub}>
                            <div className="gitnubicon">
                               <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                            </div>
                            <div className="text">Github</div>
                         </button>
    
                      </div>
    
                      <div className='Tabscreenbtns'>
                         <button onClick={Gulmohar}>
                            <div>
                               <VscLiveShare />
                               <p>Live</p>
                            </div>
                         </button>
                         <button onClick={GulmoharGitHub}>
                            <div className='mobilegitbtn'>
                               <AiFillGithub />
                               <p>Github</p>
                            </div>
                         </button>
                      </div>
    
    
                   </div>
                   <div className="content">
                      <p className="heading project-title">Gulmohar
                      </p><p className="para project-description">
                      The Gulmohar is a E-commerce website of flowers and gift delivery. This colaborative project utilizes HTML, CSS, and JavaScript for the frontend development,while the backend is supported by a fakestore api.
                      </p>
                      <div className='project-tech-stack techstacks-fashion'>
    
                         <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={htmlimg} alt="html" />
                            </div>
                         </Tooltip>
                         <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={Cssimg} alt="css" />
                            </div>
                         </Tooltip>
                         <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={Javascriptimg} alt="javascript" />
                            </div>
                         </Tooltip>
    
                      </div>
                   </div>
                   <div className='smallscreenbtns' onClick={Gulmohar}>
                      <button>
                         <div>
                            <VscLiveShare />
                            <p>Live</p>
                         </div>
                      </button>
                      <button onClick={GulmoharGitHub}>
                         <div className='mobilegitbtn'>
                            <AiFillGithub />
                            <p>Github</p>
                         </div>
                      </button>
                   </div>
    
                </div>
                </Slide>
                {/* Trip Tribe
                <Slide left duration={1500}>
                <div className="card project-card">
                   <div>
                      <img className='projectimage' src={TripTribe} alt="Trip Tribe" />
                      <div className='btnhover'>
                         <button className="Btn project-deployed-link" onClick={TripTribelink}>
                            <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
    
                            <div className="text">Live</div>
                         </button>
    
    
                         <button className="Btn project-github-link" onClick={TripTribegithublink}>
                            <div className="gitnubicon">
                               <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                            </div>
                            <div className="text">Github</div>
                         </button>
                      </div>
    
                      <div className='Tabscreenbtns'>
                         <button  onClick={TripTribelink}>
                            <div>
                               <VscLiveShare />
                               <p>Live</p>
                            </div>
                         </button>
                         <button onClick={TripTribegithublink}>
                            <div className='mobilegitbtn'>
                               <AiFillGithub />
                               <p>Github</p>
                            </div>
                         </button>
                      </div>
    
                   </div>
                   <div className="content">
                      <p className="heading project-title">Trip Tribe</p>
                      <p className="para project-description">
                      Trip Tribe is an innovative and user-friendly travel package booking website that aims to make trip planning a delightful experience for travelers. This platform provides a wide range of curated travel packages for various destinations, offering a seamless booking process and personalized travel experiences.
                      </p>
                      <div className='project-tech-stack techstacks'>
                         <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={htmlimg} alt="html" />
                            </div>
                         </Tooltip>
                         <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={Cssimg} alt="css" />
                            </div>
                         </Tooltip>
                         <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                            <div className='icon-background'>
                               <img className='iconimg' src={Javascriptimg} alt="javascript" />
                            </div>
                         </Tooltip>
    
                      </div>
                   </div>
                   <div className='smallscreenbtns'>
                      <button onClick={TripTribelink}>
                         <div>
                            <VscLiveShare />
                            <p>Live</p>
                         </div>
                      </button>
                      <button onClick={TripTribegithublink}>
                         <div className='mobilegitbtn'>
                            <AiFillGithub />
                            <p>Github</p>
                         </div>
                      </button>
                   </div>
    
                </div>
              </Slide> */}
    </div>
    </div>


)
}
export default Projects

