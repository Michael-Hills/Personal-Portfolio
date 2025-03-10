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
            A freelance web designer and developer from Chittagong, Bangladesh.
            I always make websites that have unique designs and also has a good
            performance rate.
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
                title: 'About',
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
                title: 'Wokingham, England',
                path: 'https://www.google.com/maps/place/Wokingham/@51.4082329,-0.8345552,13z/data=!3m1!4b1!4m6!3m5!1s0x48768054d519454b:0xad1a36ae077fc0c2!8m2!3d51.410457!4d-0.833861!16zL20vMDFicDV0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D',
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
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                type: 'External',
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                type: 'External',
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
     
    </FooterStyle>
  );
}