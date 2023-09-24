import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
    const web = 'https://placehold.co/400x200';
  return (

    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
      
    </>
  );
};

export default Home;
