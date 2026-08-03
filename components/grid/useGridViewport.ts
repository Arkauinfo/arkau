"use client";

import { useEffect, useState } from "react";

export default function useGridViewport() {
  const [size, setSize] = useState({
    width: 1600,
    height: 1200,
  });

  useEffect(() => {
    function update() {
      setSize({
        width: window.innerWidth * 1.5,
        height: window.innerHeight * 1.5,
      });
    }

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}