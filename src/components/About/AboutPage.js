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
          Hi, Stranger 🙃, <br /> I am Web Developer specializing in front-end
          web development. Experienced in building Web Applications in React JS
          and static websites in Gatsby JS (React) and in Html, CSS, JS, and
          jQuery. I also have experience in working with RESTful API's. I tend
          to write lots of Javascript and have a genuine passion for web. I like
          little details, love interactivity, and UI & UX.
        </p>
        <p>
          I believe in simplicity and consistency. Currently, I am seeking to
          learn and grow under the mentorship of proficient developers. I am
          very passionate about learning new technologies and solving problems.
          Looking for a company to help solve problems.
        </p>
        <p>
          Check out my projects on -
          <a href="https://github.com/iharmanpannu"> Github </a>
          I look forward to applying my coding experience to a career in tech.
        </p>
        <br />
        <p>My favorite quote 😊 </p>
        <i className="quote">
          " There are no secrets to success. It is the result of preparation,
          hard work, and learning from failure. "
        </i>
        <hr />
      </div>

      <div>
        <div className="resume-inside">
          <ul className="summary">
            <h3>Skills in Web Development</h3>
            <li>
              HTML, CSS, JavaScript, React JS, Gatsby JS, jQuery, RESTful
              Services and APIs, Graph-ql, SCSS, Version Control/Git, Responsive
              and Mobile Design
            </li>
            <li>
              Github, JSON, AJAX, Webservices API's, Youtube API, Spotify API,
              Google Api, AWS, Testing/Debugging
            </li>
            <li>
              WordPress theme design, Problem Solving and Attention to Detail,
              Command Line, Visual Studio Code, UI/UX
            </li>
            <li>
              Front-end design, Front-end coding, Adobe PS - AI - PP, Wordpress
            </li>
            <br />
            <hr />
            <br />
            <h3>Skills in General</h3>
            <li>
              Excellent organization, self-motivation, and problem-solving
              skills, Flexible, Resourceful & Reliable Collaboration &
              Communication Commitment
            </li>
            <li>
              Enthusiasm & Motivation, Management & Leadership, Optimising Team
              Performance, High Pressure Work Environments, Deadline & Target
              Management
            </li>
            <li>
              Creative, and strong communication skills, Empathy & Cultural
              Awareness, Constructive Feedback
            </li>
            <li>Passionate about web development and new technologies.</li>
          </ul>
          <br />
          <hr />
          <br />
          <h3>Education </h3>
          <ul className="education">
            <li>
              Karnataka State Open University - Bachelors of Computer
              Applications 2016
              <p>
                Mathematics, C++, Algorithm and Analysis, Java, Web Design
                Software, Engineering, Unix and Shell Programming, Relational
                Database Management System.
              </p>
            </li>

            <br />
            <li>
              Codeacademy - Nov 2017 - Jan 2018- Build front-end Web
              Applications from scratch -
            </li>
            <ul className="list">
              <p>Technologies I Learned</p>
              <li style={{ color: "#E94A61" }}>JavaScript</li>
              <li style={{ color: "#56C0DE" }}>React JS</li>
              <li style={{ color: "#836EA7" }}>RESTful Services and APIs</li>
              <li style={{ color: "#62B9A6" }}>AJAX, XHR and JSON</li>
            </ul>
            <br />
            <li>
              TeamTreeHouse - Jan 2018 - Present - Tech Degree - Full Stack
              JavaScript
            </li>
            <ul className="list">
              <h4>Technologies I am currently Learning at Treehouse</h4>
              <li style={{ color: "#E94A61" }}>JavaScript</li>
              <li style={{ color: "#56C0DE" }}>React JS</li>
              <li style={{ color: "#1267AD" }}>jQuery</li>
              <li style={{ color: "#016E00" }}>Node.js</li>
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
