import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import CategoryList from "../CategoryList/CategoryList";
import Profile from "../Profile/Profile";
import Collection from "../Collection/Collection";
import Search from "../Search/Search";
import Movie from "../Movie/Movie";

import { DataContext } from "../../utils/context";

function AppRouter({ category, width, homeLoading, categoiesLoading }) {
  const AppRoutes = [
    { path: "/", element: <Home width={width} loading={homeLoading} /> },
    {
      path: "/categories",
      element: (
        <CategoryList
          category={category}
          width={width}
          loading={categoiesLoading}
        />
      ),
    },
    { path: "/search", element: <Search /> },
    { path: "/collection", element: <Collection /> },
    { path: "/profile", element: <Profile name="Евгений" width={width} /> },
    { path: "/id", element: <Movie /> },
  ];

  return (
    <DataContext.Provider value={{ lists: {} }}>
      <Routes>
        {AppRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </DataContext.Provider>
  );
}

export default AppRouter;
