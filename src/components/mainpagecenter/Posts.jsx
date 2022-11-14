import React from "react";
import Actions from "./Actions";
import "./centercss/posts.css";
function Posts() {
  return (
    <>
      <div className="post">
        <div className="userprofilepic">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="Profilepicture"
          />
        </div>
        <div className="postdetails">
          <div className="userdetails">
            <div className="username">Amol verma</div>
            <div className="tags">Achievement</div>
          </div>
          <div className="posttext">
            May each diya🪔 you light, brighten up your Life. Happy Diwali!!
            Just like the colors of rangoli, hope this Diwali bri
          </div>
          <div className="imageslider"></div>
          <div className="totalcomments">3 Comments</div>
          <div className="likeandcomments">
            <Actions />
          </div>
        </div>
        <div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </>
  );
}

export default Posts;
