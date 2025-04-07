import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';
import PropTypes from 'prop-types';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }

  a {
    display: flex;
    gap: 2rem;
    align-items: center;
    text-decoration: none;
    width: 100%;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text',
  link = '#'
}) {
  return (
    <ItemStyles>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="icon">{icon}</div>
        <div className="info">
          <PText>{text}</PText>
        </div>
      </a>
    </ItemStyles>
  );
}

ContactInfoItem.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};