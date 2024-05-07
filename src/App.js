import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Sidenav from './Components/Sidenav';
import History from "./Pages/History";
import {historyData} from "./Data/historyData";

function App() {
  return (
      <div className="App">
          <div><Sidenav/></div>
          <main className="main-content">
              <Routes>
                  <Route path={"history/alija"} element={
                      <History fullList={historyData} events={historyData[0]["data"]}/>
                  }/>
              </Routes>
          </main>
      </div>
  );
}

export default App;
