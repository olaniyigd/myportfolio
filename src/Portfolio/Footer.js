import "./Footer.css";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import tanke from "../Portfolioimage/tanke.png";
export default function Footer (){
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div className="contact">
                <h1 data-aos="fade-up" className="about-contact">Contact</h1>
                <div className="contacts">
                    <div className="left-contact">
                            <div data-aos="fade-up" className="contact-info">
                                <div className="contact-con">
                                    <CiLocationOn className="picon" />
                                </div>
                                <div className="detail">
                                    <p className="location">Location:</p>
                                    <a className="loc" href="https://www.google.com/maps/place/Tanke+Rd,+240102,+Kwara/@8.4799801,4.6124533,17z/data=!4m6!3m5!1s0x10364ce643e26cc9:0xe47a663ebce70e0d!8m2!3d8.4812429!4d4.6148458!16s%2Fg%2F1tgl6c2r">No 13, Omugo Crescent, Ilesanmi, Tanke, ILR</a>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="contact-info">
                                <div className="contact-icon">
                                    <CiMail className="c-icon" />
                                </div>
                                <div className="detail">
                                    <p className="mail">Email:</p>
                                    <a className="loc" href="mailto:gbadegesinpharuq@yahoo.com">gbadegesinpharuq@yahoo.com</a>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="contact-info">
                                <div className="contact-icon">
                                    <BsPhone className="c-icon" />
                                </div>
                                <div className="detail">
                                    <p className="call">Call:</p>
                                    <a className="loc" href="tel:+2348107265575">+2348107265575</a>
                                </div>
                            </div>
                            <a data-aos="fade-up" href="https://www.google.com/maps/place/Tanke+Rd,+240102,+Kwara/@8.4799801,4.6124533,17z/data=!4m6!3m5!1s0x10364ce643e26cc9:0xe47a663ebce70e0d!8m2!3d8.4812429!4d4.6148458!16s%2Fg%2F1tgl6c2r">
                            <div className="contct-info">
                               
                            </div>    
                            </a>
                    </div>
                    <div data-aos="fade-up" className="right-contact">
                        <form action="https://formsubmit.co/pharuqgbadegesin5@gmail.com" method="POST">
                            <div className="namail">
                                <div className="nam">
                                    <div>
                                        <p className="head">Your Name</p>
                                    </div>
                                    <div>
                                    <input type="text" name="Name" id="yourname" placeholder="Dakieo" required/>
                                    </div>
                                </div>
                                <div className="nam">
                                    <div>
                                    <p className="head">Your Mail</p>
                                    </div>
                                    <div>
                                    <input type="email" name="Email" id="mail" placeholder="example@mail.com" required/>
                                    </div>
                                </div>                                    
                            </div>
                            <div className="nams">
                                    <div>
                                    <p className="head">Subject</p>
                                    </div>
                                    <div>
                                    <input type="text" name="Title" id="subject" required/>
                                    </div>
                            </div>
                            <div className="mess">
                                    <div>
                                    <p className="head">Message</p>
                                    </div>
                                    <div>
                                        <textarea name="Message" id="message" cols="30" rows="10" required></textarea>
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