import "./Port.css";
import portfolio from "../Portfolioimage/portfolio.jpeg";
import weather from "../Portfolioimage/weather.jpeg";
import gifted from "../Portfolioimage/gifted.jpeg";
import techcorp from "../Portfolioimage/techcorp.png";
import busd from "../Portfolioimage/busd.png";
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
                <a href="https://dakieodev-portfolio.vercel.app/">
                    <img src={portfolio} alt="portfolio" className="portfolio"/>
                    <p className="description">My portfolio Website created with reactjs.</p>
                    <p className="description">click the image to have a view.</p>
                </a>
            </figure>
            <figure data-aos="fade-left" className="figure">
             <a href="https://weatherapp-flame-sigma.vercel.app/">
                    <img src={weather} alt="weather" className="weather"/>
                    <p className="description">Weather App created with reactjs.</p>
                    <p className="description">click the image to have a view.</p>
                </a>
            </figure>
            <figure data-aos="fade-left" className="figure">
             <a href="https://giftedbrainz.vercel.app/">
                    <img src={gifted} alt="weather" className="weather"/>
                    <p className="description">Gifted-Brainz created with reactjs.</p>
                    <p className="description">click the image to have a view.</p>
                </a>
            </figure>
            </div>
            <div className="port-up">
            <figure data-aos="fade-up" className="figure">
                <a href="https://techcorp-one.vercel.app/">
                    <img src={techcorp} alt="portfolio" className="portfolio"/>
                    <p className="description">page created with reactjs.</p>
                    <p className="description">click the image to have a view.</p>
                </a>
            </figure>
            <figure data-aos="fade-left" className="figure">
             <a href="https://olaniyigd.github.io/busdconversion/api.html">
                    <img src={busd} alt="weather" className="weather"/>
                    <p className="description">BUSD conversion App created with html, css, and javascript.</p>
                    <p className="description">click the image to have a view.</p>
                </a>
            </figure>
            </div>
        </div>
    )
}