import Skiing from '../images/freestyle-skiing.jpg';
import GreenCtgImg from '../images/customer-support.jpg';
import Mythology from '../images/mythology.jpg';
import Portfolio from '../images/hero_col.jpg';
import Colab from '../images/colab.jpg';
import resort_tracker from '../images/resort-tracker.jpg';


const projectData = [
  {
    id: 1,
    img: resort_tracker,
    title: 'Resort Tracker',
    short_category: ['Full-stack'],
    long_category: ['Full-stack', 'Web Development', 'Authentication','API','SQL',],
    short_desc: '(In Progress) A full-stack web app built with Spring Boot and React that lets users log visited ski resorts, view resort information, and upload holiday photos.',
    long_desc: 'This full-stack web application allows users to log the ski resorts they’ve visited, view resort details, and upload photos from their holidays. The backend is developed using Spring Boot, with JWT-based authentication ensuring secure user access and session handling. The frontend, built with React and styled using Tailwind CSS, offers a responsive and clean interface optimized for ease of use across devices. The platform focuses on providing a reliable, user-centered experience for organizing and visualizing personal skiing activity through structured data and photo uploads.',
    tech_stack: ['Java', 'Spring Boot', 'JavaScript','React', 'JWT'],
    githubLink: 'https://github.com/Michael-Hills/Resort-Tracker'
  },
  {
    id:2,
    img: Skiing,
    title: 'Freestyle Skiing Fall Detection',
    short_category: ['AI/ML'],
    long_category: ['AI/ML', 'Deep Learning', 'Time Series','Computer Vision', 'Classification'],
    short_desc: 'A deep learning-based system to detect falls in freestyle skiing using sensor data and neural networks to distinguish between intentional tricks and actual falls.',
    long_desc: 'This project developed an advanced fall detection system tailored to freestyle skiing, where traditional methods often misclassify high-impact tricks as accidents. To address this, it explored deep learning techniques using both image-based models, leveraging Gramian Angular Field visualizations, and time-series models applied to raw sensor data. A bespoke dataset was collected via smartphone-based accelerometers and gyroscopes, supported by a public dataset for transfer learning. Through extensive preprocessing and model evaluation, the system demonstrated strong potential for improving skier safety through faster and more reliable fall detection.',
    tech_stack: ['Python', 'PyTorch','TensorFlow'],
    githubLink: 'https://github.com/Michael-Hills/Freestyle-Skiing-Fall-Detection',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Freestyle-Skiing-Fall-Detection/main/Report.pdf'
  },
  {
    id: 3,
    img: Mythology,
    title: 'Mythology Semantic Clustering',
    short_category: ['AI/ML'],
    long_category: ['AI/ML','NLP', 'Sentiment Analysis', 'Web Scraping','Clustering', 'Bayesian Optimization'],
    short_desc: 'A machine learning pipeline using web scraping, natural language processing and clustering to uncover cultural patterns and shared themes in global mythology and folklore.',
    long_desc: 'This project applied machine learning and natural language processing to explore cultural patterns in mythology. Using data scraped from the Myths and Folklore Wiki, it analysed over 2,900 myth entries with techniques including word and sentence embeddings, dimensionality reduction (UMAP), clustering (HDBSCAN) and bayesian optimisation. The aim was to uncover common themes—such as gods, creatures, and spirits—and compare their cultural origins. The resulting clusters revealed patterns tied to geographical proximity and shared cultural influences, demonstrating the power of machine learning to reveal deep, cross-cultural mythological connections. The approach also addressed data imbalance and explored future applications in broader cultural analytics.',
    tech_stack: ['Python', 'BERT', 'Hugging Face','Beautiful Soup','UMAP', 'HDBSCAN'],
    githubLink: 'https://github.com/Michael-Hills/Mythology-NLP-Clustering',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Mythology-NLP-Clustering/main/Final_Report.pdf'
  },
  {
    id: 4,
    img: GreenCtgImg,
    title: 'Customer Support Analysis',
    short_category: ['AI/ML'],
    long_category: ['AI/ML','NLP','Clustering','Sentiment Analysis','Topic Modelling','Bayesian Optimization'],
    short_desc: 'A natural language processing system that combines topic modelling and sentiment analysis to automatically categorise and prioritise customer support messages from major brands.',
    long_desc: 'This project developed a system that uses natural language processing and machine learning to analyse customer support messages on Twitter. By combining topic modelling and sentiment analysis (using VADER), the system categorises customer inquiries by subject while also evaluating emotional tone, enabling companies to prioritise responses and better understand customer needs. With advanced techniques like SBERT embeddings, dimensionality reduction, and Bayesian optimization, the system delivers accurate, well-labelled clusters of tweets, offering insights into common issues and public sentiment across major brands like Apple, Amazon, and Uber.',
    tech_stack: ['Python', 'BERT', 'Hugging Face','VADER','UMAP', 'HDBSCAN'],
    githubLink: 'https://github.com/Michael-Hills/Social-Networks-and-Text-Analysis',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Social-Networks-and-Text-Analysis/main/Report.pdf'
  },
  {
    id: 5,
    img: Portfolio,
    title: 'Personal Portfolio',
    short_category: ['Frontend'],
    long_category: ['Frontend', 'UI/UX', 'Web Development'],
    short_desc: 'A personal portfolio website built using React, HTML, and CSS to showcase projects, skills, and experience through a clean, responsive, and interactive design.',
    long_desc: 'This project involved designing and developing a personal portfolio website using React, HTML, and plain CSS, without relying on any pre-made component libraries. The site was built to showcase my projects, skills, and experience in a clean and professional format, with a strong emphasis on performance and accessibility. The design is fully responsive, ensuring a seamless experience across devices of all screen sizes. A custom-built light/dark mode toggle allows users to switch themes dynamically. All styling was done using vanilla CSS, giving me full control over the visual identity and ensuring a consistent, cohesive look throughout the site.',
    tech_stack: ['JavaScript', 'React', 'HTML', 'CSS'],
    githubLink: 'https://github.com/Michael-Hills/Personal-Portfolio',
  },
  {
    id: 6,
    img: Colab,
    title: 'Colab Charity Internal System',
    short_category: ['Backend'],
    long_category: ['Backend', 'Web Development', 'API' ,'SQL'],
    short_desc: 'A Django-based web platform to replace CoLab’s internal spreadsheet system, streamlining client tracking, workshop scheduling, and data analysis for more personalized support',
    long_desc: 'This group project developed a web-based platform for CoLab, a wellbeing charity in Exeter, to replace their spreadsheet-based system with a Django-powered application as a proof of concept. As the lead backend engineer, I played a key role in streamlining client profile tracking, workshop scheduling, and data analysis. The platform enhances internal operations and enables more effective, personalized support for individuals with complex needs. Built using Django, HTML, and CSS, the system offers a scalable and maintainable solution tailored to the charity\'s unique requirements.',
    tech_stack: ['Python', 'Django', 'SQL','HTML', 'CSS'],
    githubLink: 'https://github.com/Michael-Hills/Group-Software-Project-4th'
  }
];

export default projectData;
