import "./Count.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger"
import { useState } from "react";

export default function Count () {
    const [counterOn, setCounterOn] = useState(false);
    return(
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className="count">

                    <div className="countdown">
                        <h5>Research Done</h5>
                        <h6>
                            {counterOn &&  <CountUp start={0} end={598} duration={2} delay={0}/>} 
                            +
                        </h6>
                    </div>
                    <div className="countdown">
                    <h5>Happy Client</h5>
                        <h6>
                             {counterOn &&  <CountUp start={0} end={598} duration={2} delay={0}/>}
                            +
                        </h6>
                    </div>
                    <div className="countdown">
                    <h5>Website Developed</h5>
                        <h6>
                            {counterOn &&  <CountUp start={0} end={15} duration={2} delay={0}/>}
                            +
                        </h6>
                    </div>
            </div>
            </ScrollTrigger>
    )
}