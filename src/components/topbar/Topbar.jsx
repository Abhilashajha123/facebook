import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import image1 from '../../assets/images/image1.png'
import './topbar.css'
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
           <Link to="/" className="logo"> AbhilashaSocial</Link>  
        </div>
        <div className="topbarCentre">
                <div className="searchbar">
                    <SearchIcon className='searchIcon'/>
                    <input placeholder='Search for friend,post and video' className='searchInput'/>
                </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>HomePage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconsItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconsItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconsItem">
                    <NotificationsNoneIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <Link to="/profile">
                <img src={image1}className='topbarImg'/>
            </Link>
           
        </div>
    </div>
  )
}

export default Topbar
