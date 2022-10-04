import { useState, useEffect } from "react";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import Navigation from "../Navigation/Navigation";
import AppRouter from "../AppRouter/AppRouter";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Navigation screen={width} />
      <AppRouter width={width} />
    </div>
  );
}

export default App;
