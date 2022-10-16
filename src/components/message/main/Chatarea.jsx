import React from "react";
import Inputarea from "./Inputarea";
import SendMsg from "./SendMsg";
import RecieveMsg from "./RecieveMsg";

function Chatarea() {
  return (
    <div className="col-md-6 chatarea">
      <div className="userDetail">
        <div className="username">
          <div className="useractualname">Ankit Anand</div>
          <div className="userid">@ankitanand13</div>
        </div>
        <div>asfdaljkn</div>
      </div>
      <div className="message">
        <div className="outgoing">
          <SendMsg />
        </div>
        <div className="incoming">
          <RecieveMsg />
        </div>
      </div>
      <div className="inputarea">
        <div style={{ width: "100%" }}>
          <Inputarea />
        </div>
      </div>
    </div>
  );
}

export default Chatarea;
