import styled from 'styled-components';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.gray2};
  border: 2px solid ${({ theme }) => theme.gray1};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  position: relative;
  width: 54px;
  height: 28px;

  .toggle-circle {
    background: ${({ theme }) => theme.text};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    transition: transform 0.2s linear;
    transform: ${({ $isDark }) => 
      $isDark ? 'translateX(26px)' : 'translateX(0)'};
  }

  .toggle-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 4px;
    
    svg {
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.text};
    }
  }
`;

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <ToggleButton onClick={toggleTheme} $isDark={isDark}>
      <div className="toggle-icons">
        <span role="img" aria-label="sun">☀️</span>
        <span role="img" aria-label="moon">🌙</span>
      </div>
      <div className="toggle-circle" />
    </ToggleButton>
  );
}