import React from "react";
import {Features, Footer, Serviceintro,Heroui } from "../components";
import { Image6 } from "../assets";
const p = "I can help you in these patricular areas.";
const title = "I help people to discover their true potential";
const text = "I help people to discover their true potential and live a fulfilling life...Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?"
const btntext = "Get your free guide now";

const Servicepage = () => {
   return <div>
      <Heroui paragraf={p} title={title} text={text} button={btntext} image={Image6} />
      <Serviceintro />
      <Features />
      <Footer/>
   </div>;
};

export default Servicepage;
