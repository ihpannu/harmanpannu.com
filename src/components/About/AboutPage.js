import React from 'react';
import Link from 'gatsby-link';
import Footer from '../Footer/Footer';

// About Page
const AboutPage = () => (
  <div>
    <section className="about">
      <h1>About</h1>
      <div>
        <p>
          Web developer specializing in front-end development. Experienced in
          developing responsive websites and web applications from scratch in
          HTML, CSS, Javascript and Javascript frameworks such as jQuery and
          React JS etc. I like little details and love interactivity. I believe
          in simplicity and consistency. Passionate about learning new
          technologies and solving problems.
        </p>
        <br />

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
              <li style={{ color: '#E94A61' }}>JavaScript</li>
              <li style={{ color: '#56C0DE' }}>React JS</li>
              <li style={{ color: '#836EA7' }}>RESTful Services and APIs</li>
              <li style={{ color: '#62B9A6' }}>AJAX, XHR and JSON</li>
            </ul>
            <br />
            <li>
              TeamTreeHouse - Jan 2018 - Present - Tech Degree - Full Stack
              JavaScript
            </li>
            <ul className="list">
              <h4>Technologies I am currently Learning at Treehouse</h4>
              <li style={{ color: '#E94A61' }}>JavaScript</li>
              <li style={{ color: '#56C0DE' }}>React JS</li>
              <li style={{ color: '#1267AD' }}>jQuery</li>
              <li style={{ color: '#016E00' }}>Node.js</li>
              <li style={{ color: '#309BFF' }}>Express</li>
              <li style={{ color: '#68B33F' }}>MongoDB</li>
            </ul>
            <br />
            <li>
              TeamTreeHouse - Aug 2017 - Present - Frontend Web Development
            </li>
            <ul className="list">
              <h4>Technologies I Learned</h4>
              <li style={{ color: '#E24D25' }}>HTML</li>
              <li style={{ color: '#315FF1' }}>CSS</li>
              <li style={{ color: '#CE629A' }}>SCSS</li>
              <li style={{ color: '#1267AD' }}>jQuery</li>
            </ul>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  </div>
);
export default AboutPage;
