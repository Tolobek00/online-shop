import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUser, setToken } from "../../../redux/user/userSlice";

import banner from "../../../Assets/Images/login image.png";

import "./login.scss";

const API = "https://api.escuelajs.co/api/v1/auth/login";
const PROFILE = "https://api.escuelajs.co/api/v1/auth/profile";

function Login() {
  const [user, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(API, user);

      if (res.status === 201) {
        const { access_token } = res.data;
        dispatch(setToken(access_token));

        const userInfo = await axios.get(PROFILE, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        dispatch(setUser(userInfo.data));

        navigate("/");
        toast.success("Успешный вход в систему");
      } else {
        toast.error("Ошибка входа");
      }
    } catch (error) {
      console.error(error);
      toast.error("Ошибка входа в систему");
    }
  };

  return (
    <div className="login">
      <div>
        <img src={banner} alt="Логин Баннер" />
      </div>
      <div className="auth">
        <h1 className="email-title">Вход в Exclusive</h1>
        <p>Введите ваши данные ниже</p>
        <input
          type="email"
          value={user.email}
          name="email"
          placeholder="Email или номер телефона"
          onChange={handleChange}
        />
        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
        />
        <div className="login-btn">
          <button onClick={handleSubmit}>Войти</button>
          <h1 className="forgot-click">Забыли пароль?</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
