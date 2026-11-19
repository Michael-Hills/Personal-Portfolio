import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import SmartLink from './SmartLink';

const ButtonLink = styled(SmartLink)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid var(--ink);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  ${({ $variant }) =>
    $variant === 'primary'
      ? css`
          background: var(--ink);
          color: var(--bg);
        `
      : css`
          background: transparent;
          color: var(--ink);
        `}

  &:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--on-accent);
  }

  .icon {
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1;
  }
`;

export default function Button({ to, children, icon = '→', variant = 'primary', download = false }) {
  return (
    <ButtonLink href={to} $variant={variant} download={download || undefined}>
      {children}
      <span className="icon" aria-hidden="true">
        {icon}
      </span>
    </ButtonLink>
  );
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  download: PropTypes.bool,
};
