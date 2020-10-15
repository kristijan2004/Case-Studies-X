import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Cards from "./Cards";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner title={"дигитални вештини"} />
      <Cards />
    </div>
  );
};

export default HomePage;
