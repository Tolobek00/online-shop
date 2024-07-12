import React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <div className="profile">
      <div className="title-account">
        <span>
          <h1 className="homePage">Home /</h1>
          <h2 className="myAccount">My Account</h2>
        </span>
        <span>
          <h1 className="text welcom">Welcome! </h1>
          <h2 className="text rimel" onClick={() => handleLogout()}>Logout</h2>
        </span>
      </div>
      <div className="container-account">
        <div className="manage">
          <h1>Manage My Account</h1>
          <section>
            <h3 className="active text">My Profile</h3>
            <h2>Address Book</h2>
            <h2>My Payment Options</h2>
          </section>
          <h1>My Orders</h1>
          <section>
            <h2>My Returns</h2>
            <h2>My Cancellations</h2>
          </section>
          <h1>My WishList</h1>
        </div>
        <div className="editProfile">
          <h1 className="edit-title">Edit Your Profile</h1>
          <div className="info-inputs">
            <div className="first-line">
              <div className="form-group">
                <h1>First Name</h1>
                <input type="text" placeholder="Md" />
              </div>
              <div className="form-group">
                <h1>Last Name</h1>
                <input type="text" placeholder="Rimel" />
              </div>
            </div>
            <div className="first-line">
              <div className="form-group">
                <h1>Email</h1>
                <input type="email" placeholder="rimel1111@gmail.com" />
              </div>
              <div className="form-group">
                <h1>Address</h1>
                <input type="text" placeholder="Kingston, 5236, United State" />
              </div>
            </div>
          </div>
          <div className="changePassword">
            <h1>Password Changes</h1>
            <input type="password" placeholder="Current Password" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirm New Password" />
          </div>
          <div className="bottom-buttons">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
