import "./About.css";
import niyi from "../Portfolioimage/niyi.jpeg";
import { FiChevronRight } from "react-icons/fi";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
export default function About (){
    
    return(
            <div id="about-head" className="rev">
                <h1 className="about-title">-About Me-</h1>
                <p className="about-text">Experienced software developer with a strong proficiency in a
wide range of web development technologies including HTML,
CSS, JavaScript, Bootstrap, Tailwind CSS, Node.js, React.js, and
Next.js. Demonstrated ability to create responsive and visually
engaging software applications. Highly collaborative and
dedicated to keeping pace with current software development
trends.
 </p>
                <div className="about">
                    <div className="about-left">
                        <img src={niyi} alt="niyi" className="aboutimage" />
                    </div>
                    <div className="about-right">
                        <div className="abot-title">
                        <p className="title">Web Developer & Software Developer</p>
                        </div>
                        <p className="abt-text">Web developer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadline.</p>
                        <div className="inf">
                        <div  className="inf-left">
                            <div className="two">
                                <p className="one-txt"><p className="one-txt-title">Name:</p> Faruq O. Gbadegesin</p>
                            </div>
                            
                            <div className="two">
                                <p className="one-txt"><p className="one-txt-title">Phone:</p> +234 (0) 8107265575</p>
                            </div>
                            <div className="two">
                                 <p className="one-txt"><p className="one-txt-title">City:</p> Lagos, Nigeria</p>
                            </div>
                        </div>
                        <div className="inf-right">
                            <div className="two">
                                <p className="one-txt"><p className="one-txt-title">Degree:</p> B.A</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><p className="one-txt-title">Mail:</p> pharuqgbadegesin5@gmail.com</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><p className="one-txt-title">Freelance:</p> Available</p>
                            </div>
                        </div>
                    </div>
                    </div>                    
                </div>
            </div>
    )
}