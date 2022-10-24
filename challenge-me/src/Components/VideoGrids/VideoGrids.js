import './VideoGrids.css';
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom'
const VideoGrids=()=>{
    // dummy data
    const videos=[{title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2,id:"000"},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22,id:"111"},
    {title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2,id:"222"},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22,id:"333"},
    {title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2,id:"444"},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22,id:"555"},
    {title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2,id:"666"},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22,id:"777"},
    {title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2,id:"888"},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22,id:"999"},
    {title:'28-Day Intermittent Fasting Weight Loss Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Tom",time:"1 hour ago",view:2,id:"101010"},
    {title:'Try Not to Laugh Challenge',picture:'https://www.elastoproxy.com/wp-content/uploads/2012/11/Video-Production.jpg',avatar:'https://roilenergy.com/img/icons/avatar.jpg',author:"Raven",time:"2 weeks ago",view:22,id:"111111"}]


    let {page}=useParams();
	let navigate = useNavigate();
    const videoCards=videos.map((video)=>
        <li className="videoCard"> 
        <button className="playButton" onClick={() => {navigate("/video/"+video.id);}}></button>
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
            <ul className='VideoGrids'>  {videoCards} </ul>
            <div className='VideoIndexes'> 
                <button className='VideoPage' id='thisPage' >{page} </button>
                <button className='VideoPage' onClick={() => {navigate("/home/"+(parseInt(page)+1));}}>{parseInt(page)+1} </button>
                <button className='VideoPage' onClick={() => {navigate("/home/"+(parseInt(page)+2));}}>{parseInt(page)+2} </button>
                <button className='VideoPage' onClick={() => {navigate("/home/"+(parseInt(page)+1));}}> &gt; </button>
            </div>
        </div>
    );
};
export default VideoGrids;