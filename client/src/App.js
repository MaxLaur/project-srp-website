import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import TopNav from "./components/TopNav";
import Homepage from "./components/Homepage";
import Downloads from './components/Downloads';
import ServersList from './components/allServersComponents/ServersList';
import Leaderboard from './components/LeaderBoard';
import ProjectInfo from './components/ProjectInfo';
import Cars from './components/Cars';
import BackgroundImages from "./components/BackgroundImages";

const App = () => {

  return (
    <BrowserRouter>
    <GlobalStyle />
      <TopNav />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/downloads' element={<BackgroundImages><Downloads /></BackgroundImages>} />
            <Route path='/serversList' element={<BackgroundImages><ServersList /></BackgroundImages>}/>
            <Route path='/:leaderboard' element={<BackgroundImages><Leaderboard  /></BackgroundImages>}/>
            <Route path='/projectInfo' element={<BackgroundImages><ProjectInfo /></BackgroundImages>}/>
            <Route path='/cars' element={<BackgroundImages><Cars /></BackgroundImages>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;