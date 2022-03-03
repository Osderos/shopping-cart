import React, { useState, useEffect } from "react";

import Item from "../components/Item";

import "../styles/shop.css";

function Shop(props) {
  const postItems = props.itemsList.map((item) => (
    <Item
      title={item.title}
      key={item.idNumber}
      uniqueID={item.idNumber}
      imgLink={item.imgLink}
      price={item.price}
    />
  ));

  return <div className="items-container">{postItems}</div>;
}

export default Shop;
