import React from 'react'
import './online.css'
const Online = ({online}) => {
    console.log(online)
  return (
    <div>
       <ul className='rightbarfriendList'>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={online.profilePicture} className='rightbarProfileImg'/>
                        <span className='rightbarOnline'></span>
                    </div>
                    <span className='rightbarUsername'>{online.username}</span>
                </li>
            </ul>
    </div>
  )
}

export default Online
