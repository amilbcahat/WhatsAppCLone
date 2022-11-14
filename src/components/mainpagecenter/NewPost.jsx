import React from "react";
import "./centercss/newpost.css";
import PostModal from "./PostModal";
function NewPost() {
  return (
    <>
      <div
        className="newpost"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div>
          <img
            className="userprofileimage"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="userprofileimage"
          />
          <spam className="userinput">Write a post</spam>
        </div>
        <div>
          <button className="postbutton">Post</button>
        </div>
      </div>
      <PostModal />
    </>
  );
}

export default NewPost;
