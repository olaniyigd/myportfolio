import "./Port.css";
import React, { useEffect } from "react";
import { IoIosLink } from "react-icons/io";
import { SiGithub } from "react-icons/si";



import "aos/dist/aos.css";
export default function Port() {

    return (
        <div id="port">
            <h1 className="port-title">PORTFOLIO</h1>
            <div className="card-wrap">
                <div className="card">
                    <img src="/Portfolioimage/tulupay.png" alt="weather" className="weather" />
                    <p className="title"> <span> <a target="_blank" rel="noopener noreferrer" href="https://tulupay.com/live"><IoIosLink className="kilo" />
                    </a></span>Tulupay <span>  <a target="_blank" rel="noopener noreferrer" href="https://github.com/olaniyigd"><SiGithub className="kilo" />
                    </a></span></p>
                    <p className="description">Tulupay is a groundbreaking payment platform that
                        empowers individuals and businesses. It provides an inclusive
                        ecosystem built on reliable technology for financial services that
                        can contribute to sustainable growth for Africa while taking
                        financial services to the unbanked and underbanked.</p>
                </div>
                <div className="card">
                    <img src="/Portfolioimage/voucherpay.png" alt="portfolio" className="portfolio" />
                    <p className="title"> <span> <a target="_blank" rel="noopener noreferrer" href="https://voucherpay.online"><IoIosLink className="kilo" />
                    </a></span>VoucherPay <span>  <a target="_blank" rel="noopener noreferrer" href="https://github.com/olaniyigd"><SiGithub className="kilo" />
                    </a></span></p>
                    <p className="description">Voucherpay.online is a product of MSME, a B2B
                        platform that offers customized payment solutions that can be
                        tailored to the specific needs of your cooperative and business.
                        The payment processing experts will work with you to develop a
                        solution that is optimized for your business, whether you need
                        to process large volumes of transactions or require complex
                        payment integrations.</p>
                </div>
               
            </div>
            <div className="card-wrap">
                 <div className="card">
                    <img src="/Portfolioimage/switch.jpeg" alt="weather" className="weather" />
                    <p className="title"> <span> <a target="_blank" rel="noopener noreferrer" href="https://switch.tulupay.com"><IoIosLink className="kilo" />
                    </a ></span>Tuluswitch <span>  <a target="_blank" rel="noopener noreferrer" href="https://github.com/olaniyigd"><SiGithub className="kilo" />
                    </a></span></p>
                    <p className="description">Tuluswitch provides an extensive array of payment options, encompassing fiat, voucher, cryptocurrency, gift card, CBDC.This flexibility enable businesses to accommodate various customer preferences and extend their market presence. Tuluswitch platform prioritizes robust security and strict compliance, assuring the protection of your payment and adherence to regulatory standards.</p>
                </div>
                <div className="card">
                    <img src="/Portfolioimage/thrillers.png" alt="weather" className="weather" />
                    <p className="title"> <span> <a target="_blank" rel="noopener noreferrer" href="https://app.media.thrillersgroup.com/"><IoIosLink className="kilo" />
                    </a ></span>Thrillers Media <span>  <a target="_blank" rel="noopener noreferrer" href="https://github.com/olaniyigd"><SiGithub className="kilo" />
                    </a></span></p>
                    <p className="description">Thrillers Media is a music streaming web application that offers users instant access to millions of songs, podcasts, and videos from artists all over the world. Designed for music lovers, Thrillers Media's web app allows users to create, share, and discover playlists, albums, and personalized recommendations tailored to their unique tastes. With an intuitive interface, users can browse through different genres, moods, and trending hits, or dive deep into curated playlists for any occasion.</p>
                </div>
              
            </div>
            <div className="card-wrap">
                 <div className="card">
                    <img src="/Portfolioimage/exchange.jpeg" alt="weather" className="weather" />
                    <p className="title"> <span> <a target="_blank" rel="noopener noreferrer" href="https://exchange.tulupay.com"><IoIosLink className="kilo" />
                    </a ></span>Tuluexchange <span>  <a target="_blank" rel="noopener noreferrer" href="https://github.com/olaniyigd"><SiGithub className="kilo" />
                    </a></span></p>
                    <p className="description">Tuluexchange provides Ease And Convenient Way To Deposit Money To Your Exchange Without Stress. Also is a cryptocurrency trading platform.</p>
                </div>
                <div className="card">
                    <img src="/Portfolioimage/exchange.jpeg" alt="weather" className="weather" />
                    <p className="title"> <span> <a target="_blank" rel="noopener noreferrer" href="https://gateway.tulupay.com"><IoIosLink className="kilo" />
                    </a ></span>Tulugateway <span>  <a target="_blank" rel="noopener noreferrer" href="https://github.com/olaniyigd"><SiGithub className="kilo" />
                    </a></span></p>
                    <p className="description">Tulugateway is a platform under Tulupay.</p>
                </div>
              
              
            </div>
          
        </div>
    )
}