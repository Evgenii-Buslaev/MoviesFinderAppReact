import { Routes, Route } from "react-router-dom";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import Home from "../Home/Home";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
