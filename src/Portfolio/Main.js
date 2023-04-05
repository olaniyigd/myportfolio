import "./Main.css";
import Nav from "./Nav";
import "./Nav.css"
// import Front from "./Front";
import About from "./About";
import Skill from "./Skill";
import Resume from "./Resume";
import Achieve from "./Achieve";
import Service from "./Service";
// import Counter from "./Counter";
import Footer from "./Footer";
import { FiMenu } from "react-icons/fi";
import niyi from "../Portfolioimage/niyi.jpeg";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { useState } from "react";

export default function Main(){

    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }
    return(
            <div className="main">
            <button className="btn2" onClick={handleClick}><FiMenu/></button>
                <div className="left">
                    <Nav/>
                </div>
                {
                    toggle && (
                        <div className="mobilenav">
                            <img src={niyi} alt="niyi" className="mobilelogo" />
                            <h1 className="mobilename">Faruq Olaniyi Gbadegesin</h1>
                         <div className="mobilem">
                            <div className="mobileicon">
                              <a className="mobilecon" href="https://twitter.com/Gbadegesin0?t=mC-s-6q11ZboJVjaNVmLBA&s=09"><BsTwitter /></a>
                            </div>
                            <div className="mobileicon">
                              <a className="mobilecon" href="https://web.facebook.com/gbadegesin.pharuq.9"><ImFacebook/> </a>
                          
                            </div>
                            <div className="mobileicon">
                            <a className="mobilecon" href="https://www.linkedin.com/in/olaniyi-gbadegesin-63898517b/"><FaLinkedinIn/> </a>
                            </div>
                            <div className="mobileicon">
                            <a className="mobilecon" href="https://wa.me/2348107265575?text=Hi%20Qiscus"><BsWhatsapp/> </a>
                            </div>
                        </div>
                        <ul className="mobile-ul">
                            <a href="#home"><li><AiOutlineHome/> Home</li></a>
                            <a href="#about"><li><CgProfile/> About</li></a>
                            <a href="#skill"><li><AiOutlineProfile/> Skills</li></a>
                            <a href="#resume"><li><AiOutlineFile/> Resume</li></a>
                            <a href="#achieve"><li><AiOutlineFile/> Achievement</li></a>
                            <a href="#portfolio"><li><AiOutlineProfile/> Portfolio</li></a>
                            <a href="#service"><li><FiSettings/> Services</li></a>
                        </ul>
                        <p className="mobilecopyright">&copy; Copyright Portfolio Designed by: <span>Faruq Gbadegesin</span></p>
                    </div>
                    )
                }
                <div className="right">
                    {/* <Front/> */}
                    <About />
                    <Skill />
                    <Resume />
                    <Achieve />
                    <Service />
                    <Footer />
                </div>
            </div>
    )
}
