import { useState, useEffect } from "react";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import AppRouter from "../AppRouter/AppRouter";

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
      <AppRouter width={width} />
    </div>
  );
}

export default App;
