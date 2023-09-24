import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
  const web = "https://placehold.co/400x200";
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
