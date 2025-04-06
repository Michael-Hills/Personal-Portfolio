import 'swiper/swiper-bundle.css';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Slider from 'react-slick';
import ProjectItem from './ProjectItem';
import projectData from '../assets/data/projects';



const ProjectSectionStyle = styled.div`
  padding: 10rem 0;

  .slick-slider {
    margin: 0 auto; /* Centers the carousel */
    padding-top: 10rem;
  }

  .slick-prev,
  .slick-next {
    &:before {
      color: ${props => props.theme.text}; /* Use theme text color */
      font-size: 2rem;
    }
  }

  /* Add styles for slider dots */
  .slick-dots {
    li {
      button {
        &:before {
          color: ${props => props.theme.text}; /* Use theme text color */
        }
      }
      &.slick-active button:before {
        color: ${props => props.theme.text}; /* Use theme text color for active dot */
      }
    }
  }

  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }

    .slick-slider {
      width: 80%; /* Further reduce for mobile */
      padding-top: 5rem;
    }
  }
`;

export default function ProjectsSection() {

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
        <ProjectSectionStyle>
          <div className="container">
          <SectionTitle subheading="some of my" heading="Projects" />
          <Slider {...settings} className="services__carousel">
            {projectData.map((project) => (
              <ProjectItem
                key={project.id} // Unique key for each project
                id={project.id}  // Passing the unique project id
                category={project.category}
                img={project.img}
                title={project.title}
                desc={project.desc}
              />
            ))}
          </Slider>
        </div>
        </ProjectSectionStyle>
      );


  
}
