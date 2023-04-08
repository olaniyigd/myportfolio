import "./Bottom.css";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
export default function Bottom (){
    return(
        <div className="bottom">
            <hr></hr>
                    <div className="medi">
                    <div className="ico">
                      <a className="coni" href="https://twitter.com/Gbadegesin0?t=mC-s-6q11ZboJVjaNVmLBA&s=09"><BsTwitter /></a>
                    </div>
                    <div className="ico">
                      <a className="coni" href="https://web.facebook.com/gbadegesin.pharuq.9"><ImFacebook/> </a>
                  
                    </div>
                    <div className="ico">
                    <a className="coni" href="https://www.linkedin.com/in/olaniyi-gbadegesin-63898517b/"><FaLinkedinIn/> </a>
                    </div>
                    <div className="ico">
                    <a className="coni" href="https://wa.me/2348107265575?text=Hi%20Qiscus"><BsWhatsapp/> </a>
                    </div>
                </div>
                <p className="copyright">&copy; Copyright. Designed by:</p>
                <p className="copyrigt">Faruq Gbadegesin</p>
        </div>
    )
}