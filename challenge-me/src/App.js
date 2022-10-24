import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar/TopBar';
import Profile from './Components/Profile/profile';
import Home from './Components/Home/Home';
import VideoPage from './Components/VideoPage/VideoPage';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import Upload from './Components/Upload/Upload';
import Preview from './Components/Preview/Preview';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopBar/>
      <Routes>
          <Route path="/" element={<Navigate to="/home/1" />} />
          <Route path="/home/:page" element={<Home/>} />
          <Route path="/profile/:mode/:edit" element={<Profile/>} />
          <Route path="/video/:id" element={<VideoPage/>} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/preview" element={<Preview/>} />
          <Route path="/preview" element={<Preview/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
