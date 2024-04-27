import "./Skill.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Skill (){
    
    return(
            <div id="skill">
                <h1 className="skill-title">Skills</h1>
                <div className="skills">
                <div className="skill-left">
                    <div className="skill-html">
                    <p className="heading">HTML</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div className="html">
                        </div>
                    </div>
                    <div className="skill-css">
                    <p className="heading">CSS</p>
                    <p className="skit">90%</p>
                    </div>
                    <div className="bak">
                        <div  className="css">
                        </div>
                    </div>
                    <div className="skill-css">
                    <p className="heading">TAILWIND</p>
                    <p className="skit">90%</p>
                    </div>
                    <div className="bak">
                        <div  className="tail">
                        </div>
                    </div>
                    <div className="skill-css">
                    <p className="heading">VERCEL</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div  className="tal">
                        </div>
                    </div>
                    <div className="skill-java">
                    <p className="heading">JAVASCRIPT</p>
                    <p className="skit">75%</p>
                    </div>
                    <div className="bak">
                        <div  className="javascript">
                        </div>
                    </div>
                    <div className="skill-boot">
                    <p className="heading">BOOTSTRAP</p>
                    <p className="skit">90%</p>
                    </div>
                    <div className="bak">
                        <div  className="bootstrap">
                        </div>
                    </div> 
                    <div className="skill-html">
                    <p className="heading">SAAS</p>
                    <p className="skit">50%</p>
                    </div>
                    <div className="bak">
                        <div className="sass">
                        </div>
                    </div>
                </div>
                <div className="skill-right">
                    <div className="skill-react">
                    <p className="heading">REACTJS</p>
                    <p className="skit">80%</p>
                    </div>
                    <div className="bak">
                        <div  className="react">
                    </div>
                    </div>
                    <div className="skill-react">
                    <p className="heading">GITHUB</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div  className="ract">
                    </div>
                    </div>
                    <div className="skill-react">
                    <p className="heading">NODEJS</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div  className="reactI">
                    </div>
                    </div>
                    <div className="skill-canva">
                    <p className="heading">NEXTJS</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div  className="canva">
                        </div>
                    </div>
                    <div className="skill-com">
                    <p className="heading">GOOD COMMUNICATION</p>
                    <p className="skit">70%</p>
                    </div>
                    <div className="bak">
                        <div  className="com">
                        </div>
                    </div>
                    <div className="skill-play">
                    <p className="heading">GOOD TEAM PLAYER</p>
                    <p className="skit">90%</p>
                    </div>
                    <div className="bak">
                        <div  className="player">
                        </div>
                    </div>
                    <div className="skill-react">
                    <p className="heading">TYPESCRIPT</p>
                    <p className="skit">50%</p>
                    </div>
                    <div className="bak">
                        <div  className="type">
                    </div>
                    </div>
                </div>

                </div>
                
            </div>
    )
}