import React, { useState } from 'react'
import image1 from '../../assets/images/image1.png';
import group from '../../assets/images/group.jpg';
import post from '../../assets/images/post.jpg';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../dummyData';
import './post.css'

const Post = ({postdata}) => {

    const[like,Setlike]=useState(postdata.like)
    const[isliked,Setisliked]=useState(false)
    const handlelikedata=()=>{
        
        Setlike(isliked ? like-1:like+1)
        Setisliked(!isliked?true:false)
    }
  return (
    <div className='post'> 
        <div className="postWrapper">
            <div className="postTop">
                <div className="postLeft">
                    <img src={Users.filter((item)=>item.id===postdata.userId)[0].profilePicture} className="postLogo"/>
                    <span className='postname'>{Users.filter((item)=>item.id===postdata.userId)[0].username}</span>
                    <span className='posttime'>{postdata.date}</span>
                </div>
                <div className="postRight">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
            <div className="postCentre">
                <span className='postText'>{postdata.desc}</span>
                <img src={postdata.photo} className="postImage"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpAltIcon className='likebutton' onClick={handlelikedata}/>
                    <FavoriteIcon className='heartbutton' />
                    <span className='postbottomText'>{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className='postcounts'>{postdata.comment} comments</span>
                </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default Post
