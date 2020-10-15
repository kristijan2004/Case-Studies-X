import React, { useContext, useState, useEffect } from "react";
import { navigate } from "hookrouter";
import { Context } from "./Context";

const Card = (props) => {
  const { toggle } = useContext(Context);
  const navigateTo = () => {
    navigate(`/Details/${props.cat}`);
  };
  return (
    <div className="card" onClick={navigateTo}>
      {toggle && (
        <img
          className="card-img-top"
          src={props.image}
          alt="Card image cap"
        ></img>
      )}

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <p className="card-text text-center">{props.leng} предавања</p>
      </div>
    </div>
  );
};

export default Card;
