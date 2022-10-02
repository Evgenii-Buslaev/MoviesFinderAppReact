import { useState, useEffect } from "react";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import NavBar from "../NavBar/NavBar";
import NavBarMob from "../NavBarMob/NavBarMob";
import OptionsBar from "../OptionsBar/OptionsBar";
import TopList from "../TopList/TopList";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {width > 800 ? (
        <NavBar />
      ) : (
        <>
          <NavBarMob />
          <OptionsBar />
        </>
      )}
      <TopList />
      <TopList />
      <TopList />
      <TopList />
      <TopList />
      <TopList />
    </div>
  );
}

export default App;
