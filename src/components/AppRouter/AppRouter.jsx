import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import CategoryList from "../CategoryList/CategoryList";
import Profile from "../Profile/Profile";
import Collection from "../Collection/Collection";
import Search from "../Search/Search";
import Movie from "../Movie/Movie";

function AppRouter({ category, width, homeLoading, categoriesLoading }) {
  const [savedList, setSavedList] = useState([]);

  const AppRoutes = [
    { path: "/", element: <Home width={width} loading={homeLoading} /> },
    {
      path: "/categories",
      element: (
        <CategoryList
          category={category}
          width={width}
          loading={categoriesLoading}
          savedList={savedList}
          save={setSavedList}
        />
      ),
    },
    {
      path: "/search",
      element: <Search savedList={savedList} save={setSavedList} />,
    },
    {
      path: "/collection",
      element: <Collection list={savedList} setList={setSavedList} />,
    },
    { path: "/profile", element: <Profile name="Евгений" width={width} /> },
    { path: "/:id", element: <Movie width={width} /> },
  ];

  return (
    <Routes>
      {AppRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
}

export default AppRouter;
