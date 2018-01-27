import React from "react";
import Link from "gatsby-link";
import Footer from "../Footer/Footer";

// About Page
const AboutPage = () => (
  <div>
    <section className="about">
      <h1>About</h1>
      <div>
        <p>
          Hi, Stranger 🙃, <br /> I am Harman Pannu experienced in building
          Frontend Web Applications in React JS and Static Websites in Gatsby JS
          and in Html, CSS, JS. Currently, I am seeking to Learn and Grow under
          Mentorship of Proficient Developers. I am very passionate about
          learning new technologies and solving problems.
        </p>
        <p>
          I code every day and when I am not coding I read books, watch
          programming tutorials online, listen to podcasts, learn new
          technologies and workout. Check out my project on -
          <a href="https://github.com/iharmanpannu"> Github </a>
          I look forward to applying my coding experience to a career in tech.
        </p>
        <br />
        <p>My favorite quote 😊 </p>
        <i className="quote">
          " There are no secrets to success. It is the result of preparation,
          hard work, and learning from failure. "
        </i>
      </div>

      <div>
        <div className="resume-inside">
          <h1>Resume</h1>
          <ul className="summary">
            <h3>Skills in Web Development</h3>
            <li>HTML, CSS, JavaScript, React JS, Gatsby JS, Graph-ql, SCSS</li>
            <li>
              Github, JSON, AJAX, Webservices API's, Youtube API, Spotify API,
              Google Api
            </li>
            <li>
              Front-end design, Front-end coding, Adobe PS - AI - PP, Wordpress
            </li>
            <br />
            <h3>Skills in General</h3>
            <li>
              Excellent organization, self-motivation, and problem-solving
              skills.
            </li>
            <li>Creative, and strong communication skills.</li>
            <li>Passionate about web development and new technologies.</li>
          </ul>
          <br />
          <h3>Education </h3>
          <ul className="education">
            <li>
              Karnataka State Open University - Bachelors of Computer
              Applications 2016
              <li>
                Mathematics, C++, Algorithm and Analysis, Java, Web Design
                Software, Engineering, Unix and Shell Programming, Relational
                Database Management System.
              </li>
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
