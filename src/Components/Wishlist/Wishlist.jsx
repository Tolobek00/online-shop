import React from "react";

import { FaCartPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { removeItem } from "../../redux/Wishlist/wishlistSlice";
import { addCart } from "../../redux/Cart/CartSlice";

// import bag from "../../Assets/Images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";

import "./wishlist.scss";

function Wishlist() {
  const dispatch = useDispatch();

  function deleteWish(id) {
    dispatch(removeItem(id));
  }

  function addToCart(product) {
    dispatch(addCart(product));
  }
  const { items } = useSelector((state) => state.wishItem);

  console.log(items);
  return (
    <div className="wishlist container">
      <ToastContainer />

      <div className="title-container">
        <h1 className="title">Wishlist (4)</h1>
        <button className="move-btn">Move All To Bag</button>
      </div>
      <div className="products-item">
        {items.map((item) => (
          <div key={item.id}>
            <div className="product-container">
              <img className="bag" src={item.image} alt="" />
              <section className="discount-container">
                <div className="percentage">-35%</div>
                <div className="delete" onClick={() => deleteWish(item.id)}>
                  <RiDeleteBin6Line />
                </div>
              </section>
              <button className="cart-button" onClick={() => addToCart(item)}>
                <FaCartPlus className="cart" />
                Add To Cart
              </button>
            </div>
            <h1 className="gucci">{item.title}</h1>
            <div className="prices">
              <h1 className="discountPrice">${item.price}</h1>
              <h1 className="price">$1160</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
