import React from "react";

function RecieveMsg({ content, i }) {
  return (
    <>
      <div className="msgrecieve">
        <span className="msgvalue">{content}</span>
      </div>
    </>
  );
}

export default RecieveMsg;
