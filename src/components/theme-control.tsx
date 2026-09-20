import React, { useEffect, useRef, useState } from "react";
import {
  applyThemePreference,
  readThemePreference,
  saveThemePreference,
  type ThemePreference,
  themePreferences,
} from "../utils/theme";

const labels: Record<ThemePreference, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

const ThemeControl: React.FC = () => {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const currentPreference = useRef<ThemePreference>("system");

  useEffect(() => {
    const initialPreference = readThemePreference();
    const systemPreference = window.matchMedia?.("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (currentPreference.current === "system") applyThemePreference("system");
    };

    currentPreference.current = initialPreference;
    setPreference(initialPreference);
    applyThemePreference(initialPreference);
    systemPreference?.addEventListener?.("change", handleSystemChange);

    return () => systemPreference?.removeEventListener?.("change", handleSystemChange);
  }, []);

  const chooseTheme = (nextPreference: ThemePreference) => {
    currentPreference.current = nextPreference;
    setPreference(nextPreference);
    saveThemePreference(nextPreference);
    applyThemePreference(nextPreference);
  };

  return (
    <div className="buttons theme-control" role="group" aria-label="Colour theme">
      {themePreferences.map((option) => (
        <button
          key={option}
          type="button"
          className={`button is-small${preference === option ? " is-primary" : ""}`}
          aria-pressed={preference === option}
          onClick={() => chooseTheme(option)}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
};

export default ThemeControl;
