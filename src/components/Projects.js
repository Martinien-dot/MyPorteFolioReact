import React from "react";
import "./Styles/Projects.css";
import proj1 from "./Images/CalculatriceProj.png";
import proj2 from "./Images/scrn1.png";
import proj3 from "./Images/SerpentGame.png";
import proj4 from "./Images/FormulaireJava.png";

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div>
      <h3>Project 1</h3>
      <a href="https://martinien-dot.github.io/calculette-MartinienGK/">
        <img
          src={proj1}
          alt="Calculette de Martinien"
          style={{ width: "300px", height: "auto", borderRadius: "15%" }}
        />
      </a>
      <p>Réalisation d'une calculatrice avec du html, css et javascript.</p>
    </div>
    <div>
      <h3>Project 2</h3>
      <a href="#">
        <img
          src={proj2}
          alt="Calculette de Martinien"
          style={{ width: "300px", height: "auto", borderRadius: "15%" }}
        />
      </a>
      <p>
        Réalisation du jeu de TicTacToe sous la supervision du Professeur
        LAKRISSI
      </p>
    </div>
    <div>
      <h3>Project 3</h3>
      <a href="#">
        <img
          src={proj3}
          alt="Calculette de Martinien"
          style={{ width: "200px", height: "auto", borderRadius: "15%" }}
        />
      </a>
      <p>
        Réalisation du jeu de serpent en JAVA sous la supervision du Professeur
        LAKRISSI
      </p>
    </div>
    <div>
      <h3>Project 4</h3>
      <a href="#">
        <img
          src={proj4}
          alt="Calculette de Martinien"
          style={{ width: "300px", height: "auto", borderRadius: "15%" }}
        />
      </a>
      <p>
        Réalisation d'un formulaire java permettant d'obtenir les informations
        d'un client, également sous la supervision du Professeur LAKRISSI
      </p>
    </div>
  </section>
);

export default Projects;
