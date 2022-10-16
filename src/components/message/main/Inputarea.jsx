import React from "react";
import "./index.js";
function Inputarea() {
  return (
    <>
      <div className="chat-wrapper">
        <div className="message-wrapper">
          <div className="message-text" id="#mydiv" contentEditable></div>
          <div className="emoji">a</div>
          <div className="media">a</div>
          <div className="send">a</div>
        </div>
      </div>
    </>
  );
}

export default Inputarea;
