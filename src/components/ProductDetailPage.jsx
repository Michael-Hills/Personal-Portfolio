import { useParams } from 'react-router-dom';
import projectData from '../assets/data/projects'; 
import Button from './Button';
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
    margin-bottom: 2rem;
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
      margin-top: -9rem;
      margin-left: 2rem;
    }

    .project__buttons {
      padding-top: 3rem;
      display: flex;
      gap: 3rem;
      width: 90%;
      justify-content: center;
      margin: 0 auto;

      .button{
        font-size: 1.8rem;
        padding: 1rem 1rem 1rem 1rem;
      }
      

    }
  }

  .project__img {
    display: flex;
    justify-content: center;
    margin-top: 10rem;

    img {
      border: 2px solid var(--gray-1);
      max-width: 40%;
      height: auto;
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

    .left{

    }
    
    .right {
      align-items: center;
      display: flex;
      flex-direction: column;
      img {
        max-width: 80%;
      }
    }
    
    .right {
      .project__buttons {
        order: 1;
        gap: 2rem;
        align-items: center;
        padding-left: 0;
        align-items: center;
        padding-top: 0rem;

        .button{
          font-size: 1.6rem;
        }
      }

      .project__info__items {
        order: 2;
        margin-top: 2rem;
      }      
    }

    .project__img{
        margin-top: 3rem;

        img {
          
          max-width: 60%;
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
          <h2 className="project__heading">{project.title}</h2>
          <div className="top-section">
            <div className="left">
              <div className="project__info">
                <PText>
                  {project.long_desc}
                </PText>
              </div>
              
            </div>
            <div className="right">
              <div className="project__info__items">  

              <ProjectTech
                  items={project.long_category}
                />
                
                <ProjectTech
                  title="Tech Stack:"
                  items={project.tech_stack}
                />
              </div>

              {(project.githubLink || project.reportLink) && (
                <div className="project__buttons">
                  {project.githubLink && (
                    <Button 
                    btnText="View on GitHub" 
                    btnLink={project.githubLink} 
                    outline="no"
                    download={true}
                  />
                  )}
                  {project.reportLink && (
                    <Button 
                      btnText="Download Report" 
                      btnLink={project.reportLink} 
                      outline="no"
                      download={true}
                    />
                  )}
                </div>
              )} {}
            </div>
          </div>
          <div className='project__img'>
            <img
                id={`project-image-${project.id}`}
                src={project.img}
                alt={project.title}></img>
          </div>
        </div>
        <ContactBanner />
      </ProjectPageStyles>
      <Footer/>
    </>
  );
}

  