import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import CategoryList from "../CategoryList/CategoryList";
import Profile from "../Profile/Profile";
import Collection from "../Collection/Collection";
import Search from "../Search/Search";
import Movie from "../Movie/Movie";

function AppRouter({ width }) {
  const AppRoutes = [
    { path: "/", element: <Home width={width} /> },
    {
      path: "/films",
      element: <CategoryList category="Фильмы" filter="films" width={width} />,
    },
    {
      path: "/series",
      element: (
        <CategoryList category="Сериалы" filter="series" width={width} />
      ),
    },
    {
      path: "/tv-shows",
      element: (
        <CategoryList category="ТВ-шоу" filter="tv-shows" width={width} />
      ),
    },
    { path: "/search", element: <Search /> },
    { path: "/collection", element: <Collection /> },
    { path: "/profile", element: <Profile name="Евгений" width={width} /> },
    { path: "/id", element: <Movie /> },
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
