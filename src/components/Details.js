import React, { useContext } from "react";
import Banner from "./Banner";
import Header from "./Header";
import { Context } from "./Context";
import styled from "styled-components";

const A = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const Details = (props) => {
  const { cardList } = useContext(Context);
  let card = cardList.find((el) => el.category === props.category);
  return (
    <div>
      <Header />
      <Banner title={props.category} />
      <div className="detailDiv">
        <div>
          {card.lesson &&
            card.lesson.map((el) => {
              return (
                <A href={el.link}>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        {el.title}
                        <span>{el.time}</span>
                      </h5>
                      <p class="card-text">{el.desc}</p>
                    </div>
                  </div>
                </A>
              );
            })}
        </div>
        <div className="bannerDiv">
          <h3>Банер Наслов</h3>
          <p>lorem ispun</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
