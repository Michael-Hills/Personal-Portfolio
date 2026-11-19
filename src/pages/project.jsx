import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import projectData, { projectNumber } from '../assets/data/projects';
import Button from '../components/Button';
import SmartLink from '../components/SmartLink';
import PageHeader from '../components/PageHeader';

const Styles = styled.article`
  .crumb {
    padding-top: 40px;

    a {
      margin-right: 8px;
    }
  }

  h1 {
    margin-top: 20px;
    max-width: 16ch;
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-stretch: 118%;
    font-weight: 600;
    line-height: 0.98;
    letter-spacing: -0.035em;
  }

  .status {
    display: inline-block;
    margin-top: 20px;
    color: var(--accent);
  }

  .body {
    margin-top: 48px;
    border-top: 1px solid var(--rule);
  }

  .body > * {
    padding-block: 40px;
  }

  .desc {
    --span: 9;
    max-width: 68ch;
    font-size: 1.125rem;
    line-height: 1.65;
  }

  .side {
    --span: 3;
  }

  .spec {
    > div {
      padding-block: 14px;
      border-bottom: 1px solid var(--rule);
    }

    > div:first-child {
      padding-top: 0;
    }

    dd {
      margin-top: 6px;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    li {
      padding: 3px 8px;
      border: 1px solid var(--rule-strong);
      font-family: var(--font-mono);
      font-size: 0.75rem;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
  }

  figure {
    border-top: 1px solid var(--rule);
    padding-top: 32px;
  }

  figure img {
    width: 100%;
    max-height: 640px;
    object-fit: cover;
  }

  figcaption {
    margin-top: 10px;
  }

  .pager {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 64px;
    border-block: 1px solid var(--rule);

    a {
      display: block;
      padding-block: 24px;
      transition: color 0.15s ease;

      &:hover {
        color: var(--accent);
      }
    }

    a + a,
    .next {
      text-align: right;
    }

    .title {
      display: block;
      margin-top: 6px;
      font-size: 1.25rem;
      font-stretch: 108%;
    }
  }

  @media (max-width: 1023px) {
    .desc {
      --span: 12;
      max-width: none;
    }

    .side {
      --span: 12;
      padding-top: 0;
      border-left: 0;
      padding-left: 0;
    }
  }
`;

export default function ProjectPage() {
  const { id } = useParams();
  const index = projectData.findIndex((p) => p.id === Number(id));
  const project = projectData[index];

  if (!project) {
    return (
      <PageHeader index="404" kicker="Not found" title="Project not found">
        <SmartLink href="/projects" className="text-link">
          Back to all projects →
        </SmartLink>
      </PageHeader>
    );
  }

  const prev = projectData[index - 1];
  const next = projectData[index + 1];

  return (
    <Styles>
      <div className="container">
        <p className="label crumb">
          <SmartLink href="/projects" className="text-link">
            Projects
          </SmartLink>
          / {projectNumber(project)}
        </p>
        <h1>{project.title}</h1>
        {project.status && <span className="label status">● {project.status}</span>}

        <div className="body grid-12">
          <p className="desc pad-r">{project.long_desc}</p>
          <div className="side ruled">
            <dl className="spec">
              <div>
                <dt className="label">Discipline</dt>
                <dd>
                  <ul className="tags">
                    {project.long_category.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="label">Stack</dt>
                <dd>
                  <ul className="tags">
                    {project.tech_stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            {(project.liveLink || project.githubLink || project.reportLink) && (
              <div className="actions">
                {project.liveLink && (
                  <Button to={project.liveLink} icon="↗">
                    Visit live site
                  </Button>
                )}
                {project.githubLink && (
                  <Button to={project.githubLink} variant={project.liveLink ? 'secondary' : 'primary'} icon="↗">
                    Source on GitHub
                  </Button>
                )}
                {project.reportLink && (
                  <Button to={project.reportLink} variant="secondary" icon="↓" download>
                    Report
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <figure>
          <img src={project.img} alt="" />
          <figcaption className="label">
            Fig. {projectNumber(project)}: {project.title}
          </figcaption>
        </figure>

        <nav className="pager" aria-label="More projects">
          {prev ? (
            <SmartLink href={`/project/${prev.id}`}>
              <span className="label">← Previous</span>
              <span className="title">{prev.title}</span>
            </SmartLink>
          ) : (
            <span />
          )}
          {next && (
            <SmartLink href={`/project/${next.id}`} className="next">
              <span className="label">Next →</span>
              <span className="title">{next.title}</span>
            </SmartLink>
          )}
        </nav>
      </div>
    </Styles>
  );
}
