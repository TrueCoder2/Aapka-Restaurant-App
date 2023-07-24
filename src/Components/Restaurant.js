import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuData.js";
import Header from "./Header";
import Navbar from "./Navbar";

const uniqueList = ["All",
  ...new Set(Menu.map((curElem) => {
  return curElem.category;
})
),
]

const Restaurant = () => {
  const [List, setList ] = useState(Menu);
  const [MenuList , setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

     if(category==="All"){
      setList(Menu);
    return;
    }

      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });

      setList(updatedList);
  }

  return (
    <>
      <Header />
     <Navbar filterItem={filterItem} MenuList={MenuList} />
      <MenuCard List={List} />
    </>
  );
};

export default Restaurant;
