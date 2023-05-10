import Navbar from "../navbar";
import "./about.scss";
import responsibilities from "./data";
import Circle from "./circle";

const About = () => {
  return (
    <div className="about">
      <div className="about_navbar">
        <Navbar />
      </div>
      <div className="about_body">
        <div className="about_body_title">About Me</div>

        <div className="about_body_content">
          <div className="about_body_content_one">
            I am a frontend developer who loves making unique web applications.
            I specialize in the React Framework along with designing web pages.
            When I'm not submerged in college studies or looking for new ideas
            to design and develop new solutions for real life problems, I
            indulge myself to the reading of Machine Learning and have also
            worked on a project related to the field.
          </div>
          <div className="about_body_content_two">
            <div className="about_body_content_two_text">
              Along with my interests in various fields and dimensions I also
              have following responsibilities:
            </div>
            <div className="about_body_content_two_list">
              {responsibilities.map((responsibility) => {
                return <Circle props={responsibility} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
