import React from "react";
import Footer from "../Footer/Footer";

const projects = [
  {
    title: "Harmanpannu.com",
    link: "http://harmanpannu.com",
    desc: "My personal portfolio website : <br/> Built with: Gatsby JS (ReactJs), SCSS and " +
        "Used library Particle JS for background animations.",
    src: "https://media.giphy.com/media/l0HUao3pHOJA8zXZC/giphy.gif"
  }, {
    title: "Jamming",
    link: "http://jamwithme.surge.sh/",
    desc: "Spotify Track search and Save Playlist Web App : <br /> Build using Spotify API'" +
        "s and React JS",
    src: "https://media.giphy.com/media/xULW8MrR8F5f0YuW8o/giphy.gif"
  }, {
    title: "Ravenous",
    link: "https://iharmanpannu.github.io/ravenous",
    desc: "A restaurant search Web App created using Yelp API : Built With: React JS, Yelp " +
        "API's, fetch",
    src: "https://media.giphy.com/media/l0HTYUDLAi6Nuyruw/giphy.gif"
  }, {
    title: "Gif Search",
    link: "http://gifs-search.surge.sh",
    desc: "Giphy Search Web App created using Giphy.com API's and React JS",
    src: ""
  }, {
    title: "Taico Restaurant ",
    link: "http://taicorestaurant.surge.sh",
    desc: "Restaurant Business Parallax Website <br />Built With: HTML, SCSS, CSS Transitio" +
        "ns and CSS Library Animations.css",
    src: "https://media.giphy.com/media/xULW8p4tnxfVELw7xS/giphy.gif"
  }, {
    title: "Find an Agent",
    link: "http://findagent.surge.sh ",
    desc: "Static real estate agent company website <br />Built With: HTML, SASS and Transi" +
        "tions",
    src: "https://media.giphy.com/media/3oFzmkH3TIrHbmVTDW/giphy.gif"
  }, {
    title: "Simple Portfolio",
    link: "http://project-one-td.surge.sh",
    desc: "Frontend Tech Degree Project 1 : <br/> Built with: HTML, CSS Flexbox layout syst" +
        "em and CSS Transitions ",
    src: "https://media.giphy.com/media/xULW8vXxaNz9xlRS3C/giphy.gif"
  }, {
    title: "Responsive Portfolio",
    link: "http://td-project-2.surge.sh/",
    desc: "Frontend Tech Degree Project 2 : <br/> Built with: HTML, CSS Grid and Flexbox la" +
        "yout system. Also used CSS Animations.",
    src: "https://media.giphy.com/media/l0HTYUDLAi6Nuyruw/giphy.gif"
  }
];

const Project = () => (
  <div>
    <section className="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li >
            <h3 className="project-title">
              <a
                target="_blank"
                href={project.link}
                style={{
                color: "#16a085"
              }}>
                {project.title}
              </a>
            </h3>
            <p
              dangerouslySetInnerHTML={{
              __html: project.desc
            }}/>
            <img className="project-gifs" src={project.src} alt="projects"/>
          </li>

        ))}

      </ul>
      <Footer/>
    </section>
  </div>
);

export default Project
