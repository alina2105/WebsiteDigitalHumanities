import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Sidenav from './Components/Sidenav';
import History from "./Pages/History";
import {historyData} from "./Data/historyData";
import HistoryLanding from "./Pages/HistoryLanding";

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
                  {/*<Route path={"history/alija"} element={*/}
                  {/*    <History fullList={historyData} events={historyData[0]["data"]}/>*/}
                  {/*}/>*/}
              </Routes>
          </main>
      </div>
  );
}

export default App;
