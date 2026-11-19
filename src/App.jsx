import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/useTheme';
import { darkTheme, lightTheme } from './styles/Themes';
import NavMenu from './components/NavMenu';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import ProjectDetailPage from './components/ProjectDetailPage';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import SmoothScrollbar from './components/SmoothScrollbar';
import ScrollToTop from './components/ScrollToTop';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Typography />
      {/* Keep the router basename in sync with `base` in vite.config.js */}
      <Router basename={import.meta.env.BASE_URL}>
        <NavMenu />
        <SmoothScrollbar>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SmoothScrollbar>
      </Router>
    </StyledThemeProvider>
  );
}

export default App;
