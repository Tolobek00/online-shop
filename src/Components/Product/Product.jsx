import React from "react";
import { useDispatch } from "react-redux";
import { addWish } from "../../redux/Wishlist/wishlistSlice";
import { ToastContainer, toast } from "react-toastify";
// import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { addCount } from "../../redux/Counter/countWish";
import { addCart } from "../../redux/Cart/CartSlice";

import "react-toastify/dist/ReactToastify.css";

import eye from "../../Assets/Svg/Fill Eye.svg";
import frame from "../../Assets/Images/Frame 611.png";
import heart from "../../Assets/Svg/heart small.svg";
import right from "../../Assets/Svg/icons arrow-right.svg";
import Star from "../../Assets/Svg/star";

import "./product.scss";

function Product({ data }) {
  const dispatch = useDispatch();

  function addLike(product) {
    dispatch(addWish(product));
  }
  function addToCart(product) {
    dispatch(addCart(product));
  }

  const { t } = useTranslation();

  return (
    <div className="product container">
      <ToastContainer />
      <div className="category-title">
        <div className="title-today">
          <div></div>
          <p className="title-product">Today's</p>
        </div>
      </div>
      <div className="browse">
        <section className="flash">
          <h1>Flash Sale</h1>
        </section>
        <div className="time-count">
          <section className="texts">
            <h2>Days</h2> <h2>Hours</h2> <h2> Minutes </h2>
            <h2>Seconds</h2>
          </section>
          <section className="numbers">
            <h1>03</h1>
            <b>:</b>
            <h1>23</h1>
            <b>:</b>
            <h1>19</h1>
            <b>:</b>
            <h1>56</h1>
          </section>
        </div>
        <section className="lines">
          <img className="left" src={right} alt="" />
          <img src={right} alt="" />
        </section>
      </div>

      <div className="createAPI">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <div className="product-image">
              <img
                className="main-image"
                src={item.image ? item.image : frame}
                alt=""
              />
              <div className="discount">-40%</div>
              <div className="icons">
                <div className="icon" onClick={() => addLike(item)}>
                  <img
                    className="heart"
                    src={heart}
                    alt=""
                    onClick={() => addCount(item.id)}
                  />
                </div>
                <div className="icon">
                  <img src={eye} alt="" />
                </div>
              </div>
              <button className="product-btn" onClick={() => addToCart(item)}>
                {t("button")}
              </button>
            </div>
            <div className="product-detail">
              <h3 className="title-product">{item.title}</h3>
              <div className="prices">
                <p className="discount-price">${item.price}</p>
                <p className="price">${item.price}</p>
              </div>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star key={index} fill={star <= 4 ? "#FFAD33" : "gray"} />
                ))}
                (88)
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-click">View All Products</button>
    </div>
  );
}

export default Product;
