import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Carousel from './Carousel';
import ProjectItem from './ProjectItem';
import projectData from '../assets/data/projects';

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my" heading="Projects:" />
        <Carousel>
          {projectData.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              category={project.short_category}
              img={project.img}
              title={project.title}
              desc={project.short_desc}
            />
          ))}
        </Carousel>
      </div>
    </ProjectSectionStyle>
  );
}
