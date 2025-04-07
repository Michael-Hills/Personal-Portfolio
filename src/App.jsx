import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import { darkTheme, lightTheme } from './styles/Themes';
import NavMenu from './components/NavMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import ProjectDetailPage from './components/ProductDetailPage'
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
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
      <Typography/>
      <Router>
        <NavMenu />
        <ScrollToTop />


        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetailPage/>} />
        </Routes>
      </Router>
    </StyledThemeProvider>
  );
}

export default App;
