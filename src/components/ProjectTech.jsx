import styled from 'styled-components';
import PText from './PText';
import PropTypes from 'prop-types';

const ProjectTechStyles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;

  .title {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
    margin-left: 2rem;
  }
  
  .items {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-left: 2rem;
    
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    white-space: nowrap;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    
    .items {
      position: initial;
      gap: 1rem;
      justify-content: center;
      margin-left: 0;
    }
  }
`;

export default function ProjectTech({
  title,
  items = ['HTML', 'CSS'],
}) {
  return (
    <ProjectTechStyles>
      {title && <h1 className="title">{title}</h1>}
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </ProjectTechStyles>
  );
}

ProjectTech.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };