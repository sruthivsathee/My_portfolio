import React from "react";
import "./../../styles/home.css";
import profilePic from "../../assets/img1.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Bubbles */}
      <ul className="bubbles">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>

      <div className="left-side">
        <img className="pro-pic" src={profilePic} alt="Profile" />
        <h1 className="typing-text">Welcome!</h1>
      </div>
      <div className="right-side">
        <p className="p-home">Front-End Developer | React.js Enthusiast</p>
      </div>
    </div>
  );
};

export default Home;
