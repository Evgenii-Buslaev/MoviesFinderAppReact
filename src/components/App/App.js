import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "../../css/page.css";
import "../../css/reset.css";

import Home from "../Home/Home";
import CategoryList from "../CategoryList/CategoryList";
import Profile from "../Profile/Profile";
import Collection from "../Collection/Collection";
import Search from "../Search/Search";

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
        <Route
          path="/profile"
          element={<Profile name="Евгений" width={width} />}
        />
        <Route
          path="/films"
          element={<CategoryList category="Фильмы" width={width} />}
        />
        <Route
          path="/series"
          element={<CategoryList category="Сериалы" width={width} />}
        />
        <Route
          path="/cartoons"
          element={<CategoryList category="Мультфильмы" width={width} />}
        />
        <Route path="/collection" element={<Collection />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
