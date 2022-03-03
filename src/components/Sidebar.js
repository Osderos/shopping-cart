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

  const priceList = props.selectedItemsList.map((item) => item.price);

  const sum = priceList.reduce((psum, elem) => psum + elem, 0);

  const totalAmount = () => {
    if (sum === 0) {
      return <h2>Shopping cart is empty</h2>;
    }
    return (
      <div className="checkout">
        <h2>Total amount {sum} $</h2>
        <h3 className="checkoutBtn">To Payment</h3>
        <h3 className="clearBtn" onClick={props.clearAll}>Clear</h3>
      </div>
    );
  };

  return (
    <div id="mySidenav" className="sidenav">
      <div className="closebtn" onClick={props.closeNav}>
        &times;
      </div>
      <div className="sidebar-container">
        <h2>Checkout</h2>
        {sidebarItemsList}
        {totalAmount()}
      </div>
    </div>
  );
}

export default Sidebar;
