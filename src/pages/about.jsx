import styled from 'styled-components';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import EntryList from '../components/EntryList';
import Button from '../components/Button';
import PortraitImg from '../assets/images/portrait-mountain.jpg';
import BigAirImg from '../assets/images/ski-big-air.jpg';
import BackflipImg from '../assets/images/ski-backflip.jpg';
import { capabilities, education, experience, interests, leadership, summary } from '../assets/data/profile';
import { CV_URL, socials } from '../assets/data/contact';

// Links in the first quarter, bio in the main text column, portrait in the last quarter.
const Intro = styled.div`
  border-top: 1px solid var(--rule);

  > * {
    padding-block: 32px 48px;
  }

  .actions {
    --span: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .copy {
    --span: 6;
  }

  .copy p {
    max-width: 62ch;
    color: var(--ink-muted);
  }

  .copy p + p {
    margin-top: 1.1em;
  }

  .copy p:first-child {
    max-width: 52ch;
    color: var(--ink);
    font-size: clamp(1.125rem, 1.6vw, 1.3125rem);
    line-height: 1.35;
    letter-spacing: -0.01em;
  }

  figure {
    --span: 3;
  }

  figure img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: 20% 62%;
  }

  figcaption {
    margin-top: 10px;
  }

  @media (max-width: 1023px) {
    .copy {
      --span: 9;
      padding-right: 0;
    }

    figure {
      --start: 4;
      --span: 6;
      padding-top: 0;
    }
  }

  /* Phones: bio first, then the photo beside the buttons. */
  @media (max-width: 639px) {
    grid-template-columns: 5fr 7fr;

    > * {
      padding-block: 24px;
    }

    .copy {
      grid-column: 1 / -1;
      order: -1;
      border-bottom: 1px solid var(--rule);
    }

    figure {
      grid-column: 1;
      order: 0;
      padding-top: 24px;
    }

    .actions {
      grid-column: 2;
      order: 1;
      align-items: stretch;
      padding-left: var(--cell);
      border-left: 1px solid var(--rule);

      > * {
        justify-content: space-between;
      }
    }
  }
`;

const Section = styled.section.attrs({ className: 'section' })`
  --section-gap: 64px;

  @media (max-width: 767px) {
    --section-gap: 48px;
  }
`;

// Landscape photo across three quarters, portrait in the last quarter; the portrait
// stretches to the landscape's height.
const Gallery = styled.div`
  > * {
    padding-top: 32px;
  }

  figure {
    display: flex;
    flex-direction: column;
  }

  .wide {
    --span: 9;
  }

  .tall {
    --span: 3;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .wide img {
    aspect-ratio: 3 / 2;
  }

  .tall img {
    flex: 1 1 0;
    min-height: 0;
  }

  figcaption {
    margin-top: 10px;
  }

  /* Phones: the two photos side by side, cropped to the same shape. */
  @media (max-width: 639px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    .wide,
    .tall {
      grid-column: auto;
    }

    .wide img,
    .tall img {
      flex: none;
      aspect-ratio: 4 / 5;
    }

    .wide img {
      object-position: 30% 50%;
    }
  }
`;

const Skills = styled.dl`
  > div {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    border-bottom: 1px solid var(--rule);
  }

  dt {
    grid-column: span 3;
    padding: 22px var(--cell) 22px 0;
  }

  dd {
    grid-column: span 9;
    padding: 18px 0 18px var(--cell);
    border-left: 1px solid var(--rule);
    font-size: 1.125rem;
  }

  @media (max-width: 639px) {
    > div {
      grid-template-columns: 1fr;
      padding-block: 18px;
    }

    dt,
    dd {
      grid-column: 1 / -1;
      padding: 0;
      border-left: 0;
    }

    dd {
      margin-top: 6px;
    }
  }
`;

export default function About() {
  return (
    <>
      <PageHeader index="01" kicker="About" title="About">
        {summary} First-Class MSci in Computer Science.
      </PageHeader>

      <Intro className="container grid-12">
        <div className="actions pad-r">
          <Button to={CV_URL} icon="↓" download>
            Download CV
          </Button>
          {socials.map(({ label, url }) => (
            <Button key={label} to={url} variant="secondary" icon="↗">
              {label}
            </Button>
          ))}
        </div>
        <div className="copy ruled pad-r">
          <p>
            Sole engineer on a live transcription and analysis platform used by the World Economic Forum, taken from
            prototype to launch, spanning real-time streaming pipelines through to NLP analysis.
          </p>
          <p>
            My journey into coding started back in secondary school. What began as curiosity quickly grew into a
            passion, especially for building things that solve real-world problems, whether that’s automating repetitive
            tasks, improving safety in sports, or uncovering useful insights through data.
          </p>
        </div>
        <figure className="photo ruled">
          <img src={PortraitImg} alt="Michael Hills at a mountain restaurant terrace on a sunny day" />
          <figcaption className="label">Fig. 02: Michael Hills</figcaption>
        </figure>
      </Intro>

      <Section>
        <SectionHeader index="A" title="Experience" />
        <div className="container">
          <EntryList entries={experience} />
        </div>
      </Section>

      <Section>
        <SectionHeader index="B" title="Education" />
        <div className="container">
          <EntryList entries={education} />
        </div>
      </Section>

      <Section>
        <SectionHeader index="C" title="Leadership" />
        <div className="container">
          <EntryList entries={leadership} />
        </div>
      </Section>

      <Section>
        <SectionHeader index="D" title="Skills" />
        <div className="container">
          <Skills>
            {capabilities.flatMap((c) => [
              <div key={c.code}>
                <dt className="label">{c.title}</dt>
                <dd>{c.tools.join(', ')}</dd>
              </div>,
              c.deploy && (
                <div key={`${c.code}-deploy`}>
                  <dt className="label">Deployment</dt>
                  <dd>{c.deploy.join(', ')}</dd>
                </div>
              ),
            ])}
          </Skills>
        </div>
      </Section>

      <Section>
        <SectionHeader index="E" title="Off the clock" meta={interests.join(' / ')} />
        <Gallery className="container grid-12">
          <figure className="photo wide pad-r">
            <img src={BigAirImg} alt="Freestyle skier mid-air over a jump at a park event" loading="lazy" />
            <figcaption className="label">Fig. 03: Big air, park event</figcaption>
          </figure>
          <figure className="photo tall ruled">
            <img src={BackflipImg} alt="Freestyle skier upside down mid-backflip" loading="lazy" />
            <figcaption className="label">Fig. 04: Backflip</figcaption>
          </figure>
        </Gallery>
      </Section>
    </>
  );
}
