import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import Slider from 'react-slick';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;


  .slick-slider {
    margin: 0 auto; /* Centers the carousel */
  }


  .services__carousel {
    margin-top: 5rem;
  }
  .slick-slide {
    display: flex !important;
    justify-content: center;
  }

    .slick-dots li button:before {
    color: white; /* Changes the dots to white */
  }
  .slick-dots li.slick-active button:before {
    color: white; /* Ensures the active dot is also white */
  }


  @media screen and (max-width: 768px) {
    .slick-slider {
      width: 80%; /* Further reduce for mobile */
    }
  }

  
  
`;

export default function ServicesSection() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop slides
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of items visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:5000,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px screen
        settings: {
          slidesToShow: 2, // Show 2 items
        },
      },
      {
        breakpoint: 768, // Below 768px screen
        settings: {
          slidesToShow: 1, // Show 1 item
        },
      },
    ],
  };

  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What are my" heading="Skills" />
        <Slider {...settings} className="services__carousel">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui."
          />
          {/* Add more items as needed */}
        </Slider>
      </div>
    </ServicesItemsStyles>
  );
}
