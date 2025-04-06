import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about2.png';

const AboutSectionStyles = styled.div`
  padding: 5rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .aboutSection__right {
    display: flex;
    justify-content: flex-end;
    img{
      width: 80%;
      height: auto;
      object-fit: contain;
    }
  }

  
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
    
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
      justify-content: center;
      img{
        width: 80%;
        height: auto;
        object-fit: cover;
      }
    }

    

   

    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
          I’m a software engineer with a passion for machine learning and full-stack development. 
          I specialise in building intelligent applications, from training models using real-world data
          to developing robust backend systems and designing responsive frontends. I’m always exploring new tools,
          frameworks, and innovative ideas to solve meaningful challenges through technology.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Projects" btnLink="/projects" outline='no'/>
            <Button btnText="Read More" btnLink="/about" outline='yes' />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}