"use client";

import { Minimize, Maximize } from "lucide-react";
import { useEffect, useState } from "react";

const FullScreenSwitch = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (typeof document !== "undefined") {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        setIsFullScreen(true);
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  const handleFullScreenChange = () => {
    if (typeof document !== "undefined") {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      } else {
        setIsFullScreen(true);
      }
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("fullscreenchange", handleFullScreenChange);

      return () => {
        document.removeEventListener(
          "fullscreenchange",
          handleFullScreenChange,
        );
      };
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setIsFullScreen(!!document.fullscreenElement);
    }
  }, []);

  return (
    <button
      onClick={handleFullScreen}
      className="bg-transparent border-2 border-orange/60 hover:border-orange dark:border-text dark:hover:border-mantle text-orange/60 hover:text-orange dark:text-text dark:hover:text-mantle font-bold p-2 rounded-lg duration-500"
    >
      {isFullScreen ? <Minimize /> : <Maximize />}
    </button>
  );
};

export default FullScreenSwitch;
