import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Context";
import styled from "styled-components";
import Card from "./Card";

const Button = styled.button`
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  background-color: ${(props) =>
    props.clicked ? "rgb(205,205,205)" : "rgb(239,239,239)"};
`;

const Cards = () => {
  const {
    cardList,
    categories1,
    categories,
    setSelected,
    selected,
    setCategories,
    toggle,
    setToggle,
    ToggleView,
  } = useContext(Context);
  const cardsArr = cardList.filter((el) => el.desc !== "");
  const [cardsArr1, setCardsArr1] = useState([]);
  const myFunc = (cat, id) => {
    setList(cat);
    handleClicked(id);
  };
  const handleClicked = (id) => {
    setCategories(
      categories1.map((el) =>
        el.id === id ? { ...el, clicked: !el.clicked } : el
      )
    );
  };
  const setList = (cat) => {
    let item = selected.findIndex((el) => el == cat);
    if (item > -1) {
      let arr = selected.slice();
      arr.splice(item, 1);
      setSelected(arr);
    } else {
      setSelected([...selected, cat]);
    }
  };
  const All = () => {
    setSelected([]);
    setCardsArr1(cardsArr);
    setCategories(
      categories1.map((el) => (el.clicked ? { ...el, clicked: false } : el))
    );
  };
  useEffect(() => {
    if (selected.length === 0) {
      setCardsArr1(cardsArr);
    } else {
      setCardsArr1(cardsArr.filter((el) => selected.includes(el.category)));
    }
  }, [selected]);
  useEffect(() => {
    setCardsArr1(cardList);
  }, []);

  return (
    <div className="cards-container">
      <h3>Филтрирај по категорија</h3>
      {toggle ? (
        <div onClick={ToggleView} className="toggleDiv">
          <div className="trueDiv"></div>
        </div>
      ) : (
        <div onClick={ToggleView} className="toggleDiv">
          <div className="falseDiv"></div>
        </div>
      )}
      <div>
        <button className="btn m-1" onClick={All}>
          Сите
        </button>
        {categories1.map((el, i) => {
          return el.clicked === false ? (
            // <button
            //   id={i}
            //   onClick={() => {
            //     myFunc(el.title, el.id);
            //   }}
            //   className="btn m-1"
            // >
            //   {el.title}
            // </button>
            <Button
              onClick={() => {
                myFunc(el.title, el.id);
              }}
            >
              {el.title}
            </Button>
          ) : (
            // <button
            //   id={i}
            //   onClick={() => {
            //     myFunc(el.title, el.id);
            //   }}
            //   className="btn btn-primary m-1"
            // >
            //   {el.title}
            // </button>
            <Button
              clicked
              onClick={() => {
                myFunc(el.title, el.id);
              }}
            >
              {el.title}
            </Button>
          );
          // <button id={i} onClick={() => setList(el.title)} className="btn m-1">
          //   {el.title}
          // </button>
        })}
      </div>
      {toggle ? (
        <div className="main">
          {cardsArr1.map((el) => {
            return (
              <Card
                title={el.title}
                key={el.id}
                desc={el.desc}
                cat={el.category}
                leng={el.lesson.length}
                image={el.image}
              />
            );
          })}
        </div>
      ) : (
        <div className="main1">
          {cardsArr1.map((el) => {
            return (
              // <div class="card">
              //   <div class="card-body">
              //     <h5 class="card-title">{el.title}</h5>
              //     <p class="card-text">{el.desc}</p>
              //     <p class="card-text text-center">6 лекции</p>
              //   </div>
              // </div>
              <Card
                title={el.title}
                key={el.id}
                id={el.id}
                desc={el.desc}
                leng={el.lesson.length}
                cat={el.category}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cards;
