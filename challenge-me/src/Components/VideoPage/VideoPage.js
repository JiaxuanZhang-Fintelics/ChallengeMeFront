import "./VideoPage.css"
const VideoPage=()=>{
    // dummy data
    const video="https://www.youtube.com/embed/dQw4w9WgXcQ";
    const collection="Diet";
    const author={name:"Raven",avatar:"https://roilenergy.com/img/icons/avatar.jpg"};
    const videoInfo={time:"2 months ago",title:"Best Full Body Workout to Lose Fat . 20 mins | 28 Day Challenge",description:"6 episodes this month including a full body workout, a morning hiit cardio, abs workout, lower abs workout, and arms and back workout and a cooldown and stretch routine. "};
    const approved=true;
    const comments=[{name:"Claire Edwards",avatar:"https://roilenergy.com/img/icons/avatar.jpg",time:"1 hour ago",comment:"This is amazing"},
    {name:"Tony Barron", time:"2 hours ago",avatar:"https://roilenergy.com/img/icons/avatar.jpg", comment:"Thank you so much for sharing this wonderful diet plan, you are awesome.. keep going"}]
    const avatar="https://roilenergy.com/img/icons/avatar.jpg";
    const commentCards=comments.map((cmt)=>{
        return(
            <li className="commentCards">
                <img className="commentAvatar" src={cmt.avatar}></img>
                <div className="commentNameAndTime">
                        <div className="commentName">{cmt.name}</div>
                        <div className="commentTime">{cmt.time}</div>
                </div>
                <div className="comment">{cmt.comment}</div>
            </li>
        )
    })
    let  approvedLabel=<div></div>
    if(approved){
        approvedLabel=
        <div>
            <div className="approvedLabel"></div>
            <div className="approvedWord">Approved</div>
        </div>
    }
    return(
        <div>
            <iframe width="420" height="315" className="video" src={video}></iframe>
            <div className="collectionHeader">Collection:</div> 
            <div className="videoCollection">{collection}</div>
            <img className="videoAuthorAvatar" src={author.avatar} ></img>
            <div className="videoAuthorName">{author.name}</div> 
            <div className="videoInfoTime">{videoInfo.time}</div>
            <div className="videoInfoTitle">{videoInfo.title}</div>
            <div className="videoInfoDescription">{videoInfo.description}</div>
            <button className="likeButton"></button>
            <div className="likeWord">Like</div>
            {approvedLabel}
            <img className="addCommentAvatar" src={avatar}></img>
            <input className="addCommentInput" type="text" placeholder="Add a comment.." ></input>
            <ul className="CommentGrids">{commentCards}</ul>
        </div>
    )
}
export default VideoPage