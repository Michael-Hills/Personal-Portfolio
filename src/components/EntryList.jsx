import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.ol`
  /* Period in the first quarter, details in the main text column (shared 12-column grid). */
  li.entry {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    border-bottom: 1px solid var(--rule);
  }

  .period {
    grid-column: span 3;
    padding-block: 28px;
    padding-right: var(--cell);
  }

  .detail {
    grid-column: span 9;
    padding: 28px 0 32px var(--cell);
    border-left: 1px solid var(--rule);
  }

  h3 {
    font-size: 1.375rem;
    font-stretch: 108%;
  }

  .org {
    margin-top: 4px;
    color: var(--ink-muted);
  }

  .note,
  .group-name {
    margin-top: 20px;
  }

  .group-name {
    color: var(--ink);
  }

  .points {
    margin-top: 10px;
    max-width: 68ch;
    color: var(--ink-muted);
    font-size: 0.9375rem;

    li {
      position: relative;
      padding-left: 20px;
    }

    li + li {
      margin-top: 6px;
    }

    li::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 0.65em;
      width: 5px;
      height: 5px;
      background: var(--ink-faint);
    }
  }

  .toggle {
    display: none;
  }

  @media (max-width: 639px) {
    h3 {
      font-size: 1.1875rem;
    }

    /* Long entries collapse on phones; the toggle reveals the bullet points. */
    .points-wrap.collapsed {
      display: none;
    }

    .toggle {
      display: inline-block;
      margin-top: 8px;
      padding-block: 10px;
      color: var(--ink);
      text-decoration: underline;
      text-decoration-color: var(--rule-strong);
      text-underline-offset: 0.2em;
    }

    li.entry {
      grid-template-columns: 1fr;
      padding-block: 24px;
    }

    .period,
    .detail {
      grid-column: 1 / -1;
      padding: 0;
      border-left: 0;
    }

    .detail {
      margin-top: 8px;
    }
  }
`;

// Experience/education rows: period on the left, role, organisation and detail on the right.
// Entries with more than this many bullet points collapse behind a toggle on phones.
const COLLAPSE_OVER = 2;

function Entry({ entry, compact }) {
  const [open, setOpen] = useState(false);
  const pointCount = entry.groups.reduce((n, g) => n + g.points.length, 0);
  const collapsible = !compact && pointCount > COLLAPSE_OVER;

  return (
    <li className="entry">
      <span className="label period">{entry.period}</span>
      <div className="detail">
        <h3>{entry.role}</h3>
        <p className="org">{entry.org}</p>
        {!compact && (
          <div className={collapsible && !open ? 'points-wrap collapsed' : 'points-wrap'}>
            {entry.note && <p className="label note">{entry.note}</p>}
            {entry.groups.map((g, i) => (
              <div key={g.name ?? i}>
                {g.name && <p className="label group-name">{g.name}</p>}
                <ul className="points">
                  {g.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {collapsible && (
          <button type="button" className="label toggle" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? 'Hide details ↑' : `Show details (${pointCount}) ↓`}
          </button>
        )}
      </div>
    </li>
  );
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  compact: PropTypes.bool,
};

export default function EntryList({ entries, compact = false }) {
  return (
    <List>
      {entries.map((e) => (
        <Entry key={e.role} entry={e} compact={compact} />
      ))}
    </List>
  );
}

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      org: PropTypes.string.isRequired,
      note: PropTypes.string,
      groups: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          points: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  compact: PropTypes.bool,
};
