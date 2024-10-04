import React from "react";
import mwallet from "/icon32.png";
import { Button } from "antd";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <img src={mwallet} className="frontPageLogo" alt="logo" />

        <div className="centerContent">
          <h2>hey there</h2>
          <Button
            onClick={() => navigate("/createaccount")}
            className="frontPageButton"
            type="primary"
          >
            Create a Wallet
          </Button>
          <Button
            onClick={() => navigate("/recoveraccount")}
            className="frontPageButton"
            type="default"
          >
            Sign In with Send Pharase
          </Button>
        </div>
        <p className="frontPageBottom">
          Find alt cion gems:{""}
          <a
            href="https://www.youtube.com/watch?v=dwtmz5PHWDg"
            target="_blank"
            rel="noreferrer"
          >
            www.youtube.com
          </a>
        </p>
      </div>
    </>
  );
}
export default Home;
