import React from 'react'
import { Fade } from 'react-reveal';
import "../css/Github.css"
import ReactGithubCalendar from "react-github-calendar";

const Github = () => {

  return (
    <div className="stats" id="statistics" style={{paddingTop:"60px"}}>
      <div className='heading-div'>
        <button className='heading-textbtn'>
          <h1 className='mainheading'><span style={{ color: "#D9C5F2",paddingBottom:"100px" }}>Git </span><span style={{ color: "#D9C5F2" }}>Stat's</span></h1>
        </button>
      </div>
      <Fade bottom cascade duration={1500}>
      <div className="github-calender-div">
        <div className="calendar-container calendar react-activity-calendar">
          <ReactGithubCalendar
            username={"Aditya-Choudhary0"}
            style={{ margin: "auto" }}
            classForValue={(value) => `contribution-level-${value.count}`}

          />
        </div>
        </div>
        </Fade>
      <Fade bottom cascade duration={1500}>
        <div className="github-charts">
          <img src="https://github-readme-streak-stats.herokuapp.com?user=Aditya-Choudhary0&theme=prussian&type=png" alt="github-streaks" id="github-streak-stats" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aditya-Choudhary0&theme=prussian&layout=compact" alt="languages-chart" height="195px" width="400px" id="github-top-langs" />
          <img src="https://github-readme-stats.vercel.app/api?username=Aditya-Choudhary0&theme=prussian" alt="readme-stats" id="github-stats-card" />
        </div>
      </Fade>
    </div>
  )
}

export default Github