import React from "react";
import Chatarea from "./message/main/Chatarea";
import "./message.css";
import { useNavigate, useParams } from "react-router-dom";

function Message() {
  const { username } = useParams();
  return (
    <>
      <div
        style={{
          backgroundColor: "#D7D7D7",
          paddingTop: "20px",
          paddingBottom: "20px",
          height: "92vh",
        }}
        className="message"
      >
        <Chatarea username={username} />
      </div>
    </>
  );
}

export default Message;
