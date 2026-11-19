import Skiing from '../images/freestyle-skiing.jpg';
import GreenCtgImg from '../images/customer-support.jpg';
import Mythology from '../images/mythology.jpg';
import Colab from '../images/colab.jpg';
import Backgammle from '../images/backgammle.png';
import BackgammleThumb from '../images/backgammle-thumb.jpg';


const projectData = [
  {
    id: 7,
    img: Backgammle,
    thumb: BackgammleThumb, // list thumbnail; `img` is the full-width image on the project page
    title: 'Backgammle',
    status: 'Live',
    short_category: ['Full-stack'],
    long_category: ['Full-stack', 'Game', 'Data Pipeline', 'LLM', 'Serverless'],
    short_desc: 'A daily backgammon puzzle: find the best move in three tries. Positions are chosen and graded by the gnubg engine, with explanations written by Claude.',
    long_desc: 'Backgammle is a daily backgammon puzzle in the spirit of Wordle. Each day there is one position and roll, and players have three tries to find the best move. A Python pipeline generates the puzzles: it plays games from the opening with the GNU Backgammon (gnubg) engine to find realistic positions, keeps only those with a clear best move, and analyses every legal move at 3-ply to grade it. Claude then writes a short explanation of why the best move is best, working only from figures computed by the engine, and the pipeline rejects any explanation that quotes a number not found in those facts. The frontend is built with React and TypeScript and hosted on Cloudflare Pages, and a scheduled GitHub Actions workflow tests, generates and publishes a new puzzle every day.',
    tech_stack: ['Python', 'gnubg', 'Claude API', 'TypeScript', 'React', 'Cloudflare Pages'],
    liveLink: 'https://backgammle.com',
  },
  {
    id:2,
    img: Skiing,
    title: 'Freestyle Skiing Fall Detection',
    short_category: ['AI/ML'],
    long_category: ['AI/ML', 'Deep Learning', 'Time Series','Computer Vision', 'Classification'],
    short_desc: 'Collected a labelled dataset of smartphone IMU readings from skiers, then compared CNNs on Gramian Angular Field images of the signal against LSTM and CNN-LSTM networks on the raw time series.',
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
    long_desc: 'This project applied machine learning and natural language processing to explore cultural patterns in mythology. Using data scraped from the Myths and Folklore Wiki, it analysed over 2,900 myth entries with techniques including word and sentence embeddings, dimensionality reduction (UMAP), clustering (HDBSCAN) and bayesian optimisation. The aim was to uncover common themes, such as gods, creatures and spirits, and compare their cultural origins. The resulting clusters revealed patterns tied to geographical proximity and shared cultural influences, demonstrating the power of machine learning to reveal deep, cross-cultural mythological connections. The approach also addressed data imbalance and explored future applications in broader cultural analytics.',
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
    short_desc: 'An NLP triage tool combining unsupervised topic modelling with VADER sentiment analysis to cluster incoming tickets and auto-prioritise urgent responses.',
    long_desc: 'This project developed a system that uses natural language processing and machine learning to analyse customer support messages on Twitter. By combining topic modelling and sentiment analysis (using VADER), the system categorises customer inquiries by subject while also evaluating emotional tone, enabling companies to prioritise responses and better understand customer needs. With advanced techniques like SBERT embeddings, dimensionality reduction, and Bayesian optimization, the system delivers accurate, well-labelled clusters of tweets, offering insights into common issues and public sentiment across major brands like Apple, Amazon, and Uber.',
    tech_stack: ['Python', 'BERT', 'Hugging Face','VADER','UMAP', 'HDBSCAN'],
    githubLink: 'https://github.com/Michael-Hills/Social-Networks-and-Text-Analysis',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Social-Networks-and-Text-Analysis/main/Report.pdf'
  },
  {
    id: 6,
    img: Colab,
    title: 'Colab Charity Internal System',
    short_category: ['Backend'],
    long_category: ['Backend', 'Web Development', 'API' ,'SQL'],
    short_desc: 'A Django-based web platform to replace CoLab’s internal spreadsheet system, streamlining client tracking, workshop scheduling, and data analysis for more personalized support.',
    long_desc: 'This group project developed a web-based platform for CoLab, a wellbeing charity in Exeter, to replace their spreadsheet-based system with a Django-powered application as a proof of concept. As the lead backend engineer, I played a key role in streamlining client profile tracking, workshop scheduling, and data analysis. The platform enhances internal operations and enables more effective, personalized support for individuals with complex needs. Built using Django, HTML, and CSS, the system offers a scalable and maintainable solution tailored to the charity\'s unique requirements.',
    tech_stack: ['Python', 'Django', 'SQL','HTML', 'CSS'],
    githubLink: 'https://github.com/Michael-Hills/Group-Software-Project-4th'
  }
];

export default projectData;

// Display number ("01", "02"…) follows list order; `id` stays fixed so /project/:id URLs don't change.
export const projectNumber = (project) => String(projectData.indexOf(project) + 1).padStart(2, '0');
