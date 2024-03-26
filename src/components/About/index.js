import React from "react";
import "./About.css";
import Lottie from "lottie-react";
import GraduateIcon from "../../assets/files/graduate_icon.svg";
import SchoolIcon1 from "../../assets/files/school_icon.svg";
import SchoolIcon2 from "../../assets/files/school_icon2.svg";
import OfficeBagIcon from "../../assets/files/certificate.svg";
import DeveloperYoga from "../../assets/files/developer yoga.json";
const AboutPage = () => {
  const qualifications = [
    {
      icon: GraduateIcon,
      title: "B.E Mechanical Engineering",
      university: "Gnanamani college of Technology (2014-2018)",
      alt: "graduate_icon",
    },
    {
      icon: SchoolIcon1,
      title: "Higher Secondary School",
      university: "The Gugai Higher Secondary School (2013-2014)",
      alt: "school_icon",
    },
    {
      icon: SchoolIcon2,
      title: "Secondary School Leaving Certificate",
      university: "The Gugai Higher Secondary School (2010-2011)",
      alt: "school_icon",
    },
  ];
  return (
    <div className="aboutpage__container" id="about">
      <div
        className="about font-extrabold  py-5 mt-10 text-5xl"
        data-aos={"slide-up"}
        data-aos-duration={"700"}
      >
        About
      </div>
      <br />
      <div className="aboutme__content">
        <div className="aboutme__anime">
          <Lottie className="anime" animationData={DeveloperYoga} loop={true} />
        </div>
        <div className="aboutme__text" data-aos="fade-up">
          Hi, I'm Venkattaramanan and I'm a full stack developer based in India.
          I have a keen interest in web applications, animations, UI effects
          (and occasionally designing). I am interested in developing dynamic
          applications and Curiosity to learn new technologies. Then I am
          well-organized person, independent worker with high attention to
          detail, self-motivated person and quick learner.
        </div>
      </div>
      <div className="qualifi__experience">
        <div className="aca_qualifi">
          <h1 data-aos="zoom-in-down">
            Academic <span>Qualifications</span>
          </h1>
          {qualifications.map((qualifi, index) => {
            return (
              <div key={index} className="qualification" data-aos="zoom-in">
                <img src={qualifi.icon} alt={qualifi.alt} />
                <div className="qualifi_text">
                  <h1>{qualifi.title}</h1>
                  <h4>{qualifi.university}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <div className="job_exp">
        <h1 data-aos="zoom-in-down">
          <span>Certification</span>
        </h1>

        <div className="Job_experience" data-aos="zoom-in">
          <div className="job_exp_icon">
            <img src={OfficeBagIcon} alt="officeBag_icon" />
          </div>
          <div className="job_desc">
            <div className="job_text">
              <h1>Full Stack Developer</h1>
              <h4>GUVI (IITM Chennai) (FEB 2023-SEP 2023)</h4>
            </div>
            <p>
              I have successfully completed a Full Stack Development course,
              gaining proficiency in HTML, CSS, JavaScript, Node.js, and
              MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
