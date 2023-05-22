import "./Skill.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Skill (){
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="skill">
                <h1 data-aos="fade-up" className="skill-title">Skills</h1>
                <div className="skills">
                <div className="skill-left">
                    <div className="skill-html">
                    <p className="heading">HTML</p>
                    <p className="skit">98%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="html">
                        </div>
                    </div>
                    <div className="skill-css">
                    <p className="heading">CSS</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="css">
                        </div>
                    </div>
                    <div className="skill-css">
                    <p className="heading">TAILWIND</p>
                    <p className="skit">55%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="tail">
                        </div>
                    </div>
                    <div className="skill-css">
                    <p className="heading">VERCEL</p>
                    <p className="skit">55%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="tal">
                        </div>
                    </div>
                    <div className="skill-java">
                    <p className="heading">JAVASCRIPT</p>
                    <p className="skit">50%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="javascript">
                        </div>
                    </div>
                    <div className="skill-boot">
                    <p className="heading">BOOTSTRAP</p>
                    <p className="skit">55%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="bootstrap">
                        </div>
                    </div> 
                </div>
                <div className="skill-right">
                    <div className="skill-react">
                    <p className="heading">REACTJS</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="react">
                    </div>
                    </div>
                    <div className="skill-react">
                    <p className="heading">GITHUB</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="ract">
                    </div>
                    </div>
                    <div className="skill-react">
                    <p className="heading">NODEJS</p>
                    <p className="skit">50%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="reactI">
                    </div>
                    </div>
                    <div className="skill-canva">
                    <p className="heading">CANVA</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="canva">
                        </div>
                    </div>
                    <div className="skill-com">
                    <p className="heading">GOOD COMMUNICATION</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="com">
                        </div>
                    </div>
                    <div className="skill-play">
                    <p className="heading">GOOD TEAM PLAYER</p>
                    <p className="skit">90%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="player">
                        </div>
                    </div>
                </div>

                </div>
                
            </div>
    )
}