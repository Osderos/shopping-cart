import React, { useEffect } from "react";
import "../styles/home.css";

function Home() {

  useEffect(() => {
    console.log("Home component did mount");
  
    const intrv = setInterval(flashText, 1000);

    return () => {
      console.log('Home component did unmount')
      clearInterval(intrv);
    };
  },[]);

  
  const flashText = () => {
    const elem = document.querySelector("#flashWord");
    if (elem.className === "flashWhite") {
      elem.className = "flashGold";
    } else {
      elem.className = "flashWhite";
    }
  };


  return (
    <div className="home-container">
      <div className="welcome-container">
        <h3>MOCKUP ONLINE ART SELLING STORE </h3>
        <h1>
          This is a replica of a online selling site for the Odin Project
          curriculum
        </h1>
        <h1 className="flashWhite" id="flashWord">
          Visit our shop
        </h1>
      </div>
    </div>
  );
}

export default Home;
