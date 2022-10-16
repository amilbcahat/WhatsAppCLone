import React from "react";
import Chatarea from "./message/main/Chatarea";
import "./message.css";
function Message() {
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
        <Chatarea />
      </div>
    </>
  );
}

export default Message;
