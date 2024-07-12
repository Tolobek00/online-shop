import React, { useState } from "react";
import "./notFound.scss"
import { Link, useNavigate } from "react-router-dom";


function NotFound() {

  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  function goToPages(Link) {
    navigate(Link);
  }

  // function openMenu() {
  //   setActive(!active);
  // }
  return (
    <div className='not-found'>
      <h1>Not Found 404</h1>
      <p>Your visited page not found. You may go home page.</p>
      <button onClick={() => goToPages("/")}>Back to home page</button>
    </div>
  )
}

export default NotFound
