import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styles = styled.header`
  .container {
    padding-block: 64px 48px;
  }

  .label .index {
    color: var(--accent);
    margin-right: 12px;
  }

  h1 {
    margin-top: 20px;
    font-size: clamp(3rem, 9vw, 7rem);
    font-stretch: 118%;
    font-weight: 600;
    line-height: 0.95;
    letter-spacing: -0.035em;
  }

  .intro {
    margin-top: 28px;
    max-width: 56ch;
    font-size: clamp(1.125rem, 1.8vw, 1.375rem);
    line-height: 1.35;
    color: var(--ink-muted);
  }

  @media (max-width: 767px) {
    .container {
      padding-block: 40px 32px;
    }
  }
`;

export default function PageHeader({ index, kicker, title, children }) {
  return (
    <Styles>
      <div className="container">
        <p className="label">
          <span className="index">{index}</span>
          {kicker}
        </p>
        <h1>{title}</h1>
        {children && <p className="intro">{children}</p>}
      </div>
    </Styles>
  );
}

PageHeader.propTypes = {
  index: PropTypes.string.isRequired,
  kicker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
