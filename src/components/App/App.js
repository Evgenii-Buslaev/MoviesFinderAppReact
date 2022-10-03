import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import Home from "../Home/Home";
import Profile from "../Profile/Profile";

import NavBar from "../NavBar/NavBar";
import NavBarMob from "../NavBarMob/NavBarMob";
import OptionsBar from "../OptionsBar/OptionsBar";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const navigation =
    width > 800 ? (
      <NavBar />
    ) : (
      <>
        <NavBarMob />
        <OptionsBar />
      </>
    );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App">
      {navigation}
      <Routes>
        <Route path="/" element={<Home width={width} />} />
        <Route path="/profile" element={<Profile name="Евгений" />} />
      </Routes>
    </div>
  );
}

export default App;
