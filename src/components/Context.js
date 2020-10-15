import React, { createContext, useState, useEffect } from "react";
import list from "./list";

export const Context = createContext({});

export const Provider = (props) => {
  const [cardList, setCardList] = useState(list);
  const [categories1, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [TrueFalse, setTrueFalse] = useState(false);
  const [TrueFalse1, setTrueFalse1] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const categories = [
    { title: "Marketing", clicked: false, id: 0 },
    { title: "UX", clicked: false, id: 1 },
    { title: "Business", clicked: false, id: 2 },
    { title: "Design", clicked: false, id: 3 },
    { title: "Programming", clicked: false, id: 4 },
    { title: "Data-Science", clicked: false, id: 5 },
  ];
  useEffect(() => {
    setCategories(categories);
  }, []);
  useEffect(() => {
    setSelected([]);
  }, []);

  const ValidateEmail = (e, mail) => {
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setTrueFalse(true);
      setTrueFalse1(false);
      setEmailVal("");
    } else {
      setTrueFalse1(true);
      setTrueFalse(false);
      setEmailVal("");
    }
  };
  const TargetVal = (e) => {
    let target = e.target.value;
    setEmailVal(target);
  };

  const ToggleView = () => {
    setToggle(!toggle);
  };
  return (
    <Context.Provider
      value={{
        cardList,
        categories1,
        selected,
        setSelected,
        setCategories,
        categories,
        ToggleView,
        toggle,
        setToggle,
        ValidateEmail,
        TrueFalse,
        setTrueFalse,
        setTrueFalse1,
        TrueFalse1,
        emailVal,
        setEmailVal,
        TargetVal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
