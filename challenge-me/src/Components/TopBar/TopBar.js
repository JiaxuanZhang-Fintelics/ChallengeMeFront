import {BrowserRouter as Router, Link} from 'react-router-dom';
import './TopBar.css'
const TopBar=()=>{

    
    // dummy data
    const avatar='https://roilenergy.com/img/icons/avatar.jpg';
    return(
        <div className="TopBar">
            <Link to="/profile/Challenges/view">
            <img className='topAvatar' src={avatar} />
            </Link>
            <Link to="/upload">
            <button className="addVideoButton"></button>
            </Link>
        <form className="searchInputForm">
            <label>
                <input className="searchInputBox" type="text" placeholder="Seach challenge collection" />
            </label>
        </form>
        <button className="connectWalletButton">Connect Wallet</button>
        </div>
    );
};
export default TopBar;