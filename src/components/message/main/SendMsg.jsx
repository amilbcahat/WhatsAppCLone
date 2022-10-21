import React from "react";
import "./style.css";
function SendMsg({ content, i }) {
  return (
    <>
      <div className="msgsend">
        <span className="msgvalue">{content}</span>
      </div>
    </>
  );
}

export default SendMsg;
