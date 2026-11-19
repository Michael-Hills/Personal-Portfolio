import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styles = styled.div`
  border-block: 1px solid var(--rule);

  /* Large outlined index in the first quarter, title in the main text column. */
  .num {
    --span: 3;
    align-self: end;
    padding-block: 28px 20px;
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 700;
    font-stretch: 125%;
    font-variant-numeric: tabular-nums;
    line-height: 0.8;
    letter-spacing: -0.04em;
    color: transparent;
    -webkit-text-stroke: 1.25px var(--ink-muted);
  }

  .head {
    --span: 9;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    padding-block: 28px 20px;
  }

  h2 {
    font-size: clamp(1.75rem, 3.6vw, 3.25rem);
    font-weight: 600;
    font-stretch: 115%;
    letter-spacing: -0.03em;
    line-height: 0.95;
  }

  .meta {
    flex-shrink: 0;
    text-align: right;
  }

  @media (max-width: 639px) {
    .container {
      display: flex;
      align-items: flex-end;
      gap: 14px;
    }

    .num {
      padding-block: 20px 16px;
      font-size: 2.5rem;
    }

    .head {
      flex: 1;
      padding-block: 20px 16px;
    }

    h2 {
      font-size: 1.75rem;
    }
  }

  /* The meta text is supplementary; drop it rather than let it wrap on narrow phones. */
  @media (max-width: 479px) {
    .meta {
      display: none;
    }
  }
`;

export default function SectionHeader({ index, phoneIndex, title, meta }) {
  return (
    <Styles>
      <div className="container grid-12">
        <span className="num" aria-hidden="true">
          {phoneIndex ? (
            <>
              <span className="hide-phone">{index}</span>
              <span className="phone-only">{phoneIndex}</span>
            </>
          ) : (
            index
          )}
        </span>
        <div className="head ruled">
          <h2>{title}</h2>
          {meta && <span className="label meta">{meta}</span>}
        </div>
      </div>
    </Styles>
  );
}

SectionHeader.propTypes = {
  index: PropTypes.string.isRequired,
  // Shown instead of `index` on phones, where some sections are hidden.
  phoneIndex: PropTypes.string,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
};
