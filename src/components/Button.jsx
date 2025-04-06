import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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


export default function Button({ btnLink = 'Button', btnText = 'Button', outline = 'no', download= false}) {
    return (
      <ButtonStyle $outline={outline}>{download ? (
        <a 
          className="button" 
          href={btnLink} 
          download
          target="_blank"
          rel="noreferrer"
        >
          {btnText}
        </a>
      ) : (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      )}
      </ButtonStyle>
    );
  }


Button.propTypes = {
    btnLink: PropTypes.string.isRequired, 
    btnText: PropTypes.string.isRequired,
    outline: PropTypes.string,
    download: PropTypes.bool,
}