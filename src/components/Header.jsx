import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/useTheme';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 1px solid var(--rule);

  .bar {
    display: flex;
    align-items: center;
    gap: 24px;
    height: var(--header-h);
  }

  .brand {
    display: inline-flex;
    padding-block: 12px;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      background: var(--accent);
    }
  }

  nav {
    margin-left: auto;
  }

  nav ul {
    display: flex;
  }

  nav a,
  .control {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-muted);
    transition: color 0.15s ease, border-color 0.15s ease;

    &:hover {
      color: var(--ink);
    }
  }

  nav .num {
    color: var(--ink-faint);
  }

  nav a.active {
    color: var(--ink);

    .num {
      color: var(--accent);
    }
  }

  .control {
    border: 1px solid var(--rule-strong);

    &:hover {
      border-color: var(--ink);
    }
  }

  .swatch {
    width: 8px;
    height: 8px;
    border: 1px solid currentColor;
    background: linear-gradient(90deg, currentColor 50%, transparent 50%);
  }

  .menu-toggle,
  .menu-theme {
    display: none;
  }

  @media (max-width: 767px) {
    .menu-toggle {
      display: inline-flex;
    }

    .bar {
      gap: 8px;
    }

    /* On phones the theme switch lives in the menu panel instead of the bar. */
    .bar > .theme {
      display: none;
    }

    .menu-toggle {
      margin-left: auto;
    }

    .menu-theme {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--gutter);

      .control {
        min-height: 44px;
        padding-inline: 16px;
      }
    }

    nav {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: calc(100dvh - var(--header-h));
      overflow-y: auto;
      display: none;
      background: var(--bg);
      border-bottom: 1px solid var(--rule);
    }

    nav.open {
      display: block;
    }

    nav ul {
      flex-direction: column;
      padding: 8px var(--gutter) 24px;
    }

    nav a {
      width: 100%;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid var(--rule);
      font-family: var(--font-sans);
      font-size: 1.75rem;
      font-stretch: 112%;
      letter-spacing: -0.02em;
      text-transform: none;
      color: var(--ink);
    }

    nav .num {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.08em;
    }
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  const themeButton = (
    <button
      type="button"
      className="control theme"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className="swatch" aria-hidden="true" />
      {isDarkMode ? 'Dark' : 'Light'}
    </button>
  );

  return (
    <HeaderStyles>
      <div className="container bar">
        <Link to="/" className="brand">
          Michael Hills
        </Link>
        <nav id="site-nav" className={menuOpen ? 'open' : undefined} aria-label="Main">
          <ul>
            {NAV_LINKS.map(({ to, label }, i) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'}>
                  <span className="num">{String(i).padStart(2, '0')}</span>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="menu-theme">
            <span className="label">Theme</span>
            {themeButton}
          </div>
        </nav>
        {themeButton}
        <button
          type="button"
          className="control menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </HeaderStyles>
  );
}
