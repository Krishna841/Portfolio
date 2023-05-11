import "./landing.scss";

import head from "../../assets/baymax.svg";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Landing = () => {
  // const followMouse = (e) => {
  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;
  //   const head = document.getElementById("head");
  //   head.style.left = mouseX + "px";
  //   head.style.top = mouseY + "px";
  // };
  return (
    <div className="landing">
      <div className="landing_navbar">
        <Navbar />
      </div>
      <div className="landing_body">
        <div className="landing_body_text">
          <div className="landing_body_text_t">
            <div className="landing_body_text_t_old">Hello!!</div>
            <div className="landing_body_text_t_new">
              <Link to="/contact"> Contact</Link>
            </div>
          </div>
          <div className="landing_body_text_about">
            <div className="landing_body_text_about_old">I'm Krishna,</div>
            <div className="landing_body_text_about_new">
              <Link to="/about"> About</Link>
            </div>
          </div>
          <div className="landing_body_text_work">
            <div className="landing_body_text_work_old">
              a frontend developer
            </div>
            <div className="landing_body_text_work_new">
              <Link to="/projects"> Projects</Link>
            </div>
          </div>
        </div>
        <div className="landing_body_anime">
          <div className="landing_body_anime_head" id="head">
            <img src={head} alt="head" height={75} width={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
