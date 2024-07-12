import React, { useState, useEffect, useTransition } from "react";
import axios from "axios";

import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

import banner from "../../Assets/Images/Frame 560.png";
import banner2 from "../../Assets/Images/giphy.gif"
import banner3 from "../../Assets/Images/Apple_iPhone-11-and-iPhone-11-Pro-reviews_091719_inline.gif.large.gif"


import "./banner.scss";

const API = "http://178.128.162.248:8070/api/v1/category/categories/";
function Banner() {


  const [category, setCategory] = useState([]);

  const { i18n } = useTranslation ();

  async function getProduct() {
    try {
      const res = await axios.get(API);
      setCategory(res.data);

      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);


  function change(data) {
    let title;
    switch (i18n.language) {
      case "en":
        title = data.title_uz;
        break;

      case "ky":
        title = data.title_kg;
        break;
      case "ru":
        title = data.title_ru;
        break;
    }
    return title;
  }

  return (
    <div className="banner container">
      <div className="category">
        <ul>
          {category.map((item) => (
            <li key={item.id}>{change(item)}</li>
          ))}
          {/* <li>Men’s Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li> */}
        </ul>
      </div>
      <div className="banner-carousel">
        <Carousel>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={banner} alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img src={banner2} alt="" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src={banner3} alt="" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
