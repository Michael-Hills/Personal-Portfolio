import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  min-width: 7.5em;
  padding: 6px 10px;
  border: 1px solid var(--rule-strong);
  color: var(--ink-muted);
  text-align: center;
  vertical-align: middle;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: var(--ink);
    border-color: var(--ink);
  }

  &[data-state='copied'] {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

const LABELS = { idle: 'Copy', copied: 'Copied ✓', failed: 'Copy failed' };

// Copies `text` to the clipboard and confirms for a couple of seconds; the label change is announced.
export default function CopyButton({ text, className }) {
  const [state, setState] = useState('idle');

  useEffect(() => {
    if (state === 'idle') return undefined;
    const timer = setTimeout(() => setState('idle'), 2000);
    return () => clearTimeout(timer);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      setState('failed');
    }
  };

  return (
    <Button
      type="button"
      className={className ? `label ${className}` : 'label'}
      data-state={state}
      onClick={copy}
      aria-label={state === 'idle' ? `Copy ${text}` : undefined}
    >
      <span aria-live="polite">{LABELS[state]}</span>
    </Button>
  );
}

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
