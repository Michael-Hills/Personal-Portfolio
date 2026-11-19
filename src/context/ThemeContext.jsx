import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './useTheme';

const STORAGE_KEY = 'theme';

function getInitialDarkMode() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return stored === 'dark';
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); fall back to the default.
  }
  return true;
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    } catch {
      // Ignore: persistence is a convenience only.
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
