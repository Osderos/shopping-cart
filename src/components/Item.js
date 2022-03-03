import React from "react";
import { Link } from "react-router-dom";
import "../styles/item.css";

function Item(props) {
  return (
    <div className="item-container">
      <div className="topImage">
        <img className="displayedImg" src={props.imgLink} alt={props.title} />
      </div>
      <div className="bottomDetails">
        <h2 className="itemTitle">{props.title}</h2>
        <div className="itemPrice">Price : {props.price} $</div>
        <div className="itemInspect">
          <Link className="itemInspectText" to={`/shop/${props.uniqueID}`}>
            <i className="fa-solid fa-magnifying-glass"></i>Inspect
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
