import { useState, useEffect, useRef } from "react";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import Navigation from "../Navigation/Navigation";
import AppRouter from "../AppRouter/AppRouter";
import Login from "../Login/Login";
import { AppContext } from "../../utils/context";
import { getHomeData, getCategoriesData } from "../../API/memo_data";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [category, setCategory] = useState("films");

  const [homeData, setHomeData] = useState([]);
  const [homeLoading, setHomeLoading] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const appRef = useRef(null);

  useEffect(() => {
    const loadHome = async () => {
      const res = await getHomeData();
      setHomeData({
        top: res[0],
        comedies: res[1],
        series: res[2],
        cartoons: res[3],
        detectives: res[4],
      });
      setHomeLoading(false);
    };
    loadHome();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      const res = await getCategoriesData();
      setCategoriesData({
        films: res[0],
        series: res[1],
        shows: res[2],
      });
      setCategoriesLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Login />;

  {
    /* <AppContext.Provider value={{ appElem: appRef, homeData, categoriesData }}>
      <div className="App" ref={appRef}>
        <Navigation screen={width} changeCategory={setCategory} />
        <AppRouter
          width={width}
          category={category}
          homeLoading={homeLoading}
          categoriesLoading={categoriesLoading}
        />
      </div>
    </AppContext.Provider> */
  }
}

export default App;
