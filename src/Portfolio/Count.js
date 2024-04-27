import "./Count.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger"
import { useState } from "react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Count () {
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    const [counterOn, setCounterOn] = useState(false);
    return(
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div id="count">

                <div data-aos="fade-up" className="count">
                <div className="countdown">
                        <h5 className="tig">Language Project Completed</h5>
                        <h6 className="tiging">
                            {counterOn &&  <CountUp start={0} end={188} duration={2} delay={0}/>} 
                        </h6>
                    </div>
                    <div className="countdown">
                    <h5 className="tig">Happy Client</h5>
                        <h6 className="tiging">
                             {counterOn && <CountUp start={0} end={191} duration={2} delay={0}/>}
                            
                        </h6>
                    </div>
                    <div className="countdown">
                    <h5 className="tig">Website Developed</h5>
                        <h6 className="tiging">
                            {counterOn && <CountUp start={0} end={3} duration={2} delay={0}/>}
    
                        </h6>
                    </div>
                </div>

                    
            </div>
            </ScrollTrigger>
    )
}