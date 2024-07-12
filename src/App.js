import { Route, Routes } from "react-router-dom";

import AboutPage from "./Pages/AboutPage";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import WishlistPage from "./Pages/WishlistPage";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Profile from "./Components/Profile/Profile";


import "./App.css";
import Contact from "./Components/Contact/Contact";
import Navigation from "./Components/navigationv3/Navigation";

function App() {
  return (
    <div className="Wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="navigation" element={<Navigation/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
