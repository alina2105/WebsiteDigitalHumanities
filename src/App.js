import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Sidenav from './Components/Sidenav';
import History from "./Pages/History";
import HistoryLanding from "./Pages/HistoryLanding";
import Home from "./Pages/Home";
import Solutions from "./Pages/Solutions";
import Quiz from "./Pages/Quiz";
import {historyData} from "./Data/historyData";
import {solutionsData} from "./Data/solutionsData";
import {quizData} from "./Data/quizData";

function App() {
  return (
      <div className="App">
          <div><Sidenav/></div>
          <main className="main-content">
              <Routes>
                  {historyData.map(item => (
                      <Route path={item.link} element={
                          <History fullList={historyData} events={item.data}/>
                      }/>
                  ))}
                  <Route path={"history/"} element={<HistoryLanding fullList={historyData}/>}/>
                  <Route path={"home/"} element={<Home/>}/>
                  <Route path={"loesungsansaetze/"} element={<Solutions solutions={solutionsData}/>}/>
                  <Route path={"quiz/"} element={<Quiz quizData={quizData}/>}/>
              </Routes>
          </main>
      </div>
  );
}

export default App;
