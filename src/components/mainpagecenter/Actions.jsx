import React from "react";
import "./centercss/action.css";
function Actions() {
  return (
    <>
      <div className="actions">
        <div className="comments">
          <div className="commentarea">
            <input type="text" className="commentbox" placeholder="Comment" />
          </div>
          <div className="sendbutton">
            <i class="fa-solid fa-paper-plane"></i>
          </div>
        </div>
        <div className="like">
          <i class="fa-regular fa-heart"></i>
          <spam className="totallike">50</spam>
        </div>
        <div className="share">
          <i class="fa-sharp fa-solid fa-share-nodes"></i>
        </div>
      </div>
    </>
  );
}

export default Actions;
