import "./Main.css";
import Nav from "./Nav";
import "./Nav.css";
import "./Mnav.css";
import Front from "./Front";
import About from "./About";
import Skill from "./Skill";
import Resume from "./Resume";
import Achieve from "./Achieve";
import Service from "./Service";
import Footer from "./Footer";
import Bottom from "./Bottom";
import Count from "./Count";
import { FiArrowUp } from "react-icons/fi";
import Port from "./Port";
export default function Main(){
    return(
            <div className="main">
                <div className="left">
                    <Nav/>
                </div>
                <div id="home" className="right">
                    <Front/>
                    <About />
                    <Resume />
                    <Skill />
                    {/* <Achieve />
                    <Count /> */}
                    <Port />
                    {/* <Service /> */}
                    {/* <Footer /> */}
                    <Bottom />
                    <a className="float" href="#home">
                 <button className='arbtn'> <FiArrowUp /> </button>
                 </a>
                </div>
            </div>
    )
}
