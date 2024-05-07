import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import History from "./Pages/History";
import {historyData} from "./Data/historyData";

function App() {
  return (
      <div className="App">
          <main>
              <Routes>
                  <Route path={"history"} element={
                      <History events={historyData[0]["data"]}/>
                  }/>
              </Routes>
              </main>
      </div>
);
}

export default App;
