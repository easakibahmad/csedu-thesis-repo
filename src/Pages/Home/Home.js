import React from "react";
import HomePageBanner from "../../Components/HomePageBanner";
import CollapseDiv from "../../Components/CollapseDiv";
import HomeMidSection from "../../Components/HomeMidSection";

const Home = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <CollapseDiv></CollapseDiv>
      <div style={{ backgroundColor: "#e2f1fb" }}>
        <HomeMidSection></HomeMidSection>
      </div>
    </div>
  );
};

export default Home;
