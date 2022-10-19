import React from "react";
import "./acadhutcss.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
function AcadhutNavbar() {
  const { user } = useSelector((user) => ({ ...user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutSubmit = async () => {
    Cookies.set("acduser", "");
    Cookies.set("jwt", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="parent">
            <img src={require("./croplogo.png")} width="125px" alt="" />
            <div className="swiching">
              <NavLink to="/" className="mx-3 home">
                Home
              </NavLink>
              <NavLink to="/message" className=" mx-3 Messages">
                Message
              </NavLink>
              <NavLink to="/bookmark" className="mx-3 bookmark">
                Bookmark
              </NavLink>
            </div>
            <div>Search bar</div>
            {user && (
              <div>
                <div className="level">
                  Level <span>1</span> - <span>40%</span>
                </div>

                <input
                  className="range"
                  type="range"
                  defaultValue={40}
                  min={0}
                  max={100}
                />
              </div>
            )}
            <div>
              <div className="acc">
                <div className="acc1">
                  <img src="bell.png" alt="" />
                </div>
                <div className="acc2">
                  <img className="profile" src={user?.ProfilePic} alt="" />
                </div>
                <NavLink to="/profile" className="acc3">
                  <span>{user?.name}</span>
                </NavLink>
                {user && (
                  <div>
                    <button onClick={() => logoutSubmit()}>Logout</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcadhutNavbar;
