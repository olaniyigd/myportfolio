import "./Port.css";
import portfolio from "../Portfolioimage/portfolio.jpeg";
import weather from "../Portfolioimage/weather.jpeg";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Port () {
    useEffect (()=>{
        Aos.init({duration:1200});
      }, [])
    return(
        <div id="port">
            <h1 data-aos="fade-up"  className="port-title">Portfolio</h1>
            <div className="port-up">
            <figure data-aos="fade-up" className="figure">
                <a href="dakieodev-portfolio.vercel.app/">
                    <img src={portfolio} alt="portfolio" className="portfolio"/>
                    <p className="description">My portfolio Website</p>
                    <p className="description">click the image to have a view.</p>
                </a>
            </figure>
            <figure data-aos="fade-left" className="figure">
             <a href="https://weatherapp-drab-one.vercel.app/">
                    <img src={weather} alt="weather" className="weather"/>
                    <p className="description">Weather App</p>
                    <p className="description">click the image to have a view.</p>
                </a>
            </figure>
            </div>
        </div>
    )
}