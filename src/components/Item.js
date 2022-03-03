import React from "react";
import { Link } from "react-router-dom";
import "../styles/item.css";
import { priceGenerator } from "../utils/priceGenerator";

function Item(props) {
  return (
    <div className="item-container">
      <div className="topImage">
        <img className="displayedImg" src={props.imgLink} alt={props.title} />
      </div>
      <div className="bottomDetails">
        <h2 className="itemTitle">{props.title}</h2>
        <div className="itemPrice">Price : {priceGenerator()} $</div>
        <div className="itemInspect">
          <Link to={`/shop/${props.uniqueID}`}>
            <i className="fa-solid fa-magnifying-glass"></i>Inspect
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
