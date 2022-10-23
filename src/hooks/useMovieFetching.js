import { useState, useEffect } from "react";

import FilmsService from "../API/FilmsService";

export function useMovieFetching(params) {
  const [data, setData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  const [similars, setSimilars] = useState({ items: [] });
  const [similarsLoading, setSimilarsLoading] = useState(true);

  const [video, setVideo] = useState(null);
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    if (dataLoading) {
      FilmsService.getById(params.id).then((res) => {
        setData(res);
        setDataLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [dataLoading]);

  useEffect(() => {
    if (similarsLoading) {
      FilmsService.getSimilarById(params.id).then((res) => {
        setSimilars(res);
        setSimilarsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [similarsLoading]);

  useEffect(() => {
    if (videoLoading) {
      FilmsService.getVideoById(params.id).then((res) => {
        setVideo(res.items.filter((video) => video.site === "YOUTUBE")[0]);
        setVideoLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [videoLoading]);

  useEffect(() => {
    setDataLoading(true);
    setSimilarsLoading(true);
    setVideoLoading(true);
  }, [params.id]);

  return [data, dataLoading, similars, similarsLoading, video, videoLoading];
}
