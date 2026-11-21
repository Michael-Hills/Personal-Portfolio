import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import { Navigate, useParams } from 'react-router-dom';
import SmartLink from '../components/SmartLink';
import usePageTitle from '../hooks/usePageTitle';
import { NOTES_PATH, noteBySlug, notes } from '../assets/data/notes';

const Head = styled.header`
  .crumb {
    padding-top: 40px;
  }

  .crumb a {
    margin-right: 8px;
  }

  h1 {
    margin-top: 20px;
    max-width: 18ch;
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-stretch: 118%;
    font-weight: 600;
    line-height: 0.98;
    letter-spacing: -0.035em;
  }

  .body {
    margin-top: 48px;
    border-top: 1px solid var(--rule);
  }

  .body > * {
    padding-block: 40px;
  }

  .intro {
    --span: 9;
    max-width: 40ch;
    font-size: clamp(1.25rem, 2.2vw, 1.75rem);
    line-height: 1.3;
    letter-spacing: -0.015em;
  }

  .side {
    --span: 3;
  }

  .spec > div {
    padding-block: 14px;
    border-bottom: 1px solid var(--rule);
  }

  .spec > div:first-child {
    padding-top: 0;
  }

  .spec dd {
    margin-top: 6px;
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

  /* Headline figures across the four quarters. */
  .stats {
    border-top: 1px solid var(--rule);
  }

  .stats > div {
    --span: 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-block: 28px;
  }

  .stats dd {
    order: -1;
    font-size: clamp(2rem, 3.4vw, 3rem);
    font-stretch: 118%;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .stats dd.words {
    font-size: clamp(1.5rem, 2.4vw, 2.125rem);
    line-height: 1.15;
  }

  @media (max-width: 1023px) {
    .intro,
    .side {
      --span: 12;
    }

    .side {
      padding-top: 0;
      padding-left: 0;
      border-left: 0;
    }

    .stats > div {
      --span: 6;
    }

    .stats > div:nth-child(3) {
      padding-left: 0;
      border-left: 0;
    }

    .stats > div:nth-child(n + 3) {
      border-top: 1px solid var(--rule);
    }
  }

  @media (max-width: 639px) {
    .crumb {
      padding-top: 32px;
    }

    .body {
      margin-top: 32px;
    }

    .body > * {
      padding-block: 28px;
    }

    .side {
      padding-top: 0;
    }

    /* Figures in a 2 × 2 grid rather than four full-width rows. */
    .stats {
      grid-template-columns: 1fr 1fr;
    }

    .stats > div {
      grid-column: auto;
      padding: 20px 12px 20px 0;
    }

    .stats > div:nth-child(even) {
      padding-left: 16px;
      border-left: 1px solid var(--rule);
    }
  }
`;

const Section = styled.section.attrs({ className: 'section' })`
  --section-gap: 80px;

  @media (max-width: 767px) {
    --section-gap: 48px;
  }
`;

// Main text column: starts on the 25% line, like the rest of the site.
const Prose = styled.div`
  > div {
    --start: 4;
    --span: 7;
    padding-block: 32px 8px;
  }

  p {
    max-width: 64ch;
    font-size: 1.125rem;
    line-height: 1.65;
  }

  p + p {
    margin-top: 1.1em;
    color: var(--ink-muted);
  }

  @media (max-width: 639px) {
    > div {
      padding-block: 24px 0;
    }

    p {
      font-size: 1.0625rem;
    }
  }
`;

// Data-flow diagram: one row per stage, nodes side by side, flowing downwards.
const Flow = styled.ol`
  padding-top: 32px;

  > li {
    position: relative;
  }

  > li + li {
    margin-top: 28px;
  }

  /* Arrow between stages, on the 25% line. */
  > li + li::before {
    content: '↓';
    position: absolute;
    top: -26px;
    left: calc(25% + var(--cell) + 12px);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--accent);
  }

  .stage {
    --span: 3;
    padding-top: 14px;
  }

  .stage .note {
    display: block;
    margin-top: 6px;
    color: var(--ink-faint);
    text-transform: none;
    letter-spacing: 0;
  }

  .nodes {
    --span: 9;
    padding-left: var(--cell);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
  }

  .node {
    padding: 14px 16px;
    border: 1px solid var(--rule-strong);
    background: var(--bg-raised);
  }

  .node strong {
    display: block;
    font-weight: 500;
    font-stretch: 108%;
  }

  .node span {
    display: block;
    margin-top: 4px;
    font-size: 0.875rem;
    color: var(--ink-muted);
  }

  @media (max-width: 639px) {
    > li + li {
      margin-top: 36px;
    }

    > li + li::before {
      top: -30px;
      left: 0;
    }

    .stage {
      padding-top: 0;
      padding-bottom: 10px;
    }

    .nodes {
      padding-left: 0;
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .node {
      padding: 12px 14px;
    }
  }
`;

// Term in the first quarter, text in the rest; shared by the architecture notes and results.
const Rows = styled.dl`
  margin-top: 48px;
  border-top: 1px solid var(--rule);

  > div {
    border-bottom: 1px solid var(--rule);
  }

  dt {
    --span: 3;
    padding: 22px var(--cell) 22px 0;
  }

  dd {
    --span: 9;
    max-width: 72ch;
    padding-block: 18px;
    color: var(--ink-muted);
  }

  @media (max-width: 639px) {
    margin-top: 32px;

    > div {
      padding-block: 18px;
    }

    dt,
    dd {
      padding: 0;
    }

    dd {
      margin-top: 6px;
    }
  }
`;

const Challenges = styled.ol`
  > li {
    border-bottom: 1px solid var(--rule);
  }

  .num {
    --span: 3;
    align-self: start;
    padding-block: 32px;
    color: var(--accent);

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }
  }

  .detail {
    --span: 9;
    padding-block: 28px 36px;
  }

  h3 {
    font-size: clamp(1.375rem, 2.2vw, 1.75rem);
    font-stretch: 108%;
    letter-spacing: -0.015em;
  }

  .part {
    display: grid;
    grid-template-columns: 7rem 1fr;
    gap: 16px;
    margin-top: 18px;
    max-width: 78ch;
  }

  .part .label {
    padding-top: 0.3em;
  }

  .part p {
    color: var(--ink-muted);
  }

  .part.result p {
    color: var(--ink);
  }

  @media (max-width: 639px) {
    > li {
      padding-block: 24px;
    }

    .num,
    .detail {
      padding: 0;
    }

    .detail {
      margin-top: 8px;
    }

    .part {
      grid-template-columns: 1fr;
      gap: 4px;
      margin-top: 16px;
    }
  }
`;

const Results = styled.ul`
  li {
    --start: 4;
    --span: 9;
    padding: 18px 0 18px var(--cell);
    display: flex;
    gap: 14px;
    border-bottom: 1px solid var(--rule);
    font-size: 1.125rem;
  }

  li::before {
    content: '';
    flex: none;
    width: 8px;
    height: 8px;
    margin-top: 0.5em;
    background: var(--accent);
  }

  @media (max-width: 639px) {
    li {
      padding-left: 0;
      font-size: 1rem;
    }
  }
`;

const Pager = styled.nav`
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

  a + a {
    text-align: right;
  }

  .title {
    display: block;
    margin-top: 6px;
    font-size: 1.25rem;
    font-stretch: 108%;
  }
`;

const PART_LABELS = [
  ['problem', 'Problem'],
  ['approach', 'What I did'],
  ['result', 'Result'],
];

export default function Note() {
  const { slug } = useParams();
  const note = noteBySlug(slug);
  usePageTitle(note ? `Note ${note.number}: ${note.title}` : 'Notes');

  if (!note) return <Navigate to={NOTES_PATH} replace />;

  const index = notes.indexOf(note);
  const prev = notes[index - 1];
  const next = notes[index + 1];

  return (
    <article>
      <Head className="container">
        <p className="label crumb">
          <SmartLink href={NOTES_PATH} className="text-link">
            Notes
          </SmartLink>
          / Note {note.number} / {note.org}
        </p>
        <h1>{note.title}</h1>

        <div className="body grid-12">
          <p className="intro pad-r">{note.intro}</p>
          <div className="side ruled">
            <dl className="spec">
              {note.spec.map((s) => (
                <div key={s.term}>
                  <dt className="label">{s.term}</dt>
                  <dd>
                    {s.href ? (
                      <SmartLink href={s.href} className="text-link">
                        {s.value} ↗
                      </SmartLink>
                    ) : (
                      s.value
                    )}
                  </dd>
                </div>
              ))}
              <div>
                <dt className="label">Stack</dt>
                <dd>
                  <ul className="tags">
                    {note.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {note.stats && (
        <dl className="stats grid-12">
          {note.stats.map((s, i) => (
            <div key={s.label} className={[i > 0 && 'ruled', 'pad-r'].filter(Boolean).join(' ')}>
              <dt className="label">{s.label}</dt>
              <dd className={/^\d/.test(s.value) ? undefined : 'words'}>{s.value}</dd>
            </div>
          ))}
        </dl>
        )}
      </Head>

      <Section>
        <SectionHeader index="01" title="Overview" />
        <Prose className="container grid-12">
          <div className="ruled pad-r">
            {note.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Prose>
      </Section>

      <Section>
        <SectionHeader index="02" title="Architecture" meta="Data flow" />
        <div className="container">
          <Flow aria-label="Data flow, from input to analysis">
            {note.flow.map((row) => (
              <li key={row.stage} className="grid-12">
                <p className="label stage pad-r">
                  {row.stage}
                  {row.note && <span className="note">{row.note}</span>}
                </p>
                <ul className="nodes">
                  {row.nodes.map((n) => (
                    <li key={n.name} className="node">
                      <strong>{n.name}</strong>
                      <span>{n.detail}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </Flow>

          <Rows>
            {note.architecture.map((a) => (
              <div key={a.term} className="grid-12">
                <dt className="label">{a.term}</dt>
                <dd className="ruled">{a.text}</dd>
              </div>
            ))}
          </Rows>
        </div>
      </Section>

      <Section>
        <SectionHeader index="03" title="Challenges" meta={`${String(note.challenges.length).padStart(2, '0')} problems`} />
        <div className="container">
          <Challenges>
            {note.challenges.map((c, i) => (
              <li key={c.title} id={`challenge-${i + 1}`} className="grid-12">
                <a href={`#challenge-${i + 1}`} className="label num" aria-label={`Link to challenge 3.${i + 1}`}>
                  § 3.{i + 1}
                </a>
                <div className="detail ruled">
                  <h3>{c.title}</h3>
                  {PART_LABELS.map(([key, label]) => (
                    <div key={key} className={`part ${key}`}>
                      <span className="label">{label}</span>
                      <p>{c[key]}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </Challenges>
        </div>
      </Section>

      <Section>
        <SectionHeader index="04" title="Results" />
        <div className="container">
          <Results className="grid-12">
            {note.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </Results>

          <Pager aria-label="More notes">
            {prev ? (
              <SmartLink href={prev.path}>
                <span className="label">← Note {prev.number}</span>
                <span className="title">{prev.title}</span>
              </SmartLink>
            ) : (
              <SmartLink href={NOTES_PATH}>
                <span className="label">← Back</span>
                <span className="title">All notes</span>
              </SmartLink>
            )}
            {next ? (
              <SmartLink href={next.path}>
                <span className="label">Note {next.number} →</span>
                <span className="title">{next.title}</span>
              </SmartLink>
            ) : (
              <SmartLink href={NOTES_PATH}>
                <span className="label">All notes →</span>
                <span className="title">Notes</span>
              </SmartLink>
            )}
          </Pager>
        </div>
      </Section>
    </article>
  );
}
