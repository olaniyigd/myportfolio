import "./About.css";
import niyi from "../Portfolioimage/niyi.jpeg";
import { FiChevronRight } from "react-icons/fi";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About (){
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="about-head" className="rev">
                <h1 className="about-title">-About-</h1>
                <p data-aos="fade-up" className="about-text">A dedicated, passionate and hardworking individual, renowned for high standards of service; equipped with excellence, effectively leading individuals and performance to achieve desired results and accomplish organizational goals and objectives. Excited to bring talent and leadership to organization offering room for growth. </p>
                <div className="about">
                    <div className="about-left">
                        <img src={niyi} alt="niyi" data-aos="fade-up" className="aboutimage" />
                    </div>
                    <div className="about-right">
                        <div className="abot-title">
                        <p data-aos="fade-up" className="title">Frontend Web Developer</p>
                        <p data-aos="fade-up" className="title">&Language Researcher</p>
                        </div>
                        <p data-aos="fade-up" className="abt-text">Frontend web developer and Language Researcher with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadline.</p>
                        <div className="inf">
                        <div data-aos="fade-right" className="inf-left">
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Name: Faruq O. Gbadegesin</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Birthday: Nov 30</p>
                            </div>
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
                        <div data-aos="fade-right" className="inf-right">
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Degree: B.A</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Experience: 3 Years</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Phone: +2348107265575</p>
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