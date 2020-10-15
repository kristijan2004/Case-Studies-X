import React, { useState } from "react";
import logo from "../logo.png";
import styled from "styled-components";
import { navigate } from "hookrouter";
const Header = () => {
  const Par = styled.p`
    color: ${(props) => (props.clicked ? "#F54D45" : "#4CA836")};
    background-color: transparent;
    border-radius: 4px;
    margin: 2px !important;
    padding: 5px 8px;
    text-align: center;
  `;

  const [ModalDiv, setModalDiv] = useState(false);
  const [ModalDiv1, setModalDiv1] = useState(false);
  const [ModalEmailVal, setModalEmailVal] = useState("");
  const ModalValidate = (e, mail) => {
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setModalDiv(true);
      setModalDiv1(false);
      setModalEmailVal("");
    } else {
      setModalDiv1(true);
      setModalDiv(false);
      setModalEmailVal("");
    }
  };
  const ModalTargetVal = (e) => {
    let target = e.target.value;
    setModalEmailVal(target);
  };
  const ModalIntervalFunc = () => {
    const DivInterval = setTimeout(() => {
      setModalDiv(false);
      setModalDiv1(false);
    }, 10000);
  };
  const LogoNavigateTo = () => {
    navigate(`/`);
  };
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} onClick={LogoNavigateTo}></img>
        </div>
        <div className="links">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle btn-sm"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Линкови
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Академии
              </a>
              <a class="dropdown-item" href="#">
                Вебинари
              </a>
              <a class="dropdown-item" href="#">
                Тест за Кариера
              </a>
              <a class="dropdown-item" href="#">
                Блог
              </a>
            </div>
          </div>
          <a href="/">Академии</a>
          <a href="/">Вебинари</a>
          <a href="/">Тест за Кариера</a>
          <a href="/">Блог</a>
          <button
            className="btn btn-sm"
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={ModalIntervalFunc}
          >
            Пријави се
          </button>
        </div>
      </div>
      {/* -----------------modal---------------- */}
      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body ">
              <h4>Приклучи се на 1350 ентузијасти и учи дигитални вештини.</h4>
              <form onSubmit={(e) => ModalValidate(e, ModalEmailVal)}>
                <input
                  className="form-control"
                  placeholder="Email Address"
                  value={ModalEmailVal}
                  onChange={(e) => ModalTargetVal(e)}
                />
                <input
                  className="form-control"
                  type="submit"
                  value="Пријави се"
                ></input>
              </form>
              {ModalDiv && <Par>Успешно се регистриравте!</Par>}
              {ModalDiv1 && (
                <Par clicked>Ве молиме внесете валидна емаил пошта.</Par>
              )}
              <p className="text-center text-white">
                Можеш да се исклучиш од листата на маилови во секое време!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
