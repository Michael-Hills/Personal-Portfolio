import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmartLink from './SmartLink';
import { projectNumber } from '../assets/data/projects';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th {
    padding: 14px var(--cell) 14px 0;
    border-bottom: 1px solid var(--rule-strong);
    font-weight: 400;
    white-space: nowrap;
  }

  td {
    padding: 16px var(--cell) 16px 0;
    border-bottom: 1px solid var(--rule);
    vertical-align: baseline;
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
    text-align: right;
  }

  .num,
  .year {
    color: var(--ink-muted);
    white-space: nowrap;
  }

  .title a {
    font-size: 1.0625rem;
    font-stretch: 108%;
    transition: color 0.15s ease;

    &:hover {
      color: var(--accent);
    }
  }

  .context {
    color: var(--ink-muted);
  }

  td.stack {
    color: var(--ink-muted);
    font-size: 0.875rem;
  }

  .links {
    white-space: nowrap;

    a + a {
      margin-left: 16px;
    }
  }

  @media (max-width: 1023px) {
    .stack {
      display: none;
    }
  }

  /* Phones: number, project and year only; the project page has the rest. */
  @media (max-width: 639px) {
    .context,
    .links {
      display: none;
    }

    .year {
      text-align: right;
      padding-right: 0;
    }
  }
`;

// Archive view of the projects: one scannable row each, newest-first in list order.
export default function ProjectTable({ projects }) {
  return (
    <Table>
      <thead>
        <tr className="label">
          <th className="num" scope="col">
            No.
          </th>
          <th className="year" scope="col">
            Year
          </th>
          <th scope="col">Project</th>
          <th className="context" scope="col">
            Context
          </th>
          <th className="stack" scope="col">
            Built with
          </th>
          <th className="links" scope="col">
            Links
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p) => (
          <tr key={p.id}>
            <td className="label num">{projectNumber(p)}</td>
            <td className="label year">{p.year ?? ''}</td>
            <td className="title">
              <SmartLink href={`/project/${p.id}`}>{p.title}</SmartLink>
            </td>
            <td className="context">{p.context}</td>
            <td className="stack">{p.tech_stack.join(', ')}</td>
            <td className="links label">
              {p.liveLink && (
                <SmartLink href={p.liveLink} className="text-link">
                  Live ↗
                </SmartLink>
              )}
              {p.githubLink && (
                <SmartLink href={p.githubLink} className="text-link">
                  Code ↗
                </SmartLink>
              )}
              {p.reportLink && (
                <SmartLink href={p.reportLink} className="text-link" download>
                  Report ↓
                </SmartLink>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

ProjectTable.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
