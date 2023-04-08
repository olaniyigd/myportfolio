import "./Resume.css";
import { FiChevronRight } from "react-icons/fi";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Resume () {
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="resume">
                <h1 data-aos="fade-up"  className="resume-title">Resume</h1>
                <div className="resum">
                    <div className="resum-left">
                         <p data-aos="fade-up"  className="expo">WORK EXPERIENCE</p>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Web Developer.</h3>
                            <h4 className="mio">Toshconsult Technologies Inc, Taiwo, Ilorin, Kwara State.</h4>
                            <h5>Jan 2023 - Present.</h5>
                            <p className="wok-txt">Learning and Voluntarily working in the company to develop its product, for self educational purposes. It includes coding in HTML, CSS, JAVASCRIPT and REACTJS.</p>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Frontend Web Developer.</h3>
                            <h4 className="mio">Digprom Tech, Taiwo, Ilorin, Kwara State.</h4>
                            <h5>Jul 2022 - Nov 2022.</h5>
                            <p className="wok-txt">Learning and Voluntarily worked in the company to develop its product, for self educational purposes. It includes coding in HTML, CSS, JAVASCRIPT and REACTJS.</p>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">English Language Teacher.</h3>
                            <h4 className="mio">Michalice International College, Obantoko, Abeokuta, Ogun State.(NYSC)</h4>
                            <h5>Nov 2021 - Oct 2022.</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Teaching basic English skills including reading, writing, and speaking.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Composing lesson plans in order to successfully incorporate the full duration of each lesson.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Executing lessons efficiently using different styles of teaching depending on the content.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Engaging students to ensure a lively classroom atmosphere.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Language Researcher.</h3>
                            <h4 className="mio">A.O.S Academy Ltd, Tanke, Ilorin, Kwara State.</h4>
                            <h5>Oct 2019 - Oct 2021.</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Conducting desktop research, and using books, journal articles, questionnaires and interviews to gather language data.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Analyzing and interpreting language data linguistically.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Maintaining and protecting electronic databases.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Anticipating language research issues and promptly resolving them.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Writing language research proposals and delivering presentations when required.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="work">
                            <h3 className="lio">Migration Agent.</h3>
                            <h4 className="mio">A.O.S Immigration Agency, Tanke, Ilorin, Kwara State.</h4>
                            <h5>Oct 2019 - Oct 2021.</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> providing information and advice to potential migrants.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> advising clients on the most applicable visa for their situation.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> preparing documents or forms and lodge visa applications.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="work">
                            <h3 className="lio">IELTS & TOEFL Tutor</h3>
                            <h4 className="mio">A.O.S Academy Ltd, Tanke, Ilorin, Kwara State.</h4>
                            <h5>Oct 2019 - Oct 2021.</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Conducting well-organized and structured classes.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Being able to communicate my knowledge to the students.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Catching mistakes and correcting them swiftly.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Teaching basic English skills including reading, writing, and speaking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="resum-right">
                        <p data-aos="fade-up"  className="educ">EDUCATION</p>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Web Developement.</h3>
                            <h4 className="mio">Toshconsult Technologies Inc, Taiwo, Ilorin, Kwara State.</h4>
                            <h5>Jan 2023 - Present.</h5>
                            <p className="wok-txt">Web Development.</p>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Frontend Web Developement.</h3>
                            <h4 className="mio">Digprom Tech, Taiwo, Ilorin, Kwara State.</h4>
                            <h5>Jul 2022 - Nov 2022.</h5>
                            <p className="wok-txt">Frontend Web Development.</p>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">B.A Linguistics.</h3>
                            <h4 className="mio">University of Ilorin.</h4>
                            <h5>Oct 2015 - Aug 2021.</h5>
                            <p className="wok-txt">Linguistics.</p>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Secondary School Leaving Certificate</h3>
                            <h4 className="mio">Adebolu Comprehensive College, Ogbomoso, Oyo State.</h4>
                            <h5>2008 - 2014.</h5>
                            <p className="wok-txt">Secondary School Leaving Certificate (Arts)</p>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
