import React from "react";
import Footer from "../Footer/Footer";

const projects = [
  {
    title: "Jamming",
    link: "http://jamwithme.surge.sh/",
    desc:
      "Spotify Track search and Save Playlist Web App : <br /> Build using Spotify API's and React JS"
  },
  {
    title: "Ravenous",
    link: "https://iharmanpannu.github.io/ravenous",
    desc:
      "A restaurant search Web App created using Yelp API : Built With: React JS, Yelp API's, fetch"
  },
  {
    title: "Gif Search",
    link: "http://gifs-search.surge.sh",
    desc: "Giphy Search Web App created using Giphy.com API's and React JS"
  },
  {
    title: "Taico Restaurant ",
    link: "http://taicorestaurant.surge.sh",
    desc: "Restaurant Business Parallax Website <br />Built With: HTML, SCSS, CSS Transitions and CSS Library Animations.css"
  },
  {
    title: "Find an Agent",
    link: "http://findagent.surge.sh ",
    desc:
      "Static real estate agent company website <br />Built With: HTML, SASS and Transitions"
  },
  {
    title: "Simple Portfolio",
    link: "http://project-one-td.surge.sh",
    desc:
      "Frontend Tech Degree Project 1 : <br/> Built with: HTML, CSS Flexbox layout system and CSS Transitions "
  },
  {
    title: "Responsive Portfolio",
    link: "http://td-project-2.surge.sh/",
    desc:
      "Frontend Tech Degree Project 2 : <br/> Built with: HTML, CSS Grid and Flexbox layout system. Also used CSS Animations."
  },
];


const Project = () => (
  <div>
    <section className="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li>
            <h3 className="project-title">
              <a
                target="_blank"
                href={project.link}
                style={{ 
                  color: "#16a085"
                   }}
              >
                {project.title}
              </a>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: project.desc }} />
          </li>
        ))}
      </ul>
      <Footer />
    </section>
  </div>
);


export default Project


