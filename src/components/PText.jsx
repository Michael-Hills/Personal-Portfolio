import styled from 'styled-components'
import PropTypes from 'prop-types';

const PStyle = styled.div`

max-width: 500px;
margin: 0 auto ;
font-size: 1.8rem;
line-height: 2rem;

@media only screen and (max-width: 768px){
  font-size: 1.4rem;
  width: 95%;
}


`;

export default function PText({children}) {
  return (
    <PStyle className='para'>
      <p>{children}</p>
    </PStyle>
  )
}


PText.propTypes = {
  children: PropTypes.node.isRequired, // Validates that 'children' is passed and is a React node
};