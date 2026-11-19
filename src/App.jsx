import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import ProjectPage from './pages/project';
import Contact from './pages/contact';

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {/* Keep the router basename in sync with `base` in vite.config.js */}
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
