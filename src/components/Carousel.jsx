import styled from 'styled-components';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const CarouselStyles = styled.div`
  .slick-slider {
    margin: 0 auto;
    padding-top: 10rem;
  }

  .slick-slide {
    display: flex !important;
    justify-content: center;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${(props) => props.theme.text};
    font-size: 2rem;
  }

  .slick-dots li button:before,
  .slick-dots li.slick-active button:before {
    color: ${(props) => props.theme.text};
  }

  @media only screen and (max-width: 768px) {
    .slick-slider {
      width: 80%;
      padding-top: 5rem;
    }
  }
`;

// react-slick carousel with the site's shared settings and theme-aware arrows/dots.
export default function Carousel({ children }) {
  return (
    <CarouselStyles>
      <Slider {...settings}>{children}</Slider>
    </CarouselStyles>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};
