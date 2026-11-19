import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 99%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon,
  .closeNavIcon button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    display: none;
  }
  .navItems .closeNavIcon {
    display: none;
  }

  .theme-toggle-desktop {
    position: absolute;
    left: 2rem;
    top: 1.2rem;
    display: block;
  }

  .theme-toggle-mobile {
    display: none; /* Hide mobile toggle by default */
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .theme-toggle-desktop {
      display: none;
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        button {
          width: 100%;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
      .theme-toggle-mobile {
        display: block;
        position: absolute;
        top: 2rem;
        left: 2rem;
      }
    }
  }
`;



const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  const closeNav = () => setShowNav(false);

  return (
    <NavStyles>
      <div className="theme-toggle-desktop">
        <ThemeToggle />
      </div>
      <button
        type="button"
        className="mobile-menu-icon"
        onClick={() => setShowNav(true)}
        aria-label="Open navigation menu"
        aria-expanded={showNav}
      >
        <MdMenu />
      </button>

      <ul className={showNav ? 'navItems' : 'navItems hide-item'}>
        <li className="closeNavIcon">
          <button type="button" onClick={closeNav} aria-label="Close navigation menu">
            <MdClose />
          </button>
        </li>
        <li className="theme-toggle-mobile">
          <ThemeToggle />
        </li>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end={to === '/'} onClick={closeNav}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
}
