import { useParams } from 'react-router-dom';
import projectData from '../assets/data/projects'; 

import styled from 'styled-components';
import PText from '../components/PText';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import ProjectTech from './ProjectTech';


const ProjectPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

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
    }
  }
  .right {
    img {
     
      border: 2px solid var(--gray-1);
      max-width: 80%;
      height: auto;
      margin-top: 5rem;
    }
  }
  

  
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .project__subheading {
      font-size: 1.8rem;
    }
    .project__heading {
      font-size: 2.8rem;
    }
    
    .right {
    img {
      max-width: 70%;
    }
  }
  }
`;

export default function ProjectDetailPage() {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectData.find(p => p.id === Number(id)); // Convert id to a number before comparison

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
                  {project.desc}
                </PText>
              </div>
              
            </div>
            <div className="right">
              <div className="project__info__items">  

              <ProjectTech
                  title="Project Category:"
                  items={project.category}
                />
                
                <ProjectTech
                  title="Tech Stack:"
                  items={['HTML', 'CSS', 'JavaScript', 'REACT','CSS', 'JavaScript', 'REACT']}
                />
                
              </div>

              <img
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

  