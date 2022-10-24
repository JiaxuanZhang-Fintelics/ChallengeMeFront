
import './TopChallengers.css'

const TopChallengersBar=()=>{
    // dummy data
    const challengers=[{name:'Raven',avatar:'https://roilenergy.com/img/icons/avatar.jpg'},
    {name:'Tom',avatar:'https://roilenergy.com/img/icons/avatar.jpg'},
    {name:'Jack',avatar:'https://roilenergy.com/img/icons/avatar.jpg'},
    {name:'Jason',avatar:'https://roilenergy.com/img/icons/avatar.jpg'},
    {name:'Naomi',avatar:'https://roilenergy.com/img/icons/avatar.jpg'}];
    const challengersItems=challengers.map((challenger,index)=>
        <li className="challengers"> 
        <div className="challengerIndex">{index+1}
        </div> 
        <img className='challengerAvatar' src={challenger.avatar}/>

        <div className="challengerName">{challenger.name}
        </div>
        </li>
    )
    return(
        <div >
            <ul className='TopChallengers'> Top Challengers {challengersItems} View All</ul>
        
        </div>
    );
};
export default TopChallengersBar;