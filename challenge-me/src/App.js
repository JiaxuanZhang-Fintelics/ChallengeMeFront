import logo from './logo.svg';
import './App.css';
import TopChallengersBar from './Components/TopChallengers/TopChallengers';
import TopWitnessesBar from './Components/TopWitnesses/TopWitnesses';
function App() {
  return (
    <div className="App">

      <div><TopChallengersBar/></div>
      <div><TopWitnessesBar/></div>
    </div>
  );
}

export default App;
