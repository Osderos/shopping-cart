import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/itemDetail.css";

function ItemDetail(props) {
  const [isDisabled, setDisabled] = useState(null);
  const { id } = useParams();

  const item = props.itemsList.find(
    ({ idNumber }) => idNumber === parseInt(id)
  );
  

  const handleDisabled = () => {
    setDisabled(!isDisabled);
  };

  const undoButton = isDisabled ? (
    <button
    className="removeFromCart"
      onClick={() => {
        props.decrementCartItems(item.idNumber);
        handleDisabled();
      }}
    >
      Undo
    </button>
  ) : null;

  return (
    <div className="itemDetail-container">
      <div className="itemDetail-layout">
        <div className="leftSide-itemDetail">
          <div className="image-itemDetail">
            <img
              src={item.imgLink}
              alt={item.title}
              className="imageForItemDetail"
            />
          </div>
        </div>
        <div className="rightSide-itemDetail">
          <h1 className="title-itemDetail">{item.title}</h1>

          <h2 className="price-itemDetail">{item.price} $</h2>

          <p className="description-itemDetail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            dignissim justo ante, a vestibulum metus viverra a. Duis ut interdum
            purus. Donec ex ante, hendrerit ac laoreet et, semper non ante.
            Donec nec eros euismod, faucibus sapien a, Pellentesque faucibus
            pharetra elit, non vulputate ante consectetur sed. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.{" "}
          </p>

          <div className="addToCart-itemDetail">
            <button
              className="addItem"
              onClick={() => {
                props.incrementCartItems(item);
                handleDisabled();
              }}
              disabled={isDisabled}
            >
              Add to Cart
            </button>
            {undoButton}
          </div>
          <div className="backToShop-itemDetail">
            <Link to="/shop">
              <button className="backToShop">Back to Shop</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
