import Skiing from '../images/freestyle-skiing.jpg';
import GreenCtgImg from '../images/customer-support.jpg';
import Mythology from '../images/mythology.jpg';
import Portfolio from '../images/hero_col.jpg';
import Colab from '../images/colab.jpg';


const projectData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    img: Portfolio,
    title: 'Personal Portfolio',
    short_category: ['Frontend'],
    long_category: ['Frontend', 'UI/UX', 'Web Development'],
    short_desc: 'I develop mobile application. I create mobile app with eye catching ui.',
    long_desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna tempor pulvinar vivamus fringilla lacus nec metus. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Purus est efficitur laoreet mauris pharetra vestibulum fusce. Ligula congue sollicitudin erat viverra ac tincidunt nam. Cras eleifend turpis fames primis vulputate ornare sagittis. Cubilia curae hac habitasse platea dictumst lorem ipsum. Tempus leo eu aenean sed diam urna tempor. Taciti sociosqu ad litora torquent per conubia nostra. Maximus eget fermentum odio phasellus non purus est. Finibus facilisis dapibus etiam interdum tortor ligula congue. Nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Cursus mi pretium tellus duis convallis tempus leo. Ut hendrerit semper vel class aptent taciti sociosqu. Eros lobortis nulla molestie mattis scelerisque maximus eget. Ante condimentum neque at luctus nibh finibus facilisis. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Vitae pellentesque sem placerat in id cursus mi. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Montes nascetur ridiculus mus donec rhoncus eros lobortis. Suspendisse aliquet nisi sodales consequat magna ante condimentum. Euismod quam justo lectus commodo augue arcu dignissim. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Nec metus bibendum egestas iaculis massa nisl malesuada. Natoque penatibus et magnis dis parturient montes nascetur. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Tincidunt nam porta elementum a enim euismod quam.',
    tech_stack: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 5,
    img: Colab,
    title: 'Colab Charity Internal System',
    short_category: ['Backend'],
    long_category: ['Backend', 'Web Development', 'API' ,'SQL'],
    short_desc: 'A Django-based web platform to replace CoLab’s internal spreadsheet system, streamlining client tracking, workshop scheduling, and data analysis for more personalized support',
    long_desc: 'This group project developed a web-based platform for CoLab, a wellbeing charity in Exeter, to replace their spreadsheet-based system with a Django-powered application as a proof of concept. As the lead backend engineer, I played a key role in streamlining client profile tracking, workshop scheduling, and data analysis. The platform enhances internal operations and enables more effective, personalized support for individuals with complex needs. Built using Django, HTML, and CSS, the system offers a scalable and maintainable solution tailored to the charity\'s unique requirements.',
    tech_stack: ['Python', 'Django', 'SQL','HTML', 'CSS'],
    githubLink: 'https://github.com/Michael-Hills/Group-Software-Project-4th'
  },
  // Add more project items as needed
];

export default projectData;
