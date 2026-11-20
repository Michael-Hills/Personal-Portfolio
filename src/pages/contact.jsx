import styled from 'styled-components';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import SmartLink from '../components/SmartLink';
import { contact, socials } from '../assets/data/contact';

const DETAILS = [
  { term: 'Email', label: contact.email, href: `mailto:${contact.email}` },
  { term: 'Location', label: contact.location, href: contact.mapUrl },
  ...socials.map(({ label, url }) => ({ term: label, label: url.replace(/^https:\/\/(www\.)?/, ''), href: url })),
];

const Layout = styled.div`
  border-top: 1px solid var(--rule);

  > * {
    --span: 6;
    padding-block: 40px;
  }

  dl > div {
    padding-block: 16px;
    border-bottom: 1px solid var(--rule);
  }

  dl > div:first-child {
    padding-top: 0;
  }

  dd {
    margin-top: 4px;
    font-size: 1.125rem;
    overflow-wrap: anywhere;
  }

  @media (max-width: 639px) {
    > * + * {
      border-top: 1px solid var(--rule);
    }
  }
`;

export default function Contact() {
  return (
    <>
      <PageHeader index="03" kicker="Contact" title="Contact">
        Send a message using the form, or reach me directly.
      </PageHeader>
      <div className="container">
        <Layout className="grid-12">
          <dl className="pad-r">
            {DETAILS.map(({ term, label, href }) => (
              <div key={term}>
                <dt className="label">{term}</dt>
                <dd>
                  <SmartLink href={href} className="text-link">
                    {label}
                  </SmartLink>
                </dd>
              </div>
            ))}
          </dl>
          <div className="ruled">
            <ContactForm />
          </div>
        </Layout>
      </div>
    </>
  );
}
