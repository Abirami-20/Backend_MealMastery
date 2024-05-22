import React from "react";
import Header from "../components/Header";
import Recipe from "../components/Recipe";

const Home = () => {
  return (
    <main  id="home"className="w-full flex flex-col">
      <Header />
      <section className="md:max-w-[1440px] mx-auto px-4 md:px-20 w-full ">
        <Recipe/>
      </section>
    </main>
  );
};

export default Home;
