import "./Service.css";
import { FiChevronRight } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CgWebsite } from "react-icons/cg";

export default function Service() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const handleClick = (index) => {
        setHoveredCard(index);
    };

    return (
        <div id="services">
            <h1 className="service-title">SERVICE</h1>
            <div className="service">
                {["Web Development", "App Development", "UI/UX Design"].map((service, index) => (
                    <div
                        key={index}
                        className="card"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(index)}
                    >
                        <CgWebsite className="iop" />
                        <p className="text">{service}</p>
                        <p className="text2">
                            {service === "Web Development" && "Boost your online presence with our expert web development services. Get a sleek, responsive website that stands out. Contact us today!"}
                            {service === "App Development" && "Transform your ideas into powerful apps with our expert app development services. Get a custom, user-friendly app today!"}
                            {service === "UI/UX Design" && "Enhance your digital experience with our top-notch UI/UX design services. Create intuitive, visually stunning interfaces that users love. Let's design your success!"}
                        </p>
                        {(hoveredCard === index) && (
                            <a
                                href="https://wa.me/2348107265575?text=Hi%20Faruq"
                                className="contact-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact Me
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
