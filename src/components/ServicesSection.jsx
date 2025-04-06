import { MdCode} from 'react-icons/md';
import { CiServer } from "react-icons/ci";
import { LuBrainCog } from "react-icons/lu";
import { TbDatabaseSearch } from "react-icons/tb";
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
            icon={<CiServer />}
            title="Backend"
            desc="Build and maintain backend services and APIs that support seamless frontend integration
            and efficient data handling."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Frontend"
            desc="Build responsive, user-friendly interfaces in React, integrated seamlessly with backend APIs."
          />
          <ServicesSectionItem
            icon={<LuBrainCog />}
            title="Machine Learning"
            desc="Develop machine learning pipelines with a focus on natural language processing, time series analysis, 
            and computer vision."
          />
          <ServicesSectionItem
            icon={<TbDatabaseSearch/>}
            title="Data Engineering"
            desc="Develop ETL scripts to efficiently process and transform data,
            and create detailed charts and dashboards to support data analysis and decision-making."
          />
         
        </Slider>
      </div>
    </ServicesItemsStyles>
  );
}
