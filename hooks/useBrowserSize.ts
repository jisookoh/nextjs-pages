import { useState, useEffect } from "react";

const useBrowserSize = () => {
  const [windowSize, setWindowSize] = useState<number[]>([]);
  const handleResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useBrowserSize;
