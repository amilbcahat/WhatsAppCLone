import React from 'react'
import './RightofMainpart.css'
function RightofMainPage() {
  return (
    <>
        <div className="right">
            <div className="trending">
                <p className="course-heading">Trending QNA's</p>
                <p className="rank">1. How to add components in React.js?</p>
                <p className="rank">2. How to add components in Angular?</p>
                <p className="rank">3. How to add components in React.js?</p>
                <p className="rank">4. How to add components in Angular?</p>
                <p className="rank">5. How to add components in React.js?</p>
                <p className="rank">6.  How to add components in Angular?</p>
                <button className="viewall"><a className="viewbtntext">view all</a></button>
            </div>
            <div className="course-recommended">
            <p className="course-heading">Courses Recommended</p>
            <div className="course-recomended-wrapper">
                <div className="image-course-list"><img src="https://miro.medium.com/max/1200/1*HuQyl7_WMMzOfs8RIlQ-XA.png" width="136px" height="72px" /></div>
                <div className="title-course-list">Advanced Java With Harry<br />
                <p className="mini-title">Source : Udemy</p>
                </div>
            </div>
            <div className="course-recomended-wrapper">
                <div className="image-course-list"><img src="https://miro.medium.com/max/1200/1*HuQyl7_WMMzOfs8RIlQ-XA.png" width="136px" height="72px" /></div>
                <div className="title-course-list">Advanced Java With Harry<br />
                <p className="mini-title">Source : Udemy</p>
                </div>
            </div>
            <div className="course-recomended-wrapper">
                <div className="image-course-list"><img src="https://miro.medium.com/max/1200/1*HuQyl7_WMMzOfs8RIlQ-XA.png" width="136px" height="72px" /></div>
                <div className="title-course-list">Advanced Java With Harry<br />
                <p className="mini-title">Source : Udemy</p>
                </div>
            </div>
            <div className="course-recomended-wrapper">
                <div className="image-course-list"><img src="https://miro.medium.com/max/1200/1*HuQyl7_WMMzOfs8RIlQ-XA.png" width="136px" height="72px" /></div>
                <div className="title-course-list">Advanced Java With Harry<br />
                <p className="mini-title">Source : Udemy</p>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default RightofMainPage