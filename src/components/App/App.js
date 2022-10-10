import { useState, useEffect, useRef } from "react";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import Navigation from "../Navigation/Navigation";
import AppRouter from "../AppRouter/AppRouter";
import { AppContext } from "../../utils/context";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [category, setCategory] = useState("films");

  const appRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ appElem: appRef }}>
      <div className="App" ref={appRef}>
        <Navigation screen={width} changeCategory={setCategory} />
        <AppRouter width={width} category={category} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
