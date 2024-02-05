/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Password_Generator",
    description:
      "A robust React-based Password Generator styled with Tailwind CSS. Create strong, secure passwords with customizable options (length, uppercase, lowercase, numbers, special characters). Effortlessly copy generated passwords with a single click. Enjoy a user-friendly interface and responsive design for a seamless experience.",
    url: "https://ridhikajoshi-password-generator.netlify.app/",
  },
  {
    title: "QuickExchange",
    description:
      "A simple currency converter web application that allows users to convert between different currencies. The application fetches real-time exchange rates using a third-party API and provides an easy-to-use interface for users to input values and select currencies for conversion.",
    url: "https://ridhikajoshi-quickexchange.netlify.app/",
  },
  {
    title: "Anagram_Quest",
    description:
      "Anagram Quest: A captivating word puzzle game! Rearrange jumbled letters, test your vocabulary, and challenge your brain. Score points for correct answers, race against the timer for added excitement, and enjoy sound effects for feedback. Responsive design ensures a seamless experience on different screen sizes. Dive into this anagram-solving adventure and have fun!",
    url: "https://anagram-quest.netlify.app/",
  },
  {
    title: "E-Bakery-Website",
    description:
      "Welcome to the E-Bakery Website project—an enticing online platform designed to bring the delightful experience of a bakery to the digital realm. Our aim is to create an engaging space that seamlessly showcases a diverse array of bakery products. With a focus on nearly 100% device responsiveness, users can enjoy a consistent and enjoyable journey across desktops, tablets, and smartphones.",
    url: "https://e-bakerywebsite.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
