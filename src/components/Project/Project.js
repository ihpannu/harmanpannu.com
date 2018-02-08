import React from "react";
import Footer from "../Footer/Footer";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const projects = [
  {
    title: "Harmanpannu.com ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu",
    link: "https://harmanpannu.com/",
    desc:
      "My personal portfolio website : <br/> Built with: Gatsby JS (ReactJs), SCSS and " +
      "Used library Particle JS for background animations.",
    src: "https://media.giphy.com/media/l0HUao3pHOJA8zXZC/giphy.gif"
  },
  {
    title: "Jamming ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/jamming-app",
    link: "http://jamwithme.surge.sh/",
    desc:
      "Spotify Track search and Save Playlist Web App : <br /> Build using Spotify API'" +
      "s and React JS",
    src: "https://media.giphy.com/media/xULW8MrR8F5f0YuW8o/giphy.gif"
  },
  {
    title: "Ravenous ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/ravenous",
    link: "https://iharmanpannu.github.io/ravenous",
    desc:
      "A restaurant search Web App created using Yelp API : Built With: React JS, Yelp " +
      "API's, fetch",
    src: "https://media.giphy.com/media/3oFzmftmJx84DQhaBa/giphy.gif"
  },
  {
    title: "Gif Search ",
    LiveDemo: "Live Demo",

    github: "https://github.com/iharmanpannu/gif-search",
    link: "http://gifs-search.surge.sh",
    desc: "Giphy Search Web App created using Giphy.com API's and React JS",
    src: "https://media.giphy.com/media/3o752aC2HId35LfDdC/giphy.gif"
  },
  {
    title: "Taico Restaurant ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/taico-restaurant",
    link: "http://taicorestaurant.surge.sh",
    desc:
      "Restaurant Business Parallax Website <br />Built With: jQuery, HTML, CSS Transitio" +
      "ns and CSS Library Animations.css",
    src: "https://media.giphy.com/media/3ohs4zc09VEYDgHFYc/giphy.gif"
  },
  {
    title: "Design Agency ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/Design-Solutions",
    link: "https://designagency.surge.sh/",
    desc:
      "Another side project website for design agency. <br />Built With: jQuery, HTML, CSS Transitio" +
      "ns and CSS Animations",
    src: "https://media.giphy.com/media/xUOwG4dlVaNGzVdIv6/giphy.gif"
  },
  {
    title: "Find an Agent ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/find-agent",
    link: "http://findagent.surge.sh ",
    desc:
      "Responsive Static Real Estate Agent Company website.  <br />Built With: HTML, SA" +
      "SS and CSS Transitions",
    src: "https://media.giphy.com/media/3oFzmkH3TIrHbmVTDW/giphy.gif"
  },
  {
    title: "Simple Portfolio ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/td-project-two",
    link: "http://project-one-td.surge.sh",
    desc:
      "Frontend Tech Degree Project 1 : <br/> Built with: HTML, CSS Flexbox layout syst" +
      "em and CSS Transitions ",
    src: "https://media.giphy.com/media/xULW8vXxaNz9xlRS3C/giphy.gif"
  },
  {
    title: "Responsive Portfolio ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/td-project-one",
    link: "http://td-project-2.surge.sh/",
    desc:
      "Frontend Tech Degree Project 2 : <br/> Built with: HTML, CSS Grid and Flexbox la" +
      "yout system. Also used CSS Animations.",
    src: "https://media.giphy.com/media/l0HTYUDLAi6Nuyruw/giphy.gif"
  },
  {
    title: "jQuery Blog ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/jQueryBlog",
    link: "http://jqueryblog.surge.sh/",
    desc:
      "jQuery Blog where user can type in input field and immediately see results on the webpage : <br/> Built with: jQuery, HTML, CSS",
    src: "https://media.giphy.com/media/3o7WIJ9Oscwu3AW0H6/giphy.gif"
  },
  {
    title: "A Responsive Form ",
    LiveDemo: "Live Demo",
    github: "https://github.com/iharmanpannu/td-project-3",
    link: "http://thecodereview.surge.sh",
    desc:
      "A responsive sign up form for 'The Code Review' website. <br/> Built with: HTML, CSS, FlexBox ",
    src: "https://media.giphy.com/media/xULW8mdl8lvLYx9zgc/giphy.gif"
  }
];

const Project = () => (
  <div>
    <section className="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li>
            <h3 className="project-
      title">
              <a
                target="_blank"
                href={project.link}
                style={{
                  color: "#16a085"
                }}
              >
                {project.title}
              </a>
              <h4>
                <a
                  target="_blank"
                  href={project.github}
                  style={{
                    color: "#F16D7E"
                  }}
                >
                  Github Code
                </a>
              </h4>
              <h4>
                <a
                  target="_blank"
                  href={project.link}
                  style={{
                    color: "#F06C7D"
                  }}
                >
                  {project.LiveDemo}
                </a>
              </h4>
            </h3>

            <p
              dangerouslySetInnerHTML={{
                __html: project.desc
              }}
            />
            <a target="_blank" href={project.link}>
              <img className="project-gifs" src={project.src} alt="projects" />
            </a>
          </li>
        ))}
      </ul>
      <Footer />
    </section>
  </div>
);

export default Project;
