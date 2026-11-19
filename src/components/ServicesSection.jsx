import { MdCode} from 'react-icons/md';
import { CiServer } from "react-icons/ci";
import { LuBrainCog } from "react-icons/lu";
import { TbDatabaseSearch } from "react-icons/tb";
import styled from 'styled-components';
import Carousel from './Carousel';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 5rem 0;
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What are" heading="My Skills:" />
        <Carousel>
          <ServicesSectionItem
            icon={<CiServer />}
            title="Backend"
            desc="Build and maintain backend services and APIs that support seamless frontend integration
            and efficient data handling."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Frontend"
            desc="Build responsive, user-friendly interfaces in React, integrated seamlessly with backend APIs."
          />
          <ServicesSectionItem
            icon={<LuBrainCog />}
            title="Machine Learning"
            desc="Develop machine learning pipelines with a focus on natural language processing, time series analysis, 
            and computer vision."
          />
          <ServicesSectionItem
            icon={<TbDatabaseSearch/>}
            title="Data Engineering"
            desc="Develop ETL scripts to efficiently process and transform data,
            and create detailed charts and dashboards to support data analysis and decision-making."
          />
         
        </Carousel>
      </div>
    </ServicesItemsStyles>
  );
}
