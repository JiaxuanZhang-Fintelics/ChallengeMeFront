const TopWitnessesBar=()=>{
    // dummy data
    const witnesses=[{name:'Olivia',avatar:'https://roilenergy.com/img/icons/avatar.jpg'},
    {name:'Mia',avatar:'https://roilenergy.com/img/icons/avatar.jpg'},
    {name:'Sophia',avatar:'https://roilenergy.com/img/icons/avatar.jpg'},
    {name:'David',avatar:'https://roilenergy.com/img/icons/avatar.jpg'},
    {name:'Luca',avatar:'https://roilenergy.com/img/icons/avatar.jpg'}];
    const witnessesItems=witnesses.map((challenger,index)=>
        <li className="witnesses"> 
        <div className="witnessIndex">{index+1}
        </div> 
        <img className='witnessAvatar' src={challenger.avatar}/>

        <div className="witnessName">{challenger.name}
        </div>
        </li>
    )
    return(
        <div >
            <ul className='TopWitnesses'> Top Witnesses {witnessesItems} View All</ul>
        
        </div>
    );
};
export default TopWitnessesBar;