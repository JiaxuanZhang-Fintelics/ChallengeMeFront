import TopChallengersBar from '../TopChallengers/TopChallengers';
import TopWitnessesBar from '../TopWitnesses/TopWitnesses';
import Profile from '../Profile/profile';
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom'
import VideoGrids from '../VideoGrids/VideoGrids'; 
const Home=()=>{
    return(
        <div className='Home'>
            <div><VideoGrids/></div>
            <div><TopChallengersBar/></div>
            <div><TopWitnessesBar/></div>
        </div>
    
    );
}
export default Home;