import { useState, useRef } from "react";
import { useMemoData } from "../../hooks/useMemoData";
import { useScreenResize } from "../../hooks/useScreenResize";

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
  const [category, setCategory] = useState("films");

  const width = useScreenResize();
  const [homeData, homeLoading, categoriesData, categoriesLoading] =
    useMemoData([getHomeData, getCategoriesData]);

  const appRef = useRef(null);

  return (
    <AppContext.Provider
      value={{ appElem: appRef, homeData, categoriesData, setLoggedIn }}
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
        <Login login={() => setLoggedIn(true)} />
      )}
    </AppContext.Provider>
  );
}

export default App;
