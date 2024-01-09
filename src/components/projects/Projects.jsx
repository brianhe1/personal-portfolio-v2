import React from "react";
import PROJECT1 from "../../assets/project-1.jpg";
import PROJECT2 from "../../assets/project-2.jpg";
import PROJECT3 from "../../assets/project-3.jpg";
import PROJECT4 from "../../assets/project-4.jpg";
import "./projects.css";

/* const array of data */
const data = [
  {
    id: 1,
    image: PROJECT1,
    title: "01. Tasks with Appa",
    description:
      "Simple to-do list application to easily manage tasks while enjoying Appa's presence. Enhance productivity of your daily goals with this user-friendly site.",
    weblink: "https://brianhe1.github.io/my-to-do-list/",
  },
  {
    id: 2,
    image: PROJECT2,
    title: "02. Personal Portfolio",
    description:
      "Explore a showcase of my past experiences and projects. Discover my work as a junior developer through a user-friendly design that highlights my passion for technology.",
    weblink: "#",
  },
  {
    id: 3,
    image: PROJECT3,
    title: "03. Weather Application",
    description:
      "Weather application that provides real-time weather updates for any city available on OpenWeatherMap. Project serves as an introduction to Tailwind CSS and API usage.",
    weblink: "https://brianhe1.github.io/weather-application/",
  },
  {
    id: 4,
    image: PROJECT4,
    title: "04. Restaurant Mock Site",
    description:
      "Mock website of a restaurant that showcases the restaurant's menu, hours and locations, history, and order menu. Project serves as a practice to web development and its applications.",
    weblink: "https://brianhe1.github.io/restaurant-website/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container projects-container">
        <div className="title-container">
          <h2>my recent work</h2>
          <h5>
            Each project is unique. Here are a few of the projects I've worked
            on in the past.
          </h5>
        </div>
        <div className="projects-grid">
          {data.map(({ id, image, title, description, weblink }) => {
            return (
              <article key={id} className="project-item">
                <div className="project-item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="project-item-hover">
                  <h5>{title}</h5>
                  <h6>{description}</h6>
                  <div className="project-item-cta">
                    <a
                      href={weblink}
                      className="link-project-btn"
                      target="_blank"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
