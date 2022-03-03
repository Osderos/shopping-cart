import React from "react";
import "../styles/itemSidebar.css";

function ItemSidebar(props) {
  return (
    <div className="sidebarItem-container">
      <div className="sidebarItem-details">
        <div>Title:{props.title}</div>
        <div>Price:{props.price} $</div>
      </div>
      <div className="sidebarItem-remove" >
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}

export default ItemSidebar;
