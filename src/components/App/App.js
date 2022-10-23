import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMemoData } from "../../hooks/useMemoData";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import Navigation from "../Navigation/Navigation";
import AppRouter from "../AppRouter/AppRouter";
import Login from "../Login/Login";
import ModalWindow from "../ModalWindow/ModalWindow";
import { AppContext } from "../../utils/context";
import { getHomeData, getCategoriesData } from "../../API/memo_data";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const [category, setCategory] = useState("films");

  const [homeData, homeLoading, categoriesData, categoriesLoading] =
    useMemoData([getHomeData, getCategoriesData]);

  const navigator = useNavigate();

  const appRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    navigator("/");
  };

  return (
    <AppContext.Provider
      value={{ appElem: appRef, homeData, categoriesData, logout }}
    >
      {loggedIn ? (
        <div className="App" ref={appRef}>
          <ModalWindow />
          <Navigation screen={width} changeCategory={setCategory} />
          <AppRouter
            width={width}
            category={category}
            homeLoading={homeLoading}
            categoriesLoading={categoriesLoading}
          />
        </div>
      ) : (
        <Login login={login} />
      )}
    </AppContext.Provider>
  );
}

export default App;
