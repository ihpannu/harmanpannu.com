import React from "react";
import Link from "gatsby-link";
import Footer from "../Footer/Footer";

// import fontawesome from "@fortawesome/fontawesome"; import FontAwesomeIcon
// from "@fortawesome/react-fontawesome"; import Header from "../Header/Header"
const AboutPage = () => (
  <div>
    <section className="about">
      <h1>About</h1>
      <div>
        <p>
          Hi,<br /> I am Harman Pannu, Experienced in Building Frontend Web
          Applications(React JS) and Static Websites(Html, CSS, JS) and seeking
          to Learn and Grow under Mentorship of Proficient Developers.
          Passionate about learning new technologies and solving problems.
        </p>
        <p>
          I code every day and when I am not coding I read books, watch
          programming tutorials online, listen to podcasts, learn new
          technologies and workout. Check out my project on -
          <a href="https://github.com/iharmanpannu"> Github </a>
          I look forward to applying my coding experience to a career in tech.
        </p>
        <br />
        <i className="quote">
          " There are no secrets to success. It is the result of preparation,
          hard work, and learning from failure. "
        </i>
      </div>

      <div>
        <div className="resume-inside">
          <h3>Resume</h3>
          <ul className="summary">
            <li>
              Excellent organization, self-motivation, and problem-solving
              skills.
            </li>
            <li>Creative, and strong communication skills.</li>
            <li>Passionate about web development and new technologies.</li>
          </ul>

          <h3>Education </h3>
          <ul className="education">
            <li>
              Karnataka State Open University - Bachelors of Computer
              Applications 2016
            </li>
            <br />
            <li>
              Codeacademy - Nov 2017 - Jan 2018- Build front-end Web
              Applications from scratch -
            </li>
            <ul className="list">
              <h4>Technologies I Learned</h4>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Web API's</li>
              <li>AJAX, XHR and JSON</li>
            </ul>
            <br />
            <li>
              TeamTreeHouse - Jan 2018 - Present - Tech Degree - Full Stack
              JavaScript
            </li>
            <ul className="list">
              <h4>Technologies I am currently Learning at Treehouse</h4>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
            <br />
            <li>
              TeamTreeHouse - Aug 2017 - Present - Frontend Web Development
            </li>
            <ul className="list">
              <h4>Technologies I Learned</h4>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
            </ul>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  </div>
);
export default AboutPage;
