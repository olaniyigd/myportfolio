import "./Nav.css";
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
export default function Nav (){
    return(
            <div className="nav-bar">
                <div className="nav">
                <img src={niyi} alt="niyi" className="logo" />
                <h1 className="neme">Faruq Olaniyi Gbadegesin</h1>
                <div className="media">
                    <div className="icop">
                      <a className="twi" href="https://twitter.com/Gbadegesin0?t=mC-s-6q11ZboJVjaNVmLBA&s=09"><BsTwitter /></a>
                    </div>
                    <div className="ico">
                      <a className="face" href="https://web.facebook.com/gbadegesin.pharuq.9"><ImFacebook/> </a>
                  
                    </div>
                    <div className="ico">
                    <a className="link" href="https://www.linkedin.com/in/olaniyi-gbadegesin-63898517b/"><FaLinkedinIn/> </a>
                    </div>
                    <div className="ico">
                    <a className="what" href="https://wa.me/2348107265575?text=Hi%20Dakieo"><BsWhatsapp/> </a>
                    </div>
                </div>
                </div>
                <ul>
                    <a href="#front"><li><AiOutlineHome/> Home</li></a>
                    <a href="#about-head"><li><CgProfile/> About</li></a>
                    <a href="#resume"><li><AiOutlineFile/> Resume</li></a>
                    <a href="#skill"><li><AiOutlineProfile/> Skills</li></a>
                    {/* <a href="#achieve"><li><AiOutlineFile/> Achievement</li></a> */}
                    <a href="#port"><li><AiOutlineProfile/> Project</li></a>
                    {/* <a href="#services"><li><FiSettings/> Services</li></a> */}
                </ul>
                
                <p className="copyrih">&copy; Copyright. Portfolio Designed by:</p>
                <p className="copyrit">Faruq Olaniyi Gbadegesin</p>
            </div>
    )
}