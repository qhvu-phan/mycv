import React from "react";
import AboutMe from "../../component/AboutMe/AboutMe";
import Skill from "../../component/Skill/Skill";
import WorkExp from "../../component/WorkExp/WorkExp";
import Footer from "../../component/Footer/Footer";

const AboutMePage = () => {
  return (
    <div>
      <AboutMe />
      <Skill />
      <WorkExp />
      <Footer />
    </div>
  );
};

export default AboutMePage;
