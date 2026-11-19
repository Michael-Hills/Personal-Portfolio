import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Renders a router <Link> for in-app paths ("/about") and a plain <a> for everything else.
// Web links open in a new tab; mailto:/tel:, #anchors and downloads stay in the current one.
export default function SmartLink({ href, children, ...rest }) {
  if (href.startsWith('/') && !rest.download) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }
  const newTab = /^https?:/.test(href) ? { target: '_blank', rel: 'noreferrer' } : {};
  return (
    <a href={href} {...newTab} {...rest}>
      {children}
    </a>
  );
}

SmartLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  download: PropTypes.bool,
};
