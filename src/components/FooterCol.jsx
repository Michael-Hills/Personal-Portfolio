import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
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
        type: PropTypes.oneOf(['Link', 'External']).isRequired, // Restrict 'type' to specific values
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  };