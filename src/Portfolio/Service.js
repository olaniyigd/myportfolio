import "./Service.css";
import { FiChevronRight } from "react-icons/fi";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Service () {
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="services">
                <h1 data-aos="fade-up" className="service-title">Service</h1>
                <p data-aos="fade-up" className="serv-text">HERE ARE SOME OF MY EXPERTISE</p>
                <div className="service">
                        <div data-aos="fade-up" className="service-left">
                            <p className="ola">Language Research</p>
                            <p className="research-text">RESEARCH is the investigation of a particular topic using a variety of reliable, scholarly resources. Also, it is the systematic process of collecting and analyzing information to increase our understanding of the phenomenon under study. My research area of specialization is Language:</p>
                            <div className="filed">
                                <div className="feed">
                                <FiChevronRight />
                                <a href="https://en.wikipedia.org/wiki/Phonology">Phonology</a>
                                </div>
                                <div className="feed">
                                <FiChevronRight />
                                <a href="https://en.wikipedia.org/wiki/Morphology_(linguistics)">Morphology</a>
                                </div>
                                <div className="feed">
                                <FiChevronRight />
                                <a href="https://en.wikipedia.org/wiki/Syntax">Syntax</a>
                                </div>
                                <div className="feed">
                                <FiChevronRight />
                                <a href="https://en.wikipedia.org/wiki/Sociolinguistics#:~:text=Sociolinguistics%20is%20the%20descriptive%20study,and%20society's%20effect%20on%20language.">Sociolinguistics</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="service-left">
                            <p className="ola">Web Development</p>
                            <p className="research-text">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
                            <div className="filed">
                                <div className="feed">
                                <FiChevronRight />
                                <a href="https://en.wikipedia.org/wiki/E-commerce">E-commerce Website</a>
                                </div>
                                <div className="feed">
                                <FiChevronRight />
                                <a href="https://en.wikipedia.org/wiki/Blog">Blog Website</a>
                                </div>
                                <div className="feed">
                                <FiChevronRight />
                                <a href="https://en.wikipedia.org/wiki/Portfolio">Portfolio Website</a>
                                </div>
                                <div className="feed">
                                <FiChevronRight />
                                <a href=".">Corporate Website</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )
}
