import React from "react";
import "./Styles/About.css";
import fgr from "./Images/fgr.jpg";

const About = () => (
  <section className="about" id="about">
    <img
      src={fgr}
      alt="okiImages"
      style={{ width: "40%", height: "auto", borderRadius: "60%" }}
    />
    <h2>A Propos De Moi</h2>
    <p>
      Je suis <strong>GABA Kossi Martinien</strong>, élève en 1ère année de
      cycle ingénieur génie informatique à l'ENSA Fès. Âgé de 23 ans et
      originaire de Vogan au Togo, j'ai obtenu un baccalauréat en Mathématiques
      et Sciences Physiques. Mon parcours académique est marqué par une passion
      pour les sciences et l'ingénierie, et je suis déterminé à continuer à
      apprendre et à évoluer dans ce domaine dynamique.
    </p>
  </section>
);

export default About;
