import React from "react";

import banner_about from "../../Assets/Images/img for about.png"

import "./story.scss";

function Story() {
  return (
    <div className="story ">
      <div className="title">
        <section>Home /</section>
        <section>About</section>
      </div>
      <div className="text-banner">
        <div className="text">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <br />
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="banner">
          <img src={banner_about} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Story;
