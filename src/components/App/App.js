import { useState, useEffect, useRef } from "react";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import Navigation from "../Navigation/Navigation";
import AppRouter from "../AppRouter/AppRouter";
import { AppContext } from "../../utils/context";
import { getAllData } from "../../API/memo_data";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [category, setCategory] = useState("films");

  const [APIdata, setAPIdata] = useState(null);

  const appRef = useRef(null);

  useEffect(() => {
    const get = async () => {
      const res = await getAllData();
    };
    get();
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ appElem: appRef, APIdata }}>
      <div className="App" ref={appRef}>
        <Navigation screen={width} changeCategory={setCategory} />
        <AppRouter width={width} category={category} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
