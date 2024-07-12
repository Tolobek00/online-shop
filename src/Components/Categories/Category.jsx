import React from "react";

import camera from "../../Assets/Svg/Category-Camera.svg";
import computers from "../../Assets/Svg/Category-Computer.svg";
import gaming from "../../Assets/Svg/Category-Gamepad.svg";
import headPhones from "../../Assets/Svg/Category-Headphone.svg";
import phones from "../../Assets/Svg/Category-CellPhone.svg";
import right from "../../Assets/Svg/icons arrow-right.svg";
import smartWatch from "../../Assets/Svg/Category-SmartWatch.svg";

import "./category.scss";

function Category() {
  return (
    <div className="category">
      <div className="category-title">
        <div></div>
        <p className="title-product">Categories</p>
      </div>
      <div className="browse">
        <section className="blog-category">
          <h1>Browse By Category</h1>
        </section>
        <section className="blog-category">
          <img className="left" src={right} alt="" />
          <img src={right} alt="" />
        </section>
      </div>
      <div className="categories-cont">
        <section className="blog-category">
          <img src={phones} alt="" />
          <h1>Phones</h1>
        </section>
        <section className="blog-category">
          <img src={computers} alt="" />
          <h1>Computers</h1>
        </section>
        <section className="blog-category">
          <img src={smartWatch} alt="" />
          <h1>SmartWatch</h1>
        </section>
        <section className="blog-category">
          <img src={camera} alt="" />
          <h1>Camera</h1>
        </section>
        <section className="blog-category">
          <img src={headPhones} alt="" />
          <h1>HeadPhones</h1>
        </section>
        <section className="blog-category">
          <img src={gaming} alt="" />
          <h1>Gaming</h1>
        </section>
      </div>
    </div>
  );
}

export default Category;
