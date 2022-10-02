import { useState, useEffect } from "react";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import NavBar from "../NavBar/NavBar";
import NavBarMob from "../NavBarMob/NavBarMob";
import OptionsBar from "../OptionsBar/OptionsBar";
import TopMovieCard from "../TopMovieCard/TopMovieCard";

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
      <TopMovieCard />
    </div>
  );
}

export default App;
