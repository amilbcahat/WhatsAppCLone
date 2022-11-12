import React from "react";
import "./centercss/postmodal.css";
function PostModal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content px-5">
          <button
            type="button"
            class="btn-close close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="header-title">Create Post</div>
          <hr></hr>
          {/* Body */}
          <div className="body">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <div className="userdetails">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                />
                <span>Ankit Anand</span>
              </div>
              <button className="post-button">Post</button>
            </div>
            <form>
              <textarea placeholder="Start writing..."></textarea>
            </form>
          </div>
          <form>
            <input
              type="file"
              accept="image/jpeg,application/pdf"
              className="postfile"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
