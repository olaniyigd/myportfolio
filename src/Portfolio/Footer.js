import "./Footer.css";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import tanke from "../Portfolioimage/tanke.png";
export default function Footer (){
    return(
            <div className="contact">
                <h1 className="about-contact">Contact</h1>
                <div className="contacts">
                    <div className="left-contact">
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <CiLocationOn className="c-icon" />
                                </div>
                                <div className="detail">
                                    <p className="location">Location:</p>
                                    <p className="locate">No 13, Omugo Crescent, Ilesanmi, Tanke, ILR</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <CiMail className="c-icon" />
                                </div>
                                <div className="detail">
                                    <p className="mail">Email:</p>
                                    <a className="mil" href="mailto:gbadegesinpharuq@yahoo.com">gbadegesinpharuq@yahoo.com</a>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <BsPhone className="c-icon" />
                                </div>
                                <div className="detail">
                                    <p className="call">Call:</p>
                                    <a className="nu" href="tel:+2348107265575">+2348107265575</a>
                                </div>
                            </div>
                            <div className="contact-info">
                                <a href="https://www.google.com/maps/place/Tanke+Rd,+240102,+Kwara/@8.4799801,4.6124533,17z/data=!4m6!3m5!1s0x10364ce643e26cc9:0xe47a663ebce70e0d!8m2!3d8.4812429!4d4.6148458!16s%2Fg%2F1tgl6c2r">
                                <img src={tanke} alt="tanke" className="map"/>
                                </a>
                            </div>
                    </div>
                    <div className="right-contact">
                        <form>
                            <div className="namail">
                                <div className="nam">
                                    <div>
                                        <p className="head">Your Name</p>
                                    </div>
                                    <div>
                                    <input type="text" name="name" id="yourname" placeholder="Dakieo" required/>
                                    </div>
                                </div>
                                <div className="nam">
                                    <div>
                                    <p className="head">Your Mail</p>
                                    </div>
                                    <div>
                                    <input type="text" name="name" id="mail" placeholder="example@mail.com" required/>
                                    </div>
                                </div>                                    
                            </div>
                            <div className="nams">
                                    <div>
                                    <p className="head">Subject</p>
                                    </div>
                                    <div>
                                    <input type="text" name="name" id="subject" required/>
                                    </div>
                            </div>
                            <div className="mess">
                                    <div>
                                    <p className="head">Message</p>
                                    </div>
                                    <div>
                                        <textarea name="" id="message" cols="30" rows="10" required></textarea>
                                    </div>
                            </div>
                            <div className="btnn">
                            <button className="butn">Submit Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}