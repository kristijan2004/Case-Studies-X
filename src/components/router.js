import React from "react";
import HomePage from "./HomePage";
import Details from "./Details";
import { setLinkProps } from "hookrouter";

const Routes = {
  "/": () => <HomePage />,
  "/Details/:category": ({ category }) => <Details category={category} />,
};
export default Routes;
