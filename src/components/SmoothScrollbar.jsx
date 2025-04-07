import PropTypes from 'prop-types';

export default function SmoothScrollbar({ children }) {
    return (
        <div className="smooth-scroll-container">
            {children}
        </div>
    );
}

SmoothScrollbar.propTypes = {
    children: PropTypes.node.isRequired
};