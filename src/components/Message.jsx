import React from "react";
import Chatarea from "./message/main/Chatarea";
import "./message.css";
import { useNavigate, useParams } from "react-router-dom";
import User from "./message/Left/User";
import UserProfile from "./message/right/UserProfile";
function Message() {
  const { username } = useParams();
  return (
    <>
      <div className="message">
        <div>
          <User />
        </div>

        <div>
          <Chatarea username={username} />
        </div>
        <div>
          <UserProfile />
        </div>
      </div>
    </>
  );
}

export default Message;
