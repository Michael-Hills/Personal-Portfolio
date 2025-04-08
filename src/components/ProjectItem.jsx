import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/customer-support.jpg';
import PropTypes from 'prop-types';

const ProjectItemStyles = styled.div`
    width: ${(props) => (props.width ? props.width : '90%')};
    margin: 0 auto;



  .projectItem__img {
    width: 100%;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }

  .projectItem__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }
  .projectItem__title {
    font-size: 1.8rem;
    flex: 1;
    margin-right: 1rem;
  }
  .projectItem__desc {
    font-size: 1.4rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }

  .projectItem__categories {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .projectItem__category {
    font-size: 1.2rem;
    background-color: var(--gray-2);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: var(--white);
    white-space: nowrap;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 250px;
    }
  }
`;

export default function ProjectItem({
  id,
  img = ProjectImg,
  title = 'Project Name',
  category = 'Web Dev',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  width = '90%',
}) {
  return (
    <ProjectItemStyles width={width}>
      
      <Link to={`/project/${id}`} className="projectItem__img">
        <img src={img} alt={title} />
      </Link>
      <div className="projectItem__info">
        <div className="projectItem__header">
          <Link to={`/project/${id}`}>
            <h3 className="projectItem__title">{title}</h3>
          </Link>
          <div className="projectItem__categories">
            {category.map((category, index) => (
              <span key={index} className="projectItem__category">
                {category}
              </span>
            ))}
          </div>
        </div>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}


ProjectItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
  desc: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

