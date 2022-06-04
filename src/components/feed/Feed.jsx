import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../dummyData'

const Feed = () => {
  return (
    <div className='feed'> 
         <div className="feedwrapper">
             <Share/>
             {
               Posts.map((item)=>(
                 <Post postdata={item} key={item.id}/>
               ))
             }
         </div>
    </div>
  )
}

export default Feed
