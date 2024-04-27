import "./Port.css";
import React, { useEffect } from "react";

import "aos/dist/aos.css";
export default function Port () {
    
    return(
        <div id="port">
            <h1  className="port-title">Project</h1>
            <div className="port-up">
            <figure className="figure">
             <a href="https://tulupay.com/live">
                    <img src="/Portfolioimage/tulupay.png" alt="weather" className="weather"/>
                    <p className="description">TULUPAY.COM
I am one of those who worked on tulupay.com. I developed the
tulupay ecosystem [tulupay.com], tulupayExchange
[exchange.tulupay.com], and tulupaySwitch [switch.tulupay.com] products of the
project. Tulupay is a groundbreaking payment platform that
empowers individuals and businesses. It provides an inclusive
ecosystem built on reliable technology for financial services that
can contribute to sustainable growth for Africa while taking
financial services to the unbanked and underbanked.</p>
                </a>
            </figure>
            </div>
            <div className="port-up2">
            <figure className="figure">
                <a href="https://voucherpay.online">
                    <img src="/Portfolioimage/voucherpay.png" alt="portfolio" className="portfolio"/>
                    <p className="description">As a frontend developer, I am one of those who worked on
voucherpay.online. I developed the owner dashboard and admin dashboard sides of the project. Voucherpay.online is a product of MSME, a B2B
platform that offers customized payment solutions that can be
tailored to the specific needs of your cooperative and business.
The payment processing experts will work with you to develop a
solution that is optimized for your business, whether you need
to process large volumes of transactions or require complex
payment integrations.</p>
                </a>
            </figure>
            </div>
        </div>
    )
}