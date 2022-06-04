import React from 'react'
import image1 from '../../assets/images/image1.png'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MoodIcon from '@mui/icons-material/Mood';
import './share.css'
const Share = () => {
  return (
    <div className='share'>
        <div className="sharewrapper">
        <div className="shareTop">
            <img src={image1} className="shareProfileImg" alt=""/>
            <input placeholder="whats in your mind Abhilasha" className='shareInput'/>
        </div>
        <hr className='sharehr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                        <AddToPhotosIcon htmlColor ="tomato" className='shareIcon'/>
                    <span className='shareOptionText'>Photos and video</span>
                </div>
               
            </div>

            <div className="shareOptions">
                <div className="shareOption">
                        <LocalOfferIcon htmlColor ="blue" className='shareIcon'/>
                    <span className='shareOptionText'>Tags</span>
                </div>
               
            </div>
            <div className="shareOptions">
                <div className="shareOption">
                        <FmdGoodIcon  htmlColor ="green" className='shareIcon'/>
                    <span className='shareOptionText'>Locations</span>
                </div>
               
            </div>
            <div className="shareOptions">
                <div className="shareOption">
                        <MoodIcon htmlColor ="yellow" className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
               
            </div>
            <button className='sharebutton'>share</button>
        </div>
        </div>
       
    </div>
  )
}

export default Share
