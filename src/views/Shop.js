import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import { getData } from "../utils/getData";
import "../styles/shop.css";

function Shop() {
  const NUMBER_OF_ITEMS = 5;
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    console.log("Shop component did mont");

    const loadItems = async () => {
      setItemsList(await getData(NUMBER_OF_ITEMS));
    };

    loadItems();
  }, []);

  const postItems = itemsList.map((item) => (
    <Item
      title={item.title}
      key={item.id}
      uniqueID={item.id}
      imgLink={item.imgLink}
    />
  ));

  return <div className="items-container">{postItems}</div>;
}

export default Shop;
