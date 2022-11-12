import React from "react";
import NewPost from "./NewPost";
import Posts from "./Posts";

function Center() {
  return (
    <>
      <div
        className="center"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "650px",
        }}
      >
        <NewPost />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </>
  );
}

export default Center;
