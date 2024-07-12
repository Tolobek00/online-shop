import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { add, dec } from "../../redux/Counter/counterSlice";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/Cart/CartSlice";
import { MdDeleteSweep } from "react-icons/md";

import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/Cart/CartSlice";
import "./cart.scss";

function Cart() {
  const navigate = useNavigate();

  // const { value } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const { cartCount } = useSelector((state) => state.CartItem);

  function increment(id) {
    dispatch(incrementQuantity(id));
  }
  function decrement(id) {
    dispatch(decrementQuantity(id));
  }

  function addCount() {
    dispatch(add());
  }
  function decCount() {
    dispatch(dec());
  }
  function goToPages(Link) {
    navigate(Link);
  }

  function openMenu() {
    setActive(!active);
  }
  function deleteWish(id) {
    dispatch(removeCart(id));
  }

  // const calculateTotal = () => {
  //   return cartCount.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  return (
    <div className="container cart">
      <div>
        <div className="back-home">
          <h1 onClick={() => goToPages("/")}>Home /</h1>
          <h1>Cart</h1>
        </div>
        <div className="cart-category">
          <ul>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
        </div>
        <div className="gamepad">
          {cartCount.map((item) => (
            <div className="gamepad-container">
              <section className="game-img">
                <button onClick={() => deleteWish(item.id)}>
                  <MdDeleteSweep />
                </button>
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
              </section>
              <section className="price">
                <h1>${item.price}</h1>
              </section>
              <section className="counter">
                <h1>{item.quantity}</h1>
                <div className="count-cart">
                  <RiArrowDropUpLine
                    className="lineDown"
                    onClick={() => increment(item.id)}
                  />
                  <RiArrowDropDownLine
                    className="lineDown"
                    onClick={() => decrement(item.id)}
                  />
                </div>
              </section>
              <section className="subtotal">
                <h1>${item.price * item.quantity}</h1>{" "}
              </section>
            </div>
          ))}
        </div>
        <div className="retUp-container">
          <button className="return-btn">Return To Shop</button>
          <button className="update-btn">Update Cart</button>
        </div>
        <div className="bottom-container">
          <div className="coupon-item">
            <input type="text" placeholder="Coupon-Code" />
            <button>Apply Coupon</button>
          </div>
          <div className="cart-total">
            <h1 className="totals">Cart Total</h1>
            <span>
              <h1>Subtotal:</h1> <h1>$1750</h1>
            </span>
            <hr />
            <span>
              <h1>Shipping:</h1> <h1>Free</h1>
            </span>
            <hr />
            <span>
              <h1>Total:</h1> <h1>$1750</h1>
            </span>
            <button>Procees to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
