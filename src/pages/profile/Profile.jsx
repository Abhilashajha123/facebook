import React from 'react'
import Feed from '../../components/feed/Feed'
import Post from '../../components/post/Post'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'
const Profile = () => {
  return (
    <>
      <Topbar/>
      <div className='profile'>
        <Sidebar/>
        <div className="profileRight">
          <div className='profileRightTop'>
            <div className="profileCover">
                <img src="assets/post/3.jpeg" className='profileCoverImg'/>
                  <img src="assets/person/10.jpeg" className='profileUserImg'/>
            </div>
              <div className="profileInfo">
                <h4 className="profileName">Abhilasha jha</h4>
                <span className="profileInfoDesc">Hello my friends</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
