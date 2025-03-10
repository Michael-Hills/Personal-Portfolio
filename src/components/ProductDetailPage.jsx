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
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
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
    }
  }
  

  
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column-reverse;
      gap: 5rem;
    }
    .project__subheading {
      font-size: 1.8rem;
    }
    .project__heading {
      font-size: 2.8rem;
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
              <h2 className="project__heading">Project</h2>
              <div className="project__info">
                <PText>
                  I am from chittagong, Bangladesh. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              
            </div>
            <div className="right">
              <div className="project__info__items">  

              <ProjectTech
                  title="Project Category:"
                  items={['HTML', 'CSS', 'JavaScript']}
                />
                
                <ProjectTech
                  title="Tech Stack:"
                  items={['HTML', 'CSS', 'JavaScript', 'REACT','CSS', 'JavaScript', 'REACT']}
                />
                
               

              </div>
            </div>
          </div>
        </div>
        <ContactBanner />
      </ProjectPageStyles>
      <Footer/>
    </>
  );
}

  