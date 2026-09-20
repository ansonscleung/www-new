export const THEME_STORAGE_KEY = "anson-theme";

export const themePreferences = ["system", "light", "dark"] as const;

export type ThemePreference = (typeof themePreferences)[number];
export type ResolvedTheme = Exclude<ThemePreference, "system">;

export const isThemePreference = (value: string | null): value is ThemePreference =>
  themePreferences.includes(value as ThemePreference);

export const resolveTheme = (
  preference: ThemePreference,
  systemPrefersDark: boolean
): ResolvedTheme =>
  preference === "system" ? (systemPrefersDark ? "dark" : "light") : preference;

export const getSystemPrefersDark = () =>
  window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

export const readThemePreference = (): ThemePreference => {
  try {
    const storedPreference = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(storedPreference) ? storedPreference : "system";
  } catch {
    return "system";
  }
};

export const applyThemePreference = (preference: ThemePreference) => {
  const resolvedTheme = resolveTheme(preference, getSystemPrefersDark());
  const root = document.documentElement;

  root.dataset.themePreference = preference;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
};

export const saveThemePreference = (preference: ThemePreference) => {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // The selected theme still applies for this page when storage is unavailable.
  }
};

export const themeInitScript = `
(function () {
  var key = ${JSON.stringify(THEME_STORAGE_KEY)};
  var preference = "system";
  try {
    var stored = window.localStorage.getItem(key);
    if (stored === "light" || stored === "dark" || stored === "system") preference = stored;
  } catch (error) {}
  var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = preference === "system" ? (systemDark ? "dark" : "light") : preference;
  var root = document.documentElement;
  root.dataset.themePreference = preference;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();`;
