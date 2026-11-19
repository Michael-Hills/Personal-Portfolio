import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './useTheme';

const STORAGE_KEY = 'theme';

// index.html sets data-theme from storage before first paint; start from whatever it chose.
const getInitialDarkMode = () => document.documentElement.dataset.theme !== 'light';

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); persistence is optional.
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
