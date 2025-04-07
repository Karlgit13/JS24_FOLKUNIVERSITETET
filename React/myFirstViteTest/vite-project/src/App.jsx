import { Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./assets/pages/Home";

function App() {
  return (
    <>
      <div className="mainApp">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
