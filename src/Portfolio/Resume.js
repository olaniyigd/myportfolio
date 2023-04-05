import "./Resume.css";
import { FiChevronRight } from "react-icons/fi";
export default function Resume () {
    return(
            <div className="resume">
                <h1 className="resume-title">Resume</h1>
                <div className="resum">
                    <div className="resum-left">
                         <h1 className="exp">WORK EXPERIENCE</h1>
                        <div className="work">
                            <h3>Web Developer.</h3>
                            <h4>Toshconsult Technologies Inc.</h4>
                            <h5>Jan 2023 - Present.</h5>
                            <p>Learning and Voluntarily working in the company to develop its product, for self educational purposes. It includes coding in HTML, CSS, JAVASCRIPT and REACTJS.</p>
                        </div>
                        <div className="work">
                            <h3>Frontend Web Developer.</h3>
                            <h4>Digprom Tech.</h4>
                            <h5>Jul 2022 - Nov 2022.</h5>
                            <p>Learning and Voluntarily worked in the company to develop its product, for self educational purposes. It includes coding in HTML, CSS, JAVASCRIPT and REACTJS.</p>
                        </div>
                        <div className="work">
                            <h3>English Language Teacher.</h3>
                            <h4>Michalice International College, Obantoko, Abeokuta, Ogun State.(NYSC)</h4>
                            <h5>Nov 2021 - Oct 2022.</h5>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Teaching basic English skills including reading, writing, and speaking.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Composing lesson plans in order to successfully incorporate the full duration of each lesson.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Executing lessons efficiently using different styles of teaching depending on the content.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Engaging students to ensure a lively classroom atmosphere.</p>
                            </div>
                        </div>
                        <div className="work">
                            <h3>Language Researcher.</h3>
                            <h4>A.O.S Academy Ltd, Tanke, Ilorin, Kwara State.</h4>
                            <h5>Oct 2019 - Oct 2021.</h5>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Conducting desktop research, and using books, journal articles, questionnaires and interviews to gather language data.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Analyzing and interpreting language data linguistically.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Maintaining and protecting electronic databases.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Anticipating language research issues and promptly resolving them.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Writing language research proposals and delivering presentations when required.</p>
                            </div>
                        </div>
                        <div className="work">
                            <h3>Migration Agent.</h3>
                            <h4>A.O.S Immigration Agency, Tanke, Ilorin, Kwara State.</h4>
                            <h5>Oct 2019 - Oct 2021.</h5>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> providing information and advice to potential migrants.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> advising clients on the most applicable visa for their situation.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> preparing documents or forms and lodge visa applications.</p>
                            </div>
                        </div>
                        <div className="work">
                            <h3>IELTS & TOEFL Tutor</h3>
                            <h4>A.O.S Academy Ltd, Tanke, Ilorin, Kwara State.</h4>
                            <h5>Oct 2019 - Oct 2021.</h5>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Conducting well-organized and structured classes.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Being able to communicate my knowledge to the students.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Catching mistakes and correcting them swiftly.</p>
                            </div>
                            <div className="one">
                                <p><span className="ic"><FiChevronRight/></span> Teaching basic English skills including reading, writing, and speaking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="resum-right">
                        <h1 className="edu">EDUCATION</h1>
                        <div className="work">
                            <h3>Web Developement.</h3>
                            <h4>Toshconsult Technologies Inc.</h4>
                            <h5>Jan 2023 - Present.</h5>
                            <p>Web Development.</p>
                        </div>
                        <div className="work">
                            <h3>Frontend Web Developement.</h3>
                            <h4>Digprom Tech.</h4>
                            <h5>Jul 2022 - Nov 2022.</h5>
                            <p>Frontend Web Development.</p>
                        </div>
                        <div className="work">
                            <h3>B.A Linguistics.</h3>
                            <h4>University of Ilorin.</h4>
                            <h5>Oct 2015 - Aug 2021.</h5>
                            <p>Linguistics.</p>
                        </div>
                        <div className="work">
                            <h3>Secondary School Leaving Certificate</h3>
                            <h4>Adebolu Comprehensive College, Ogbomoso, Oyo State.</h4>
                            <h5>2008 - 2014.</h5>
                            <p>Secondary School Leaving Certificate (Arts)</p>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
