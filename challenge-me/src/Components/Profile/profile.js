import './profile.css'
import { useState } from 'react'; 
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom'
const Profile=()=>{
    // dummy data
    const user="Raven";
    const avatar='https://roilenergy.com/img/icons/avatar.jpg';
    const videos=[{title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22},
    {title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22}]
   
    const collections=[{name:"Diet",picture:["https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg"]},
    {name:"Workout",picture:["https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg","https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg"]}]



let {mode,edit}=useParams();
let navigate=useNavigate();
let result=401;
let editWindow=<div></div>

if(mode=="Challenges"){
    const videoCards=videos.map((video)=>
    <li className="videoCard"> 
    <button className="playButton"></button>
    <img className='videoPicture' src={video.picture}/>
    <div className="videoInfo">
        {video.title}
        <div className='videoInfoWithoutTitle'>
            <img className='videoAvatar' src={video.avatar}/>
            <div className='videoAuthor'> {video.author}</div>
            <div className='videoTime'> {video.time}</div>
            <div className='videoView'> {video.view} Views</div>
        </div>
    </div>
    </li>
    )
     result=
    <div >
        <button className="challengesButton" id="selectedMode"> Challenges</button>
        <button className="collectionsButton" onClick={() => {navigate("/profile/Collections/view");}}> Collections</button>
        <ul className='ChallengeGrids'>  {videoCards} </ul>
    </div>
}
if(mode=="Collections"){
    const collectionCards=collections.map((collection)=>{
        const collectionPictures=collection.picture.map((pic)=>{
            return(<img className='collectionPicture' src={pic}></img>)
        })
        return(
            <li className="collectionCard"> 
            <div>
            {collectionPictures}
            </div>
            <div className="collectionInfo">
                {collection.name}
            </div>
            </li>
        )
    })
    result=
    <div >
        <button className="challengesButton" onClick={() => {navigate("/profile/Challenges/view");}}> Challenges</button>
        <button className="collectionsButton" id="selectedMode" > Collections</button>
        <ul className='CollectionGrids'>  
            <li className="collectionCard"> 
            <button className='newCollectionButton'>+ New Collection</button>
            </li>
        {collectionCards} 
        </ul>
    </div>
}
if(edit=="edit"){
    editWindow=
    <div className='editWindow'>
    <img className='editProfileAvatar' src={avatar}></img>
    <button className='changeProfilePhotoButton'> Change profile photo</button>
    <div className='editName'>Name</div>
    <input className="nameInputBox" type="text" placeholder={user} />
    <button className='updateButton'>Update</button>
    </div>

}
    return(
        <div>
            <div className="ProfileInfoAndEdit">
                <img className='profileAvatar' src={avatar} />
                <div className="profileUsername">{user}</div>
                <button className="editProfileButton" onClick={()=>{navigate("/profile/"+mode+"/edit")}}> Edit Profile</button>
            </div>
            {result}
            {editWindow}
        </div>
    );
};
export default Profile;