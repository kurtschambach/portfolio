"use client";

import { useEffect } from "react";

const ToggleFavicon = () => {
  const handleFaviconBlur = () => {
    const link: HTMLAnchorElement | null =
      document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = "/favicon.png";
    }
  };

  const handleFaviconFocus = () => {
    const link: HTMLAnchorElement | null =
      document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = "/a3-active.png";
    }
  };

  useEffect(() => {
    window.addEventListener("blur", () => handleFaviconBlur());
    window.addEventListener("focus", () => handleFaviconFocus());

    return () => {
      window.removeEventListener("blur", () => handleFaviconBlur());
      window.removeEventListener("focus", () => handleFaviconFocus());
    };
  }, []);
  return null;
};

export default ToggleFavicon;
