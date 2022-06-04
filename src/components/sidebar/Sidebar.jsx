import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import image1 from '../../assets/images/image1.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <ul className="sideebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <SlowMotionVideoIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Video</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarksIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutlineIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
                
            </ul>
            <button className='sidebarButton'>Show More</button>
            <hr className='sidebarhr'/>
            <ul className='sidebarFrientList'>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={image1} alt=''/>
                    <span className='sidebarFriendName'>John Doe</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={image1} alt=''/>
                    <span className='sidebarFriendName'>John Doe</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={image1} alt=''/>
                    <span className='sidebarFriendName'>John Doe</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={image1} alt=''/>
                    <span className='sidebarFriendName'>John Doe</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={image1} alt=''/>
                    <span className='sidebarFriendName'>John Doe</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={image1} alt=''/>
                    <span className='sidebarFriendName'>John Doe</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={image1} alt=''/>
                    <span className='sidebarFriendName'>John Doe</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={image1} alt=''/>
                    <span className='sidebarFriendName'>John Doe</span>
                </li>
               
                
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
