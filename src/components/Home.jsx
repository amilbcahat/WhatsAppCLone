import React from 'react'
import RightofMainPage from './RightofMainPage'
import MainFeed from './MainFeed'
import LeftofMainPage from './LeftofMainPage'
import './home.css'
function Home() {
  return (
    <>
      <div className="feed pt-2">
          <LeftofMainPage/>
          <MainFeed/>
          <RightofMainPage/>
      </div>
    </>
  )
}

export default Home