import styled from 'styled-components';
import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import SmartLink from '../components/SmartLink';
import { notes } from '../assets/data/notes';

// One row per note: number in the first quarter, title and summary in the main column, stack on the right.
const List = styled.ol`
  border-top: 1px solid var(--rule);

  li {
    border-bottom: 1px solid var(--rule);
  }

  a {
    padding-block: 28px;
    transition: color 0.15s ease;

    &:hover h2,
    &:hover .arrow {
      color: var(--accent);
    }
  }

  .num {
    --span: 3;
    padding-top: 0.35em;
    color: var(--accent);
  }

  .main {
    --span: 6;
  }

  h2 {
    font-size: clamp(1.5rem, 2.6vw, 2.25rem);
    font-stretch: 112%;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.05;
    transition: color 0.15s ease;
  }

  .org {
    margin-top: 8px;
  }

  .intro {
    margin-top: 14px;
    max-width: 56ch;
    color: var(--ink-muted);
  }

  .side {
    --span: 3;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .stack {
    color: var(--ink-muted);
    line-height: 1.8;
  }

  .arrow {
    font-size: 1.25rem;
    transition: color 0.15s ease;
  }

  @media (max-width: 639px) {
    a {
      padding-block: 22px;
    }

    .num {
      padding: 0 0 8px;
    }

    .side {
      margin-top: 14px;
    }
  }
`;

export default function Notes() {
  usePageTitle('Notes');

  return (
    <>
      <PageHeader index="03" kicker="Notes" title="Notes">
        Engineering write-ups of systems I have built: how they work, what was hard, and how it turned out.
      </PageHeader>
      <div className="container">
        <List>
          {notes.map((n) => (
            <li key={n.slug}>
              <SmartLink href={n.path} className="grid-12">
                <span className="label num">Note {n.number}</span>
                <div className="main pad-r">
                  <h2>{n.title}</h2>
                  <p className="label org">{n.org}</p>
                  <p className="intro">{n.intro}</p>
                </div>
                <div className="side ruled">
                  <p className="label stack">{n.stack.slice(0, 5).join(' / ')}</p>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </SmartLink>
            </li>
          ))}
        </List>
      </div>
    </>
  );
}
