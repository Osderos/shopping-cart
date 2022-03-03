import React,{useContext} from "react";
import "../styles/itemSidebar.css";
import {UserContext} from '../utils/UserContext'

function ItemSidebar(props) {
  const {decrementCartItems, selectedItemsList }= useContext(UserContext)

  return (
    <div className="sidebarItem-container">
      <div className="sidebarItem-details">
        <div>Title:{props.title}</div>
        <div>Price:{props.price} $</div>
      </div>
      <div className="sidebarItem-remove" onClick={() => decrementCartItems(props.keyTag)}>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}

export default ItemSidebar;
