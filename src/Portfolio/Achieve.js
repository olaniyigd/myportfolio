import "./Achieve.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Achieve () {
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="achieve">
                <p data-aos="fade-up" className="achieve-title">Achievements & Awards</p>
                <div className="achie">
                    <div className="achie-left">
                        <div data-aos="fade-up" className="work">
                            <h3>Language Researcher.</h3>
                            <p className="wrk-txt">Successfully researched on 188 out of 522 Languages in Nigeria.</p>
                        </div>
                        <div data-aos="fade-up" className="work">
                            <h3>A.O.S Academy Ltd.</h3>
                            <p className="wrk-txt">The best Employee of the year 2021.</p>
                        </div>
                    </div>
                    <div className="achie-right">
                        <div data-aos="fade-up" className="work">
                            <h3>Federation of Orire Local Government Students' Union (FORSU) Oyo State.</h3>
                            <p className="wrk-txt">The most active executive in the union (2018).</p>
                        </div>
                        <div data-aos="fade-up" className="work">
                            <h3>Education Liberation Programme (Lagos State).</h3>
                            <p className="wrk-txt">The most active participant (2018).</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
