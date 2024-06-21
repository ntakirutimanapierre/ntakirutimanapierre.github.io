import React from "react";
import profileImage from "../Images/profile.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>Pierre Ntakirutimana</h2>
        <p>Kigali, Rwanda</p>
        <a href="mailto:pntakiru@andrew.cmu.edu">
          <i className="fas fa-envelope"></i> Mail
        </a>
        <a href="https://twitter.com/NTAKIRU85371679">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="https://www.linkedin.com/in/pierre-ntakirutimana-b784ba186/">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/ntakirutimanapierre">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  );
};

export default Profile;
