import React, { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../Banner/Banner";
import Product from "../Product/Product";

import "./home.scss";
import Category from "../Categories/Category";

const API = "http://178.128.162.248:8070/api/v1/advertisement/ads/";

function Home() {
  const [data, setCategory] = useState([]);
  const [error, setError] = useState(null);

  async function getCategory() {
    try {
      const res = await axios.get(API, {
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // timeout: 5000
      });
      setCategory(res.data.results);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <Banner />
      <div className="Product-Container">
        {/* {error ? ( */}
          {/* <div className="error-message">Error: {error}</div> */}
        {/* ) : ( */}
          <Product data={data} />
        {/* )} */}
      </div>
      <Category />
    </div>
  );
}

export default Home;
