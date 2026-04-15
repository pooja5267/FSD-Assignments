import React from "react";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={profileImg} alt="Pooja Chile" className="profile-img" />
      <h1>Hi, I'm Pooja 👋</h1>
      <p>Computer Engineering Student | Web & Android Developer</p>
      <a href="#projects" className="btn">View Projects</a>
    </section>
  );
};

export default Hero;
