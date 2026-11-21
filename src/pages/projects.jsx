import { useState } from 'react';
import styled from 'styled-components';
import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import ProjectIndex from '../components/ProjectIndex';
import ProjectTable from '../components/ProjectTable';
import ProjectsInfo from '../assets/data/projects';

const categories = ['All', ...new Set(ProjectsInfo.flatMap((project) => project.short_category))];
const countFor = (category) =>
  category === 'All' ? ProjectsInfo.length : ProjectsInfo.filter((p) => p.short_category.includes(category)).length;

const Filters = styled.div`
  border-block: 1px solid var(--rule);

  > * {
    padding-block: 20px;
  }

  .search {
    --span: 3;
    display: grid;
    gap: 6px;
  }

  .chips {
    --span: 9;
    align-self: end;
  }

  @media (max-width: 639px) {
    /* One swipeable row (attribute selector outranks the base .chips rule below). */
    .chips[role='group'] {
      flex-wrap: nowrap;
      margin-right: calc(var(--gutter) * -1);
      padding-top: 0;
      padding-right: var(--gutter);
      overflow-x: auto;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      button {
        flex-shrink: 0;
      }
    }
  }

  input {
    width: 100%;
    padding: 8px 0;
    border: 0;
    border-bottom: 1px solid var(--rule-strong);
    border-radius: 0;
    background: transparent;
    font-size: 1.125rem;

    &:focus {
      outline: none;
      border-bottom-color: var(--accent);
    }
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .chips button {
    min-height: 36px;
    padding: 0 12px;
    border: 1px solid var(--rule-strong);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-muted);
    transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;

    &:hover {
      color: var(--ink);
      border-color: var(--ink);
    }

    &[aria-pressed='true'] {
      background: var(--ink);
      border-color: var(--ink);
      color: var(--bg);
    }

    .count {
      margin-left: 8px;
      opacity: 0.6;
    }
  }

  /* View switch, pushed to the end of the chip row. */
  .views {
    display: flex;
    margin-left: auto;
  }

  .views button + button {
    margin-left: -1px;
  }
`;

// The list view is the only view on phones, whatever was chosen on a wider screen.
const TableWrap = styled.div`
  @media (max-width: 639px) {
    display: none;
  }
`;

const Empty = styled.p`
  padding-block: 48px;
  color: var(--ink-muted);
`;

export default function Projects() {
  usePageTitle('Projects');
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState('list');

  const query = searchText.trim().toLowerCase();
  const projectsData = ProjectsInfo.filter(
    (item) =>
      (!query || item.title.toLowerCase().includes(query)) &&
      (selectedCategory === 'All' || item.short_category.includes(selectedCategory))
  );

  return (
    <>
      <PageHeader index="02" kicker="Projects" title="Projects">
        Machine learning, backend and full-stack projects from university and beyond.
      </PageHeader>
      <div className="container">
        <Filters className="grid-12">
          <label className="search pad-r" htmlFor="projectSearch">
            <span className="label">Search by name</span>
            <input
              id="projectSearch"
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="e.g. clustering"
            />
          </label>
          <div className="chips ruled" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                <span className="count">{countFor(category)}</span>
              </button>
            ))}
            <span className="views hide-phone" role="group" aria-label="View as">
              {['list', 'table'].map((v) => (
                <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)}>
                  {v}
                </button>
              ))}
            </span>
          </div>
        </Filters>
        {projectsData.length === 0 ? (
          <Empty>No projects match your search.</Empty>
        ) : view === 'table' ? (
          <>
            <TableWrap>
              <ProjectTable projects={projectsData} />
            </TableWrap>
            <div className="phone-only">
              <ProjectIndex projects={projectsData} compact withDesc />
            </div>
          </>
        ) : (
          <ProjectIndex projects={projectsData} compact withDesc />
        )}
      </div>
    </>
  );
}
