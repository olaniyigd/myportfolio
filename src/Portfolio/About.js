import "./About.css";
import niyi from "../Portfolioimage/niyi.jpeg";
import { FiChevronRight } from "react-icons/fi";
export default function About (){
    return(
            <div className="about-head">
                <h1 className="about-title">About</h1>
                <p className="about-text">A dedicated, passionate and hardworking individual, renowned for high standards of service; equipped with excellence, effectively leading individuals and performance to achieve desired results and accomplish organizational goals and objectives. Excited to bring talent and leadership to organization offering room for growth. </p>
                <div className="about">
                    <div className="about-left">
                        <img src={niyi} alt="niyi" className="aboutimage" />
                    </div>
                    <div className="about-right">
                        <p className="abot-title">Frontend Web Developer/Language Researcher</p>
                        <p className="abt-text">Frontend web developer and Language Researcher with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadline.</p>
                        <div className="info">
                        <div className="info-left">
                            <div className="one">
                                <h4><span className="ic"><FiChevronRight/></span> <span className="ic-text">Website:</span> dakieo.com</h4>
                            </div>
                            <div className="one">
                                <h4><span className="ic"><FiChevronRight/></span> <span className="ic-text">Phone:</span> +2348107265575</h4>
                            </div>
                            <div className="one">
                                 <h4><span className="ic"><FiChevronRight/></span> <span className="ic-text">City:</span> Ilorin, Nigeria</h4>
                            </div>
                        </div>
                        <div className="info-right">
                            <div className="one">
                                <h4><span className="ic"><FiChevronRight/></span> <span className="ic-text">Degree:</span> B.A</h4>
                            </div>
                            <div className="one">
                                <h4><span className="ic"><FiChevronRight/></span> <span className="ic-text">Mail:</span> gbadegesinpharuq@yahoo.com</h4>
                            </div>
                            <div className="one">
                                <h4><span className="ic"><FiChevronRight/></span> <span className="ic-text">Freelance:</span> Available</h4>
                            </div>
                        </div>
                    </div>
                    </div>                    
                </div>
            </div>
    )
}