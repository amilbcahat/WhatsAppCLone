import React from 'react'
import './acadhutcss.css'
import {NavLink} from 'react-router-dom'

function AcadhutNavbar() {
  return (
    <>
      <div className="header"> 
        <div className="container">
          <div className="parent">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png" width="125px" alt=""/>
            <div className="swiching">
                <NavLink to="/" className="mx-3 home">Home</NavLink>
                <NavLink to="/message" className=" mx-3 Messages">message</NavLink>
                <NavLink to="/bookmark" className="mx-3 bookmark">bookmark</NavLink>
            </div>
            <div>Search bar</div>
            <div>
              <div className="level">Level 1 - 40%</div>
              <input className="range" type="range" defaultValue={0} min={0} max={1000} />
            </div>
            <div>
              <div className="acc">
                <div className="acc1">
                  <img src="bell.png" alt=""/>
                </div>
                <div className="acc2">
                  <img className="profile" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </div>
                  <NavLink to="/profile" className="acc3">Zero 13</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AcadhutNavbar