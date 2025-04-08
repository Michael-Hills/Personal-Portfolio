import { useParams } from 'react-router-dom';
import projectData from '../assets/data/projects'; 

import styled from 'styled-components';
import PText from '../components/PText';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import ProjectTech from './ProjectTech';


const ProjectPageStyles = styled.div`
  padding: 15rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .project__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .project__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      white-space: pre-wrap
    }
  }
  .right {

    .project__info__items {
      width: 100%;
    }
    img {
     
      border: 2px solid var(--gray-1);
      max-width: 90%;
      height: auto;
      margin-top: 5rem;
      
    }
  }
  

  
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 0rem;
    }
    .project__subheading {
      font-size: 1.8rem;
    }
    .project__heading {
      font-size: 2.8rem;
    }
    
    .right {
      align-items: center;
      img {
        max-width: 80%;
      }
  }
  }
`;

export default function ProjectDetailPage() {
  const { id } = useParams(); 
  const project = projectData.find(p => p.id === Number(id)); 

  if (!project) {
    return <div>Project not found!</div>;
  }


  return (
    <>
      <ProjectPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h2 className="project__heading">{project.title}</h2>
              <div className="project__info">
                <PText>
                  {project.long_desc}
                </PText>
              </div>
              
            </div>
            <div className="right">
              <div className="project__info__items">  

              <ProjectTech
                  title="Project Category:"
                  items={project.long_category}
                />
                
                <ProjectTech
                  title="Tech Stack:"
                  items={project.tech_stack}
                />
                
              </div>

              <img
                id={`project-image-${project.id}`}
                src={project.img}
                alt={project.title}></img>
            </div>
          </div>
        </div>
        <ContactBanner />
      </ProjectPageStyles>
      <Footer/>
    </>
  );
}

  