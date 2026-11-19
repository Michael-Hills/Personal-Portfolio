import { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';
import Footer from '../components/Footer';
import PText from '../components/PText';

const categories = ['All', ...new Set(ProjectsInfo.flatMap((project) => project.short_category))];

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 7rem;
    margin-top: 5rem;
  }

  .projects__filters {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: ${props => props.theme.text}; 
    background: ${props => props.theme.deepDark}; 
    border-radius: 6px;
    outline: none;
    border: none;

    &::placeholder {
      color: ${props => props.theme.gray1}; 
      opacity: 0.7; 
    }
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }

  .projects__filters label {
    font-family: 'Montserrat SemiBold';
    font-size: 2rem;
    font-weight: bold;
    white-space: nowrap;
  }
  .projects__category {
    position: relative;
    width: 200px;
  }
  .projects__category select {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: ${props => props.theme.gray1};
    background: ${props => props.theme.deepDark};
    border-radius: 6px;
    outline: none;
    border: none;
    cursor: pointer;

  }
  .projects__empty {
    margin-top: 5rem;
    .para {
      margin: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .projects__filters {
      flex-direction: column;
      align-items: stretch;
    }
    .projects__searchBar,
    .projects__category,
    .projects__searchBar input,
    .projects__category select {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const query = searchText.trim().toLowerCase();
  const projectsData = ProjectsInfo.filter(
    (item) =>
      (!query || item.title.toLowerCase().includes(query)) &&
      (selectedCategory === 'All' || item.short_category.includes(selectedCategory))
  );

  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects:"
            subheading="some of my recent"
          />
          <div className="projects__filters">
            <label htmlFor="projectSearch">Search:</label>
            <div className="projects__searchBar">
              <input
                id="projectSearch"
                type="search"
                name="projectSearch"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" aria-hidden="true" />
            </div>
            <label htmlFor="categorySelect">Category:</label>
            <div className="projects__category">
              <select
                id="categorySelect"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {projectsData.length === 0 && (
            <div className="projects__empty">
              <PText>No projects match your search.</PText>
            </div>
          )}
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.short_category}
                desc={item.short_desc}
                img={item.img}
                width="100%"
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
      <Footer/>
    </>
  );
}