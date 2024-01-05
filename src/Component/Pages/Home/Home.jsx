import useTitle from "../../../Hooks/useTitle";
import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import Container from "../../Shared/Container";
import Slider from "./Slider/Slider";
import Discount from "./Discount/Discount";
import Popular from "./Food/Popular";
import Recommended from "./Food/Recommended";
import Featured from "./Featured/Featured";
import AboutUs from "./AboutUs/AboutUs";
const Home = () => {
  useTitle("Home"),
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <Container>
        <Banner></Banner>
        <Discount></Discount>
        <Slider></Slider>
        <Popular></Popular>
        <Recommended></Recommended>
        <Featured></Featured>
        <AboutUs></AboutUs>
      </Container>
    </div>
  );
};

export default Home;
