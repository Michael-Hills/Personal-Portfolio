import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Michael Hills</h1>
          <PText>
            Graduated with a First Class Masters Degree in Computer Science,
            currently working at Fitch Ratings as an Associate Software Engineer.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                type: 'Link',
                title: 'Home',
                path: '/'
                
              },
              {
                type: 'Link',
                title: 'About Me',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                type: 'External',
                title: '+447760119930',
                path: 'tel:+447760119930',
              },
              {
                type: 'External',
                title: 'mjhills1@btinternet.com',
                path: 'mailto:mjhills1@btinternet.com',
              },
              {
                type: 'External',
                title: 'London, England',
                path: 'https://www.google.com/maps/place/London/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D'
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Socials"
            links={[
              {
                type: 'External',
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/michaeljhills1/',
              },
              {
                type: 'External',
                title: 'GitHub',
                path: 'https://github.com/Michael-Hills',
              },
             
            ]}
          />
        </div>
      </div>
     
    </FooterStyle>
  );
}