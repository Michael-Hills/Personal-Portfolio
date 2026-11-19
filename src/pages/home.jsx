import styled from 'styled-components';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ProjectIndex from '../components/ProjectIndex';
import EntryList from '../components/EntryList';
import LondonClock from '../components/LondonClock';
import SmartLink from '../components/SmartLink';
import HeroImg from '../assets/images/portrait.jpg';
import projects from '../assets/data/projects';
import { capabilities, currentWork, experience, summary } from '../assets/data/profile';
import { contact, CV_URL } from '../assets/data/contact';

const pad = (n) => String(n).padStart(2, '0');

const Hero = styled.section`
  .topline {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding-block: 20px;

    .index {
      color: var(--accent);
      margin-right: 12px;
    }
  }

  .name {
    padding-block: 8px 32px;
    font-size: clamp(3.5rem, 13.5vw, 11.5rem);
    font-stretch: 125%;
    font-weight: 700;
    line-height: 0.86;
    letter-spacing: -0.045em;
    text-transform: uppercase;
  }

  .grid-12 {
    border-top: 1px solid var(--rule);
  }

  .grid-12 > * {
    padding-block: 32px;
  }

  .facts {
    --span: 3;
  }

  .intro {
    --span: 6;
  }

  figure {
    --span: 3;
  }

  dl div + div {
    margin-top: 16px;
  }

  dd {
    margin-top: 2px;
    font-size: 0.9375rem;
  }

  .lede {
    max-width: 24ch;
    font-size: clamp(1.625rem, 3vw, 2.375rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;

    em {
      font-style: normal;
      color: var(--accent);
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 40px;
  }

  figure img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: 50% 35%;
  }

  figcaption {
    margin-top: 10px;
  }

  /* Tablets and phones: statement first, then the photo beside the facts. */
  @media (max-width: 1023px) {
    .intro {
      --span: 12;
      order: -1;
      padding-inline: 0;
      border-left: 0;
      border-bottom: 1px solid var(--rule);
    }

    .grid-12 > figure {
      --span: 4;
      order: 0;
      padding-left: 0;
      padding-right: var(--cell);
      border-left: 0;
    }

    .facts {
      --span: 8;
      order: 1;
      padding-left: var(--cell);
      border-left: 1px solid var(--rule);
    }
  }

  @media (max-width: 639px) {
    .name {
      font-size: 16vw;
    }

    .grid-12 {
      grid-template-columns: 5fr 7fr;
    }

    .grid-12 > * {
      padding-block: 24px;
    }

    .intro {
      grid-column: 1 / -1;
    }

    figure {
      grid-column: 1;
      align-self: start;
    }

    .facts {
      grid-column: 2;
    }

    dl div + div {
      margin-top: 12px;
    }

    .actions {
      margin-top: 28px;

      > * {
        flex: 1;
      }
    }
  }
`;

// Current work: context | headline and body | figures, on the same columns as the hero.
const Now = styled.div`
  > * {
    padding-block: 32px;
  }

  .context {
    --span: 3;
    display: grid;
    align-content: start;
    gap: 16px;
  }

  .org {
    color: var(--accent);
  }

  .stack {
    color: var(--ink);
    line-height: 1.8;
  }

  .text {
    --span: 6;
  }

  h3 {
    max-width: 20ch;
    font-size: clamp(1.75rem, 3.2vw, 2.75rem);
    font-stretch: 112%;
    letter-spacing: -0.025em;
  }

  .body {
    margin-top: 20px;
    max-width: 52ch;
    color: var(--ink-muted);
  }

  .links {
    margin-top: 24px;
  }

  dl {
    --span: 3;
    display: grid;
    align-content: start;
  }

  dl > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-block: 18px;
    border-bottom: 1px solid var(--rule);
  }

  dl > div:first-child {
    padding-top: 0;
  }

  dl > div:last-child {
    border-bottom: 0;
  }

  dd {
    order: -1;
    font-size: clamp(2rem, 3.4vw, 3rem);
    font-stretch: 118%;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  @media (max-width: 1023px) {
    .text {
      --span: 9;
      padding-right: 0;
    }

    dl {
      --start: 4;
      --span: 9;
      grid-template-columns: 1fr 1fr;
      padding-top: 0;
    }

    dl > div:first-child {
      padding-top: 18px;
    }

    dl > div:nth-last-child(2) {
      border-bottom: 0;
    }
  }

  @media (max-width: 639px) {
    > * {
      padding-block: 24px;
    }

    .context {
      padding-bottom: 16px;
    }

    .context .stack {
      display: none;
    }

    .text,
    dl {
      padding-top: 0;
    }
  }
`;

const Capabilities = styled.ul`
  li {
    --span: 3;
    padding-block: 28px 36px;
  }

  .code {
    color: var(--accent);
  }

  h3 {
    margin-top: 32px;
    font-size: 1.5rem;
    font-stretch: 112%;
  }

  p {
    margin-top: 12px;
    color: var(--ink-muted);
    font-size: 0.9375rem;
  }

  .tools {
    margin-top: 20px;
    color: var(--ink);
  }

  @media (max-width: 1023px) {
    li {
      --span: 6;
    }

    li:nth-child(2) {
      padding-right: 0;
    }

    li:nth-child(3) {
      border-left: 0;
      padding-left: 0;
    }

    li:nth-child(n + 3) {
      border-top: 1px solid var(--rule);
    }
  }

  /* Phones: a compact name / tools table. */
  @media (max-width: 639px) {
    li {
      display: grid;
      grid-template-columns: 8.5rem minmax(0, 1fr);
      gap: 16px;
      align-items: baseline;
      padding-block: 16px;
    }

    li + li {
      border-top: 1px solid var(--rule);
    }

    .code,
    p:not(.tools) {
      display: none;
    }

    h3 {
      margin-top: 0;
      font-size: 1.125rem;
    }

    .tools {
      margin-top: 0;
      font-family: var(--font-sans);
      font-size: 0.9375rem;
      letter-spacing: 0;
      text-transform: none;
      line-height: 1.5;
      color: var(--ink-muted);
    }
  }
`;

const Section = styled.section.attrs({ className: 'section' })`
  .more {
    padding-block: 24px;
  }
`;

// Supporting link in the first quarter, main statement in the text column.
const Split = styled.div`
  > * {
    padding-block: 32px;
  }

  .aside {
    --span: 3;
    display: grid;
    align-content: start;
    gap: 12px;
  }

  .main {
    --span: 9;
  }

  .bio {
    max-width: 34ch;
    font-size: clamp(1.25rem, 2.2vw, 1.75rem);
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  p.big {
    font-size: clamp(2rem, 5.5vw, 4.5rem);
    font-stretch: 112%;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .email {
    display: inline-block;
    margin-top: 24px;
    font-size: clamp(1.125rem, 3vw, 2rem);
    overflow-wrap: anywhere;
  }

  @media (max-width: 639px) {
    > * {
      padding-block: 24px;
    }

    .aside {
      order: 2;
      padding-top: 0;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Hero>
        <div className="container topline">
          <span className="label">
            <span className="index">00</span>Home
          </span>
          <span className="label">Portfolio / Rev. {new Date().getFullYear()}</span>
        </div>
        <div className="container">
          <h1 className="name">
            Michael
            <br />
            Hills
          </h1>
        </div>
        <div className="container grid-12">
          <dl className="facts pad-r">
            <div>
              <dt className="label">Role</dt>
              <dd>Software Engineer</dd>
            </div>
            <div>
              <dt className="label">Currently</dt>
              <dd>Serendipity AI</dd>
            </div>
            <div>
              <dt className="label">Based</dt>
              <dd>London, UK</dd>
            </div>
            <div>
              <dt className="label">Local time</dt>
              <dd>
                <LondonClock />
              </dd>
            </div>
            <div>
              <dt className="label">Education</dt>
              <dd>MSci Computer Science, First Class</dd>
            </div>
          </dl>
          <div className="intro ruled pad-r">
            <p className="lede">
              Backend engineer building and running systems in production, from{' '}
              <em>real-time streaming pipelines through to NLP analysis.</em>
            </p>
            <div className="actions">
              <Button to="/projects">
                View projects
              </Button>
              <Button to={CV_URL} variant="secondary" icon="↓" download>
                Download CV
              </Button>
            </div>
          </div>
          <figure className="photo ruled">
            <img src={HeroImg} alt="Portrait of Michael Hills, smiling" />
            <figcaption className="label">Fig. 01: Michael Hills</figcaption>
          </figure>
        </div>
      </Hero>

      <Section>
        <SectionHeader index="01" title="Current work" />
        <Now className="container grid-12">
          <div className="context pad-r">
            <p className="label org">{currentWork.org}</p>
            <p className="label stack">{currentWork.stack.join(' / ')}</p>
          </div>
          <div className="text ruled pad-r">
            <h3>{currentWork.headline}</h3>
            <p className="body">{currentWork.body}</p>
            <p className="links">
              <SmartLink href="/about" className="label text-link">
                Full role details →
              </SmartLink>
            </p>
          </div>
          <dl className="ruled">
            {currentWork.stats.map((s) => (
              <div key={s.label}>
                <dt className="label">{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Now>
      </Section>

      <Section>
        <SectionHeader index="02" title="Skills" meta={`${pad(capabilities.length)} areas`} />
        <Capabilities className="container grid-12">
          {capabilities.map((c, i) => (
            <li
              key={c.code}
              className={[i > 0 && 'ruled', i < capabilities.length - 1 && 'pad-r'].filter(Boolean).join(' ')}
            >
              <span className="label code">{c.code}</span>
              <h3>{c.title}</h3>
              {c.desc && <p>{c.desc}</p>}
              <p className="label tools">{c.tools.join(' / ')}</p>
            </li>
          ))}
        </Capabilities>
      </Section>

      <Section>
        <SectionHeader index="03" title="Selected projects" meta={`${pad(projects.length)} entries`} />
        <div className="container">
          <ProjectIndex projects={projects} compact />
          <p className="more">
            <SmartLink href="/projects" className="label text-link">
              Search &amp; filter all projects →
            </SmartLink>
          </p>
        </div>
      </Section>

      <Section className="hide-phone">
        <SectionHeader index="04" title="Profile" />
        <Split className="container grid-12">
          <div className="aside pad-r">
            <SmartLink href="/about" className="label text-link">
              Full profile →
            </SmartLink>
          </div>
          <div className="main ruled">
            <p className="bio">{summary} First-Class MSci in Computer Science.</p>
          </div>
        </Split>
        <div className="container">
          <EntryList entries={experience} compact />
        </div>
      </Section>

      <Section>
        <SectionHeader index="05" phoneIndex="04" title="Contact" />
        <Split className="container grid-12">
          <div className="aside pad-r">
            <SmartLink href="/contact" className="label text-link">
              Use the contact form →
            </SmartLink>
          </div>
          <div className="main ruled">
            <p className="big">Get in touch.</p>
            <a href={`mailto:${contact.email}`} className="email text-link">
              {contact.email}
            </a>
          </div>
        </Split>
      </Section>
    </>
  );
}
