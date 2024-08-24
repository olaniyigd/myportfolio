import "./Front.css";
export default function Front () {
    return(
        <div id="front">
            <div className="overlay">
                <div className="overlay-text">
                <div class="wrapper">
                    <div class="static-txts">HI! I'm Faruq Olaniyi Gbadegesin</div>
                    <div class="static-txts">A software Developer</div>
                    {/* <ul class="dynamic-texts">
                        <li><span>SOFTWARE DEVELOPER</span></li>
                    </ul> */}
                </div>
                     {/* <p className="front-text"> Hi, I am Gbadegesin Faruq, An Experienced software developer with a strong proficiency in a
wide range of web development technologies including HTML,
CSS, JavaScript, Bootstrap, Tailwind CSS, Node.js, React.js, and
Next.js.</p> */}
                </div>
                <div className="overlay-btn">
                <a className="hire" href="https://wa.me/2348107265575?text=Hi Faruq Olaniyi Gbadegesin">Hire Me</a>
                </div>
            </div>
        </div>
    )
}