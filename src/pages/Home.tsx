import React from "react";
import { Cocktails, ExperienceVibe, Intro } from "../components";

const Home: React.FC = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Intro />
      <Cocktails />
      <ExperienceVibe />
    </div>
  );
};

export default Home;
