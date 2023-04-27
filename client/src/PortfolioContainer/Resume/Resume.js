import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import index from "react-typical";

export default function Resume(props){
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
        
          //here we have
          const programmingSkillsDetails = [
            { skill: "JavaScript", ratingPercentage: 50 },
            { skill: "ReactJs", ratingPercentage: 50 },
            { skill: "Typescript", ratingPercentage: 50 },
            { skill: "NestJs", ratingPercentage: 50 },
            { skill: "NodeJs", ratingPercentage: 50 },
            { skill: "HTML", ratingPercentage: 80 },
            { skill: "PHP", ratingPercentage: 50 },
            { skill: "CSS", ratingPercentage: 80 },
          ];
        
          const projectsDetails = [
            {
              title: "Personal Portfolio Website",
              duration: { fromDate: "2021", toDate: "2022" },
              description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
              subHeading: "Technologies Used: React JS, Bootsrap",
            },
            {
              title: "Ecommerce Website ",
              duration: { fromDate: "2020", toDate: "2021" },
              description:
                "Online ecommerce website for showcasing and selling products onlne with payment system integration",
              subHeading:
                "Technologies Used: HTML, CSS, PHP, Bootstrap.",
            },
            {
              title: "Todo list",
              duration: { fromDate: "2022", toDate: "2022" },
              description:
                "A Todo list that makes you Create, Update, or Delete.",
              subHeading:
                "Technologies Used: Javascript, Bootstrap, Nestjs, Reactjs.",
            },
          ];
        
          const resumeDetails = [
            <div className="resume-screen-container" key="education">
              <ResumeHeading
                heading={"Bataan Heroes College"}
                subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
                fromDate={"2018"}
                toDate={"2022"}
              />
        
              <ResumeHeading
                heading={"Bagac National HighSchool"}
                subHeading={"Secondary"}
                fromDate={"2011"}
                toDate={"2015"}
              />
              <ResumeHeading
                heading={"Parang Elementary School "}
                subHeading={"Primary"}
                fromDate={"2006"}
                toDate={"2011"}
              />
            </div>,
        
            /* WORK EXPERIENCE */
            <div className="resume-screen-container" key="work-experience">
              <div className="experience-container">
                <ResumeHeading
                  heading={"FREELANCE"}
                  subHeading={"Backend Developer Nodejs(NESTJS FRAMEWORK)"}
                  fromDate={"2022"}
                  toDate={"2023"}
                />
                <div className="experience-description">
                  <span className="resume-description-text">
                  Design, develop, and maintain server-side applications using NestJS. Collaborate with team members to plan, design, and implement new features and functionality. Ensure the quality and performance of code through testing and debugging. Stay up-to-date with the latest trends and best practices in web development.
                  </span>
                </div>
              </div>
            </div>,
        
            /* PROGRAMMING SKILLS */
            <div
              className="resume-screen-container programming-skills-container"
              key="programming-skills"
            >
              {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                  <div className="heading-bullet"></div>
                  <span>{skill.skill}</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: skill.ratingPercentage + "%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
              ))}
            </div>,
        
            /* PROJECTS */
            <div className="resume-screen-container" key="projects">
              {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                  key={index}
                  heading={projectsDetails.title}
                  subHeading={projectsDetails.subHeading}
                  description={projectsDetails.description}
                  fromDate={projectsDetails.duration.fromDate}
                  toDate={projectsDetails.duration.toDate}
                />
              ))}
            </div>,
        
            /* Interests */
            <div className="resume-screen-container" key="interests">
              <ResumeHeading
                heading="Coding"
                description="Coding a lot to sharpen my mind, rewire my brain, and provide company or client with great Web application or Software."
              />
              <ResumeHeading
                heading="Music"
                description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
              />
              <ResumeHeading
                heading="Gaming"
                description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
              />
            </div>,
          ];
        
          const handleCarousal = (index) => {
            let offsetHeight = 360;
        
            let newCarousalOffset = {
              style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
            };
        
            setCarousalOffsetStyle(newCarousalOffset);
            setSelectedBulletIndex(index);
          };
          const getBullets = () => {
            return resumeBullets.map((bullet, index) => (
              <div
                onClick={() => handleCarousal(index)}
                className={
                  index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
              >
                <img
                  className="bullet-logo"
                  src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                 
                />
                <span className="bullet-label">{bullet.label}</span>
              </div>
            ));
          };
          const getResumeScreens = () => {
            return (
              <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
              >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
              </div>
            );
          };
    return(
      <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
