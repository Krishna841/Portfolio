import Navbar from "../navbar";
import "./contact.scss";
import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/git.svg";
import discord from "../../../assets/discord.svg";
import email from "../../../assets/email.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_navbar">
        <Navbar />
      </div>
      <div className="contact_body">
        <div className="contact_body_title">
          Let's make something great together!
        </div>
        <div className="contact_body_content">
          <div className="contact_body_content_one">
            Thankyou for visiting my website. Whether you have a small or large
            project in mind, I'm always happy to discuss your requirements and
            provide you with a tailored solution that meets your needs and
            budget. I'm proficient in a wide range of programming languages,
            such as HTML, CSS, JavaScript, CPP, and Python, and I'm experienced
            in working with different frameworks such as ReactJS and Django.
          </div>
          <div className="contact_body_content_two">
            So, if you have any questions or would like to request a quote,
            please don't hesitate to contact me via the below links. I'm looking
            forward to hearing from you!
          </div>
          <div className="contact_body_content_links">
            <div className="contact_body_content_links_one">
              <a href="https://www.linkedin.com/in/krishna-goswami-5584561b1/">
                <img src={linkedin} height={25} width={25} alt="linkedin" />{" "}
                Linkedin
              </a>
            </div>
            <div className="contact_body_content_links_two">
              <img src={github} height={25} width={25} alt="github" />
              Github
            </div>
          </div>
          <div className="contact_body_content_more">
            <div className="contact_body_content_more_one">
              <img src={email} height={25} width={25} alt="email" />
              goswamikrishna841@gmail.com
            </div>
            <div className="contact_body_content_more_two">
              <img src={discord} height={25} width={25} alt="discord" /> Discord
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
