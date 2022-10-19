import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar/TopBar';
import Profile from './Components/Profile/profile';
import Home from './Components/Home/Home';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopBar/>
      <Routes>
          <Route path="/" element={<Navigate to="/home/" />} />
          <Route path="/home/" element={<Home/>} />
          <Route path="/profile/" element={<Profile/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
