import React from 'react'
import './rightbar.css'
import gift from '../../assets/images/gift.png'
import group from '../../assets/images/group.jpg'
import image1 from '../../assets/images/image1.png'
import Online from '../online/Online'
import { Users } from '../../dummyData'
const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
                 <img src={gift} className="birthdayImg"/>
                 <span className='birthdayText'>
                     <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today
                 </span>
            </div>
            <img src={group} alt="" className='rightbrand'/>
            <h4 className='rightbarTitle'>Online Friends</h4>
           
            {
                Users.map((item)=>(
                    <Online online={item}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default Rightbar
