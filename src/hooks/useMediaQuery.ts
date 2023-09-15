import { useEffect, useState } from "react";

import defaultTheme from "tailwindcss/defaultTheme";

const screens = { xs: "500px", ...defaultTheme.screens };
type validScreenSize = keyof typeof screens;

export default function useMediaQuery(query: validScreenSize) {
  const getMatches = (query: validScreenSize): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(`(min-width: ${screens[query]})`).matches;
    }

    return false;
  };
  const [matches, setMatches] = useState<boolean>(true);
  useEffect(() => {
    setMatches(getMatches(query));
  }, [query]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(() => {
    handleChange();
    window.addEventListener("resize", handleChange);
    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, [handleChange, query]);
  return matches;
}
