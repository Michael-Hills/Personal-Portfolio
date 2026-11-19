import PropTypes from 'prop-types';
import styled from 'styled-components';
import SmartLink from './SmartLink';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  
  .button {
    font-size: 2.2rem;
    background-color: ${(props) => props.$outline === 'yes' ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => props.$outline === 'yes' ? 'var(--gray-1)' : 'white'};
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({ btnLink, btnText, outline = 'no', download = false }) {
  return (
    <ButtonStyle $outline={outline}>
      <SmartLink className="button" href={btnLink} download={download || undefined}>
        {btnText}
      </SmartLink>
    </ButtonStyle>
  );
}

Button.propTypes = {
  btnLink: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  outline: PropTypes.oneOf(['yes', 'no']),
  download: PropTypes.bool,
};
