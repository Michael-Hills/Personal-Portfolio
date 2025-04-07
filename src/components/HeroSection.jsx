import styled from 'styled-components';
import HeroImg from '../assets/images/test3.jpg';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroStyles = styled.div`
  .hero {

  
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 10rem;
  }

  .container{
    margin-top: 10rem;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 1rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--gray-1);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
  .hero__img {
    max-width: 600px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;

    p{
      color: white !important; 
      
    }
    
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 10rem;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
      filter: ${({ theme }) => theme.text === '#FFFFFF' ? 'invert(0)' : 'invert(1)'};
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
      filter: ${({ theme }) => theme.text === '#FFFFFF' ? 'invert(0)' : 'invert(1)'};
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 2.4rem;
          color: var(--white);
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 1rem;
          transition: 0.3s ease transform;
          &:hover {
            transform: rotate(-90deg) scale(1.5);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      margin-bottom: 5rem;

    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
      max-width:90%;
    }
    .hero__info {
      margin-top: 3rem;
      p{
        color: var(--white) !important;
      }
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    .hero__scrollDown{
      margin-right: 1rem;
    }

    .hero__social {
      margin-left: 1rem;
    }
    .hero__scrollDown, .hero__social {
      right: 0;
      width: 20px;
      gap: 1rem;
      bottom: 20rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span className="hero__name">Michael Hills</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              Recent graduate with a Masters Degree in Computer Science.
              Currently working at Fitch Ratings as an Associate Software Engineer.
            </PText>
            <Button btnText="My Projects" btnLink="/projects" outline='no' />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
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
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}