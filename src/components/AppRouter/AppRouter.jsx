import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import CategoryList from "../CategoryList/CategoryList";
import Profile from "../Profile/Profile";
import Collection from "../Collection/Collection";
import Search from "../Search/Search";
import Movie from "../Movie/Movie";
import DevNotification from "../DevNotification/DevNotification";
import { RouterContext } from "../../utils/context";

function AppRouter({ category, width, homeLoading, categoriesLoading }) {
  const [savedList, setSavedList] = useState([]);

  const AppRoutes = [
    {
      path: "MoviesFinderAppReact/",
      element: <Home width={width} loading={homeLoading} />,
    },
    {
      path: "MoviesFinderAppReact/categories",
      element: (
        <CategoryList
          category={category}
          width={width}
          loading={categoriesLoading}
        />
      ),
    },
    {
      path: "MoviesFinderAppReact/search",
      element: <Search />,
    },
    {
      path: "MoviesFinderAppReact/collection",
      element: <Collection list={savedList} setList={setSavedList} />,
    },
    {
      path: "MoviesFinderAppReact/profile",
      element: <Profile name="Евгений" />,
    },
    { path: "MoviesFinderAppReact/:id", element: <Movie width={width} /> },
    {
      path: "MoviesFinderAppReact/profile/person",
      element: <DevNotification />,
    },
    {
      path: "MoviesFinderAppReact/profile/subscriptions",
      element: <DevNotification />,
    },
    {
      path: "MoviesFinderAppReact/profile/views",
      element: <DevNotification />,
    },
  ];

  return (
    <RouterContext.Provider value={{ savedList, setList: setSavedList }}>
      <Routes>
        {AppRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </RouterContext.Provider>
  );
}

export default AppRouter;
