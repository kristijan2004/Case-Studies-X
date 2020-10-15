import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";
const Par = styled.p`
  color: ${(props) => (props.clicked ? "#F54D45" : "#4CA836")};
  background-color: transparent;
  border-radius: 4px;
  margin: 2px !important;
  padding: 5px 8px;
`;

const Banner = (props) => {
  const {
    TrueFalse,
    TrueFalse1,
    emailVal,
    setEmailVal,
    ValidateEmail,
    TargetVal,
    setTrueFalse1,
    setTrueFalse,
  } = useContext(Context);
  const IntervalFunc = () => {
    const DivInterval = setTimeout(() => {
      setTrueFalse(false);
      setTrueFalse1(false);
    }, 10000);
  };
  return (
    <div className="banner">
      <h2>
        Приклучи се на 1350 ентузијасти и учи {props.title}
        <br></br>
      </h2>
      <h2>Бесплатно.</h2>
      <form
        className="form-inline"
        onSubmit={(e) => ValidateEmail(e, emailVal)}
      >
        <input
          value={emailVal}
          className="form-control"
          placeholder="Email Address"
          onChange={(e) => TargetVal(e)}
        />
        <input
          className="form-control"
          type="submit"
          value="Пријави се"
          onClick={IntervalFunc}
        ></input>
      </form>
      {TrueFalse && <Par>Успешно се регистриравте!</Par>}
      {TrueFalse1 && <Par clicked>Ве молиме внесете валидна емаил пошта.</Par>}
      <p>Можеш да се исклучиш од листата на маилови во секое време!</p>
    </div>
  );
};

export default Banner;
