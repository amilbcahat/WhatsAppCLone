import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
export default function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSubmit = async () => {
    try {
      window.setTimeout(() => {
        window.location.assign("http://localhost:3100/api/v1/auth/google");
      }, 1000);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div>
      <button className="GloginBtn" onClick={() => loginSubmit()}>
        Sign in with Google
      </button>
      {/* <script src="/js/bundle.js"></script> */}
    </div>
  );
}
