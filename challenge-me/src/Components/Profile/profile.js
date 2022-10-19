import './profile.css'

const Profile=()=>{
    // dummy data
    const user="Raven";
    const avatar='https://roilenergy.com/img/icons/avatar.jpg';
    const videos=[{title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22},
    {title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22}]
    const videoCards=videos.map((video)=>
    <li className="videoCard"> 
    <div className="playButton"></div>
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
    return(
        <div >
            <div className="ProfileInfoAndEdit">
                <img className='profileAvatar' src={avatar} />
                <div className="profileUsername">{user}</div>
                <button className="editProfileButton"> Edit Profile</button>
            </div>
            <button className="challengesButton"> Challenges</button>
            <button className="collectionsButton"> Collections</button>
            <ul className='ChallengeGrids'>  {videoCards} </ul>
        </div>
    );
};
export default Profile;