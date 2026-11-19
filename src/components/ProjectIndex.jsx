import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmartLink from './SmartLink';
import { projectNumber } from '../assets/data/projects';

const List = styled.ol`
  li {
    border-bottom: 1px solid var(--rule);
  }

  /* Rows sit on the shared 12-column grid: number | thumbnail | text from column 4 | specs. */
  .row {
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: center;
    padding-block: 20px;
  }

  /* Accent bar slides in on hover. */
  .row::before {
    content: '';
    position: absolute;
    left: calc(var(--gutter) * -1);
    top: -1px;
    bottom: -1px;
    width: 3px;
    background: var(--accent);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.2s ease;
  }

  .row:hover::before,
  .row:focus-visible::before {
    transform: scaleY(1);
  }

  .no {
    grid-column: span 1;
    align-self: start;
  }

  .thumb {
    grid-column: span 2;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--bg-raised);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.25s ease, transform 0.4s ease;
    }
  }

  /* Greyscale until hovered, on devices that can hover; touch screens see colour. */
  @media (hover: hover) {
    .thumb img {
      filter: grayscale(1) contrast(1.05);
    }

    .row:hover .thumb img {
      filter: none;
      transform: scale(1.04);
    }
  }

  .main {
    grid-column: span 6;
    padding-inline: var(--cell);
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 12px;
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: 108%;
    letter-spacing: -0.015em;
    line-height: 1.15;
  }

  .status {
    color: var(--accent);
  }

  .desc {
    display: -webkit-box;
    margin-top: 8px;
    max-width: 60ch;
    overflow: hidden;
    color: var(--ink-muted);
    font-size: 0.9375rem;
    line-height: 1.5;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .side {
    grid-column: span 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .specs {
    display: grid;
    gap: 6px;
  }

  .stack {
    color: var(--ink-faint);
  }

  .arrow {
    font-size: 1.25rem;
    color: var(--ink-faint);
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .row:hover .arrow {
    color: var(--accent);
    transform: translateX(4px);
  }

  @media (max-width: 1023px) {
    .main {
      grid-column: span 8;
      padding-right: 0;
    }

    .side {
      grid-column: span 1;
      justify-content: flex-end;
    }

    .specs {
      display: none;
    }
  }

  /* Phones: full-width image cards. */
  @media (max-width: 639px) {
    .row {
      grid-template-columns: auto minmax(0, 1fr);
      grid-template-areas:
        'thumb thumb'
        'no side'
        'main main';
      gap: 14px 12px;
      padding-block: 24px 28px;
    }

    .row::before {
      display: none;
    }

    .thumb {
      grid-area: thumb;
      aspect-ratio: 3 / 2;
    }

    .no {
      grid-area: no;
      align-self: center;
    }

    .side {
      grid-area: side;
      justify-content: space-between;
    }

    .specs {
      display: flex;
      gap: 12px;
    }

    .stack {
      display: none;
    }

    .main {
      grid-area: main;
      padding: 0;
    }

    .title {
      font-size: 1.375rem;
    }

    .desc {
      -webkit-line-clamp: 3;
    }

    /* Compact list (home page): small thumbnail, title and category only. */
    &.compact {
      .row {
        grid-template-columns: 88px minmax(0, 1fr) auto;
        grid-template-areas:
          'thumb main arrow'
          'thumb specs arrow';
        gap: 4px 16px;
        padding-block: 16px;
      }

      .thumb {
        aspect-ratio: 4 / 3;
      }

      .no,
      .desc {
        display: none;
      }

      .main {
        align-self: end;
      }

      .title {
        font-size: 1.125rem;
      }

      .side {
        display: contents;
      }

      &.with-desc .row {
        grid-template-areas:
          'thumb main arrow'
          'thumb specs arrow'
          'desc desc desc';
        row-gap: 4px;
      }

      &.with-desc .main {
        display: contents;
      }

      &.with-desc .title {
        grid-area: main;
        align-self: end;
      }

      &.with-desc .desc {
        display: -webkit-box;
        grid-area: desc;
        margin-top: 10px;
        -webkit-line-clamp: 2;
      }

      .specs {
        grid-area: specs;
        align-self: start;
      }

      .arrow {
        grid-area: arrow;
        align-self: center;
      }
    }
  }
`;

export default function ProjectIndex({ projects, compact = false, withDesc = false }) {
  const className = [compact && 'compact', compact && withDesc && 'with-desc'].filter(Boolean).join(' ');
  return (
    <List className={className || undefined}>
      {projects.map((p) => (
        <li key={p.id}>
          <SmartLink href={`/project/${p.id}`} className="row">
            <span className="label no">{projectNumber(p)}</span>
            <span className="thumb">
              <img src={p.thumb ?? p.img} alt="" loading="lazy" />
            </span>
            <span className="main">
              <span className="title">
                {p.title}
                {p.status && <span className="label status">{p.status}</span>}
              </span>
              <span className="desc">{p.short_desc}</span>
            </span>
            <span className="side">
              <span className="specs">
                <span className="label cat">{p.short_category.join(' / ')}</span>
                <span className="label stack">{p.tech_stack.slice(0, 3).join(' · ')}</span>
              </span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </span>
          </SmartLink>
        </li>
      ))}
    </List>
  );
}

ProjectIndex.propTypes = {
  // Compact rows on phones instead of full-width image cards.
  compact: PropTypes.bool,
  // With `compact`: keep a two-line description under each row.
  withDesc: PropTypes.bool,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      thumb: PropTypes.string,
      short_desc: PropTypes.string.isRequired,
      short_category: PropTypes.arrayOf(PropTypes.string).isRequired,
      tech_stack: PropTypes.arrayOf(PropTypes.string).isRequired,
      status: PropTypes.string,
    })
  ).isRequired,
};
