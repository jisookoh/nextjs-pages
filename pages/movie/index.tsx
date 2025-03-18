import React from "react";
import Loadable from "react-loadable";

export default function Movie() {
  const loader = () => <div>컨텐츠 로드 중.....</div>;
  const MovieParallaxComponent = Loadable({
    loader: () => import("components/movie/MovieParallaxComponent"),
    loading: loader,
  });

  return (
    <>
      <MovieParallaxComponent />
    </>
  );
}
