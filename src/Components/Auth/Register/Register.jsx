import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import banner from "../../../Assets/Images/login image.png";

import "./register.scss";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/users";

function Register() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    avatar: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post(API, user)
      toast.success("succesfily")


      console.log(res);
    }catch(error) {
      console.log(error);
      toast.error("error")
    }
  }

  const navigate = useNavigate();

  // const [active, setActive] = useState(false);

  function goToPages(Link) {
    navigate(Link);
  }
  return (
    <div className="register">
      <div>
        <img src={banner} alt="" />
      </div>
      <div className="auth">
        <h1 className="email-title">Create an account</h1>
        <p>Enter your details below</p>
        <input
          type="text"
          value={user.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          value={user.email}
          name="email"
          placeholder="Email or Phone Number"
          onChange={handleChange}
        />
        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="url"
          value={user.avatar}
          name="avatar"
          placeholder="URL"
        onChange={handleChange}

        />
        <button onClick={() => handleSubmit()}>Create Account</button>
        <div className="signUp-btn">
          <FcGoogle className="icon-google" /> <h1>Sign up with Google</h1>
        </div>
        <span className="span">
          <h2>Already have account?</h2>
          <h1 onClick={() => goToPages("/login")} className="goToLogin">
            Log in
          </h1>
        </span>
      </div>
    </div>
  );
}

export default Register;
