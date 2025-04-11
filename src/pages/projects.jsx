import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';
import Footer from '../components/Footer';

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
  }

  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }

  .projects__category {
    position: relative;
    width: 200px;
  }
  .projects__category select {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: ${props => props.theme.grey1};
    background: ${props => props.theme.deepDark};
    border-radius: 6px;
    outline: none;
    border: none;
    cursor: pointer;

  }
  @media only screen and (max-width: 768px) {
    .projects__filters {
      flex-direction: column;
      align-items: stretch;
    }
    .projects__searchBar,
    .projects__category,
    .projects__searchBar form,
    .projects__searchBar input,
    .projects__category select {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);

  const categories = ['All', ...new Set(ProjectsInfo.flatMap(project => project.short_category))];

  useEffect(() => {
    filterProjects();
  }, [searchText, selectedCategory]);

  const filterProjects = () => {
    let filtered = ProjectsInfo;

    if (searchText) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((item) =>
        item.short_category.includes(selectedCategory)
      );
    }

    setProjectsData(filtered);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  

  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects:"
            subheading="some of my recent"
          />
          <div className="projects__filters">
            <h1>Search: </h1>
            <div className="projects__searchBar">
              <form>
                <input
                  id = "projectSearch"
                  type="text"
                  name="projectSearch"
                  value={searchText}
                  onChange={handleChange}
                  placeholder="Project Name"
                />
                <MdSearch className="searchIcon" />
              </form>
            </div>
            <h1>Category: </h1>
            <div className="projects__category">
              <select
                id="categorySelect"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                id = {item.id}
                title={item.title}
                category={item.short_category}
                desc={item.short_desc}
                img={item.img}
                width = "100%"
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
      <Footer/>
    </>
  );
}