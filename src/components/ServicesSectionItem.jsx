import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';
import PropTypes from 'prop-types';

const ItemStyles = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;

  
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 3.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 768px) {

    .servicesItem__title {
    font-size: 3rem;
  }
  }
  
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}


ServicesSectionItem.propTypes = {
    icon: PropTypes.element.isRequired, 
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}