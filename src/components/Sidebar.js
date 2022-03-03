import React from "react";
import "../styles/sidebar.css";
import ItemSidebar from "./ItemSidebar";

function Sidebar(props) {
  const sidebarItemsList = props.selectedItemsList.map((item) => (
    <ItemSidebar
      price={item.price}
      title={item.title}
      key={item.idNumber}
      keyTag={item.idNumber}
    />
  ));

  return (
    <div id="mySidenav" className="sidenav">
      <div className="closebtn" onClick={props.closeNav}>
        &times;
      </div>
      <div className="sidebar-container">
        <h2>Checkout</h2>
        {sidebarItemsList}

        <h2>Total Amount : 1232$</h2>
      </div>
    </div>
  );
}

export default Sidebar;
