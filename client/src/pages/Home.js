import React from "react";
import "../styles/Home.css";
import Sign from "../components/Home/Sign";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left-pane">
        <div className="home-page-logo">EVENTURA</div>
        <h1>Welcome !!</h1>
        <h1>Let us help you</h1>
        <h1>make your next event</h1>
        <h1>the best memory</h1>
        <h1>of your life.</h1>
      </div>
      <div className="home-right-pane">
        <Sign />
      </div>
    </div>
  );
}

export default Home;
