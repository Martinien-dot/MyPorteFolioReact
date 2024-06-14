import React from "react";
import insea from "./Images/GameOfCode.jpg";
import upf from "./Images/UpfPh.jpeg";
import "./Styles/Experience.css";

const Experience = () => (
  <section className="experience" id="experience">
    <h2>Experience</h2>
    <div>
      <h3>Une année dans la programmation compétitive</h3>
      <p>Familiarisé avec les problèmes en programmation.</p>
    </div>
    <div>
      <a href="#">
        <img
          src={insea}
          alt="Calculette de Martinien"
          style={{ width: "300px", height: "auto", borderRadius: "15%" }}
        />
      </a>
      <p>
        Mon équipe lors du concours de programmation organisé par L'INSEA Rabat
        en Mars 2024
      </p>
    </div>
    <div>
      <h3>Project 3</h3>
      <a href="#">
        <img
          src={upf}
          alt="Calculette de Martinien"
          style={{ width: "200px", height: "auto", borderRadius: "15%" }}
        />
      </a>
      <p>
        Mon équipe lors du concours de programmation organisé par L'upf en Mai
        2024
      </p>
    </div>
    <div>
      <h3>Developpement web en javascript, html, css</h3>
      <p>Une année d'expérience</p>
    </div>
  </section>
);

export default Experience;
