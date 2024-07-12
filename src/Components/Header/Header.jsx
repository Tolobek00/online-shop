import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

import user1 from "../../Assets/Svg/user (1).svg";
import mallbag from "../../Assets/Svg/icon-mallbag.svg";
import cancel from "../../Assets/Svg/icon-cancel.svg";
import reviews from "../../Assets/Svg/Icon-Reviews.svg";
import logout from "../../Assets/Svg/Icon-logout.svg";
import user from "../../Assets/Svg/user.svg";
import cart from "../../Assets/Svg/Cart=Off.svg";
import like from "../../Assets/Svg/Wishlist.svg";
import search from "../../Assets/Svg/Vector (1).svg";

import "./header.scss";
import axios from "axios";

const PROFILE = "https://api.escuelajs.co/api/v1/auth/profile";

function Header() {
  const { t, i18n } = useTranslation();
  const { items } = useSelector((state) => state.wishItem);
  const { cartCount } = useSelector((state) => state.CartItem);

  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.user);
  // const user = useSelector((state) => state.user);
  const outRef = useRef(null);
  const aRef = useRef(null);
  const [popup, setPopup] = useState();

  const handleChangeLanguage = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
    console.log(lng);
    // console.log(user);
  };

  async function getUser() {
    try {
      const res = await axios.get(PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(setUser(res.data));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token && !user) {
      getUser();
    }
  }, [token]);

  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  function goToPages(Link) {
    navigate(Link);
  }

  function openMenu() {
    setActive(!active);
  }

  useEffect(() => {
    function clickHandler(event) {
      if (
        (outRef.current && !outRef.current.contains(event.target)) ||
        (aRef.current && aRef.current.contains(event.target))
      ) {
        setPopup(false);
        console.log("ok");
      }
    }
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [outRef, aRef]);

  return (
    <>
      <div className="top-header">
        <div className="flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <strong>Shop Now</strong>
          </p>
          <select onChange={handleChangeLanguage} defaultValue={i18n.language}>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
            <option value="ky">KGZ</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="logo" onClick={() => goToPages("/")}>
          {t("logo")}
        </div>
        <div className="header-menu">
          <ul>
            <li onClick={() => goToPages("/")}>{t("home")}</li>
            <li onClick={() => goToPages("/contact")}>{t("contact")}</li>
            <li onClick={() => goToPages("/about")}>{t("about")}</li>
            <li onClick={() => goToPages("/register")}>{t("login")}</li>
          </ul>
        </div>
        <div className="header-auth">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <img src={search} alt="Search" />
          </div>
          <div className="icons">
            <img
              onClick={() => goToPages("/wishlist")}
              src={like}
              alt="Wishlist"
            />
            {items.length > 0 && <span className="count">{items.length}</span>}
            <img onClick={() => goToPages("/cart")} src={cart} alt="Cart" />
            {cartCount.length > 0 && (
              <span className="count2">{cartCount.length}</span>
            )}
          </div>
          {user && (
            <div className="user">
              <img
                src={user.avatar}
                alt="user"
                ref={aRef}
                onClick={() => setPopup(!popup)}
              />
            </div>
          )}
          <div>
            <h1 ref={aRef} onClick={() => setPopup(!popup)}>
              go!
            </h1>
          </div>
          {popup && (
            <div ref={outRef} className="contact-dropdown">
              <section>
                <img src={user1} alt="" />
                <h1 onClick={() => goToPages("/profile")}>Manage My Account</h1>
              </section>
              <section>
                <img src={mallbag} alt="" />
                <h1>My Order</h1>
              </section>
              <section>
                <img src={cancel} alt="" />
                <h1>My Cancellations</h1>
              </section>
              <section>
                <img src={reviews} alt="" />
                <h1>My Reviews</h1>
              </section>
              <section>
                <img src={logout} alt="" />
                <h1>Logout</h1>
              </section>
            </div>
          )}
        </div>
      </header>
      <hr />
    </>
  );
}

export default Header;
