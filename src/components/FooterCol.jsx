import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmartLink from './SmartLink';

const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

export default function FooterCol({
  heading = 'Col Heading',
  links = [
    {
      title: 'Home',
      path: '/home',
    },
    {
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item) => (
          <li key={item.path}>
            <SmartLink href={item.path}>{item.title}</SmartLink>
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}

FooterCol.propTypes = {
    heading: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  };