import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmartLink from './SmartLink';
import { contact, socials } from '../assets/data/contact';

const SITEMAP = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const CONTACT_LINKS = [
  { label: contact.email, href: `mailto:${contact.email}` },
  { label: contact.phone, href: contact.phoneHref },
  { label: 'London, UK', href: contact.mapUrl },
];

const FooterStyles = styled.footer.attrs({ className: 'section' })`
  .ruled {
    border-top: 1px solid var(--rule);
  }

  .cols {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .col {
    grid-column: span 3;
    padding: 32px var(--cell) 48px 0;

    & + .col {
      padding-left: var(--cell);
      border-left: 1px solid var(--rule);
    }

    &:last-child {
      padding-right: 0;
    }
  }

  .name {
    font-size: 1.5rem;
    font-weight: 600;
    font-stretch: 118%;
    letter-spacing: -0.02em;
  }

  .tagline {
    margin-top: 8px;
    max-width: 32ch;
    color: var(--ink-muted);
    font-size: 0.9375rem;
  }

  h2 {
    margin-bottom: 16px;
  }

  li + li {
    margin-top: 6px;
  }

  @media (pointer: coarse), (max-width: 767px) {
    li + li {
      margin-top: 0;
    }
  }

  .col a {
    font-size: 0.9375rem;
    overflow-wrap: anywhere;
  }

  .colophon {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 24px;
    padding-block: 16px;
    border-top: 1px solid var(--rule);

    .back-to-top {
      margin-left: auto;
    }
  }

  @media (max-width: 899px) {
    .cols {
      grid-template-columns: 1fr 1fr;
    }

    .col {
      grid-column: auto;
      padding-right: 0;
    }

    .col:first-child {
      grid-column: 1 / -1;
      border-bottom: 1px solid var(--rule);
    }

    .col + .col {
      padding-left: 0;
      border-left: 0;
    }

    .col:last-child {
      padding-left: var(--cell);
      border-left: 1px solid var(--rule);
    }

    .col:nth-child(3) {
      grid-column: 1 / -1;
      order: 3;
      border-top: 1px solid var(--rule);
    }
  }

  /* Phones: one short strip. The Contact section above already gives the email. */
  @media (max-width: 639px) {
    .cols {
      grid-template-columns: 1fr;
      padding-block: 20px 8px;
    }

    .col,
    .col:last-child {
      grid-column: 1 / -1;
      order: 0;
      padding: 0;
      border: 0;
    }

    .col.intro,
    .col.contact-col,
    .col h2 {
      display: none;
    }

    .col ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
    }

    .col li + li {
      margin-top: 0;
    }

    .colophon .set-in {
      display: none;
    }
  }
`;

function LinkColumn({ title, links, className }) {
  return (
    <div className={className ? `col ${className}` : 'col'}>
      <h2 className="label">{title}</h2>
      <ul>
        {links.map(({ label, href }) => (
          <li key={href}>
            <SmartLink href={href} className="text-link">
              {label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

LinkColumn.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, href: PropTypes.string.isRequired })
  ).isRequired,
};

export default function Footer() {
  return (
    <FooterStyles>
      <div className="ruled">
        <div className="container cols">
          <div className="col intro">
            <p className="name">Michael Hills</p>
            <p className="tagline">Backend engineer building and running systems in production. Based in London.</p>
          </div>
          <LinkColumn title="Sitemap" links={SITEMAP} />
          <LinkColumn title="Contact" links={CONTACT_LINKS} className="contact-col" />
          <LinkColumn title="Elsewhere" links={socials.map(({ label, url }) => ({ label, href: url }))} />
        </div>
      </div>
      <div className="container colophon">
        <span className="label">© {new Date().getFullYear()} Michael Hills</span>
        <span className="label set-in">Set in Archivo &amp; IBM Plex Mono</span>
        <a href="#top" className="label back-to-top text-link">
          Back to top ↑
        </a>
      </div>
    </FooterStyles>
  );
}
