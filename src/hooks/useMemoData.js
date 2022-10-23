import { useState, useEffect } from "react";

export const useMemoData = (fetchFuncs) => {
  const [homeData, setHomeData] = useState([]);
  const [homeLoading, setHomeLoading] = useState(true);

  const [categoriesData, setCategoriesData] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchFuncs[0]();
        setHomeData({
          top: res[0],
          comedies: res[1],
          series: res[2],
          cartoons: res[3],
          detectives: res[4],
        });
      } catch (err) {
        console.log(err);
        setHomeData({
          top: [],
          comedies: [],
          series: [],
          cartoons: [],
          detectives: [],
        });
      } finally {
        setHomeLoading(false);
      }
    };
    load();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await fetchFuncs[1];
        setCategoriesData({
          films: res[0],
          series: res[1],
          shows: res[2],
        });
      } catch (err) {
        console.log(err);
        setCategoriesData({
          films: [],
          series: [],
          shows: [],
        });
      } finally {
        setCategoriesLoading(false);
      }
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return [homeData, homeLoading, categoriesData, categoriesLoading];
};
