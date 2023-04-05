import "./About.css";
import niyi from "../Portfolioimage/niyi.jpeg";
import { FiChevronRight } from "react-icons/fi";
export default function About (){
    return(
            <div id="about-head">
                <h1 className="about-title">-About-</h1>
                <p className="about-text">A dedicated, passionate and hardworking individual, renowned for high standards of service; equipped with excellence, effectively leading individuals and performance to achieve desired results and accomplish organizational goals and objectives. Excited to bring talent and leadership to organization offering room for growth. </p>
                <div className="about">
                    <div className="about-left">
                        <img src={niyi} alt="niyi" className="aboutimage" />
                    </div>
                    <div className="about-right">
                        <div className="abot-title">
                        <p className="title">Frontend Web Developer</p>
                        <p className="title">&Language Researcher</p>
                        </div>
                        <p className="abt-text">Frontend web developer and Language Researcher with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadline.</p>
                        <div className="inf">
                        <div className="inf-left">
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Website: dakieo.com</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Phone: +2348107265575</p>
                            </div>
                            <div className="two">
                                 <p className="one-txt"><FiChevronRight/>City: Ilorin, Nigeria</p>
                            </div>
                        </div>
                        <div className="inf-right">
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Degree: B.A Linguistics</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Mail: dakieo-dev@yahoo.com</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Freelance: Available</p>
                            </div>
                        </div>
                    </div>
                    </div>                    
                </div>
            </div>
    )
}