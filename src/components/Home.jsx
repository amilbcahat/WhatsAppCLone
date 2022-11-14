import React from "react";
import RightofMainPage from "./RightofMainPage";
import MainFeed from "./MainFeed";
import LeftofMainPage from "./LeftofMainPage";
import { useEffect } from "react";
import "./home.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  //Gets User from Redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    validateUserFE();
  }, []);

  const validateUserFE = async () => {
    //If there is no user then it retrieves and sets user state of redux from the cookie acduser
    if (!user) {
      const userInfo = JSON.parse(Cookies.get("acduser"));
      dispatch({ type: "LOGIN", payload: userInfo });
    }
  };

  return (
    <>
      <div className="feed pt-2">
        {/* <LeftofMainPage /> */}
        <MainFeed />
        {/* <RightofMainPage /> */}
      </div>
    </>
  );
}

export default Home;
