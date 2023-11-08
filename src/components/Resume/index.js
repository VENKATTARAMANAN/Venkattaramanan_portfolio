import HTML from '../../assets/files/HTML.svg'
import CSS from '../../assets/files/CSS.svg'
import BOOTSTRAP from'../../assets/files/BOOTSTRAP.svg'
import JAVASCRIPT from '../../assets/files/JAVASCRIPT.svg'
import REACT from '../../assets/files/REACT.svg'
import MONGODB from '../../assets/files/MONGODB.svg'
import NODEJS from '../../assets/files/NODEJS.svg'
import MYSQL from '../../assets/files/MYSQL.svg'
import EXPRESSJS from '../../assets/files/EXPRESSJS.svg'
import NPM from '../../assets/files/NPM.svg'
import POSTMAN from '../../assets/files/POSTMAN.svg'
import HEROKU from '../../assets/files/HEROKU.svg'
import XD from '../../assets/files/XD.svg'
import PHOTOSHOP from '../../assets/files/PHOTOSHOP.svg'
import './Resume.css'

export default function Resume() {
    const techLogos = [
        {
            icon: HTML,
            alt: "html_icon"
        },
        {
            icon: CSS,
            alt: "css_icon"
        },
        {
            icon: BOOTSTRAP,
            alt: "bootstrap_icon"
        },
        {
            icon: JAVASCRIPT,
            alt: "javascript_icon"
        },
        {
            icon: REACT,
            alt: "react_icon"
        },
        {
            icon: MONGODB,
            alt: "mongodb_icon"
        },
        {
            icon: NODEJS,
            alt: "nodejs_icon"
        },
        {
            icon: MYSQL,
            alt: "mysql_icon"
        },
        {
            icon: EXPRESSJS,
            alt: "expressjs_icon"
        },
    ]

    const otherLogos = [
        {
            icon: PHOTOSHOP,
            alt: "photoshop_icon"
        },
        {
            icon: XD,
            alt: "adobexd_icon"
        },
        {
            icon: HEROKU,
            alt: "heroku_icon"
        },
        {
            icon: POSTMAN,
            alt: "postman_icon"
        },
        {
            icon: NPM,
            alt: "npm_icon"
        }
    ]

  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Skill
      </div>
      <div className='skillpage__container' id='skills'>
            <div className="what_i_know_title">
                <h1>What i know?</h1>
            </div>

            <div className="technologies">
                <div className="tech__title" data-aos="zoom-in-right">
                    <div className="tech_line1"></div>
                    <div className="tech_text">Languages</div>
                    <div className="tech_line2"></div>
                </div>
                <div className="tech__skills">
                    {
                        techLogos.map((tech_icon) => {
                            return (
                                <div className="tech_logo" data-aos="zoom-out-up">
                                    <img src={tech_icon.icon} alt={tech_icon.alt} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="others">
                <div className="other__skills">
                    {
                        otherLogos.map((other_icon) => {
                            return (
                                <div className="other_logo" data-aos="zoom-out-down">
                                    <img src={other_icon.icon} alt={other_icon.alt} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="other__title" data-aos="zoom-in-left">
                    <div className="other_line1"></div>
                    <div className="other_text">Other</div>
                    <div className="other_line2"></div>
                </div>
            </div>
        </div>
</div>
   
  );
}
