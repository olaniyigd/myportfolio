import "./Resume.css";
import { FiChevronRight } from "react-icons/fi";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
export default function Resume () {
    
    return(
            <div id="resume">
                <h1   className="resume-title">Resume</h1>
                <div className="resum">
                    <div className="resum-left">
                         <p   className="expo">WORK EXPERIENCE</p>
                         <div   className="work">
                            <h3 className="lio">Frontend Developer</h3>
                            <h4 className="mio">MSME Ecosystem Ltd</h4>
                            <h5>June 2023 - April 2024.</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Precisely translated complex app designs into
meticulously crafted frontend code.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Collaborated closely with backend developers to ensure
seamless integration of UI components with APIs and
databases, adhering to RESTful API principles.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Wrote maintainable and performance-optimized code
by leveraging modern frontend technologies and
patterns.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Extensively used version control systems like Git to
manage codebase and facilitate collaborative
development</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Conducted thorough testing and debugging to maintain
a robust and error-resistant user interface.
</p>
                            </div>
                        </div>


                        <div   className="work">
                            <h3 className="lio">Web Developer</h3>
                            <h4 className="mio">Toshconsult Technologies Inc.</h4>
                            <h5>Jan. 2023 – Oct. 2023</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Collaborated with cross-functional teams to design and
develop custom web applications.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Built and maintained websites using HTML, CSS, and
JavaScript to ensure a responsive and user-friendly
experience.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Implemented Bootstrap and Tailwind CSS for consistent
and visually appealing UI design.
</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Enhanced website performance and user interactivity
through JavaScript and React.js.
</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="resum-right">
                        <p  className="educ">EDUCATION</p>
                        <div  className="work">
                            <h3 className="lio">Web Developement.</h3>
                            <h4 className="mio">Toshconsult Technologies Inc, Taiwo, Ilorin, Kwara State.</h4>
                            <h5>Jul 2022 - May 2023.</h5>
                            <p className="wok-txt">Frontend Development.</p>
                            <h5>May 2023 - Dec 2023.</h5>
                            <p className="wok-txt">Backend Development.</p>
                        </div>
                    
                        <div  className="work">
                            <h3 className="lio">B.A Linguistics.</h3>
                            <h4 className="mio">University of Ilorin.</h4>
                            <h5>Oct 2015 - Aug 2021.</h5>
                            <p className="wok-txt">Linguistics.</p>
                        </div>
                        {/* <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Secondary School Leaving Certificate</h3>
                            <h4 className="mio">Adebolu Comprehensive College, Ogbomoso, Oyo State.</h4>
                            <h5>2008 - 2014.</h5>
                            <p className="wok-txt">Secondary School Leaving Certificate (Arts)</p>
                        </div> */}
                        
                    </div>
                </div>
            </div>
    )
}
