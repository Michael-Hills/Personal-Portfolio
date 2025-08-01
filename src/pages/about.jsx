import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 7rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
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
      display: none;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;

    .items{
      margin-top: 1rem;
    }
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  .about__info__buttons {
  display: flex;
  align-items: flex-start; 
  gap: 2rem;
  
    ul {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      height: 48px;
      
      li {
        display: flex;
        align-items: center; 
        height: 100%;
        
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-1);
          min-height: 48px;
          min-width: 48px;
          font-size: 2.2rem;
          transition: 0.3s ease background-color;
        }
      }
    }
  }

  .experience__bullets{
    margin: 2rem 0 3rem 2rem;
    list-style-type: disc;
    color: var(--gray-2);
    font-size: 1.6rem;
    line-height: 1.3;
    padding-left: 4rem;
    
    li {
      margin-bottom: 0.5rem;
      display: list-item;
      list-style: disc outside;
      color: var(--gray-1);


      ul {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        padding-left: 2rem;
        
        li {
          list-style-type: circle;
          font-size: 1.5rem;
        }
      }
    }


  }

  .rotation__intro {
  margin: 2rem 0 1rem 2rem;
  color: var(--gray-1);
  font-size: 1.6rem;
  line-height: 1.3;
  padding-left: 1.5rem;
}

  
  

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
   
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }

    .about__info__items{
      margin-top: 3rem;
    }

    .about__info__heading {
      font-size: 3rem;
    }

    .right {
      display: flex;
      justify-content: center;
      width: 100%;
      
      img {
        max-width: 60%;
        width: 350px;
        height: auto;
      }
    }

    .about__info__buttons {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      
      ul {
        justify-content: center;
      }
    }

    .experience__bullets {
    padding-left: 2rem;
    font-size: 1.4rem;

    li {
      font-size: 1.4rem;  
      
      ul {
        li {
          font-size: 1.3rem;  
        }
      }
    }
  }

    .rotation__intro {
    font-size: 1.4rem;
    padding-left: 0rem;
    }    
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <SectionTitle heading="About Me" subheading=''/>
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Michael Hills</span>
              </p>
              <h2 className="about__heading">Software Engineer</h2>
              <div className="about__info">
                <PText>
                Graduated from the University of Exeter, with a First-Class Masters degree in Computer Science,
                currently working as a Backend Developer at Serendipity AI.
                <br/><br/>

                My journey into coding started back in secondary school. What began as curiosity quickly grew
                into a passion, especially for building things that solve real-world problems — whether that’s
                automating repetitive tasks, improving safety in sports, or uncovering useful insights through data.

                <br/><br/>

                Over time, I’ve developed a strong interest in both machine learning and full-stack web development.
                I love creating intelligent applications — from training models on real-world data to crafting responsive
                frontends and robust backends.

                <br/><br/>

                I’m always exploring new frameworks, tools, and ideas. My goal is simple: to build meaningful tech that
                makes life a little smarter, safer, or just easier.

                </PText>
              </div>
              <div className='about__info__buttons'>
                <Button btnText="Download CV" btnLink="https://raw.githubusercontent.com/Michael-Hills/Personal-Portfolio/main/public/MJ Hills - CV Mar'25 (1-pager) v1.0.pdf"  download={true}/>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/michaeljhills1/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin/>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Michael-Hills"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education:</h1>

              <AboutInfoItem
                items={['Reading Blue Coat School']}
              />

              <p className="rotation__intro">
                <strong>- A* Maths, A* Further Maths, A* Physics, A* Geology</strong>
              </p>
              <AboutInfoItem
                items={['University of Exeter']}
              />

              <p className="rotation__intro">
                <strong>- First Class Masters in Computer Science</strong>
              </p>
             
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills:</h1>

              
              <AboutInfoItem
                title="BackEnd: "
                items={['Python (FastAPI, Django)', 'Java (Spring Boot)']}
              />
              <AboutInfoItem
                title="FrontEnd: "
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="Machine Learning: "
                items={['PyTorch', 'BERT', 'Hugging Face','Scikit-learn']}
              />
              <AboutInfoItem
                title="Data & Analytics: "
                items={['SQL', 'PL/SQL','Pandas', 'Qlik', 'PowerBI']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience:</h1>

              <AboutInfoItem
                title="2020-2024: "
                items={['MSci Computer Science, University of Exeter']}
              />

              <ul className="experience__bullets">
                <li>First Class Honours, specialising in Machine Learning and Software Engineering</li>
                <li>Key modules: Artificial Intelligence, Social Networks & Text Analysis, Multi-Objective Optimisation</li>
              </ul>
              

              <AboutInfoItem
                title="Sept 2024-July 2025: "
                items={['Associate Software Engineer (ASE), Fitch Ratings']}
              />

              <p className="rotation__intro">
                <strong>3 Month Rotations:</strong>
              </p>

              <ul className="experience__bullets">
                <li>BMI-Data Transformation:
                  <ul>
                    <li>Developed a full-stack web application using FastAPI backend, PostgreSQL database, and React frontend</li>
                    <li>Contributed to backend API design, frontend development, and data transformation workflows in an agile team</li>
                  </ul>
                </li>
                <li>CDO-Enterprise Data Analytics:
                  <ul>
                    <li>Built a web app to track usage, costs, and ROI for Fitch products, using Qlik ETL scripts, AngularJS, and Qlik APIs</li>
                    <li>Created a user behaviour based product recommendation system utilising BERTopic text clustering and market basket analysis</li>
                  </ul>
                </li>
              </ul>


              <AboutInfoItem
                title="July 2025-Present: "
                items={['Backend Developer, Serendipity AI']}
              />
              
             
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
      <Footer/>
    </>
  );
}