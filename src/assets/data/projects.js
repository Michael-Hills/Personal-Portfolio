import Skiing from '../images/freestyle-skiing.jpg';
import GreenCtgImg from '../images/customer-support.jpg';
import Mythology from '../images/mythology.jpg';
import CoLab from '../images/colab.jpg';
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
    long_desc: 'Backgammle is a daily backgammon puzzle in the spirit of Wordle. Each day there is one position and roll, and players have three tries to find the best move. A Python pipeline generates the puzzles: it plays games from the opening with the GNU Backgammon (gnubg) engine to find realistic positions, keeps only those with a clear best move, and analyses every legal move at 3-ply to grade it. Claude then writes a short explanation of why the best move is best, working only from figures computed by the engine, and the pipeline rejects any explanation that quotes a number not found in those facts. The frontend is built with React and TypeScript and hosted on Cloudflare Pages, and a scheduled GitHub Actions workflow tests, generates and publishes a new puzzle every day. Puzzles have been published daily since 30 October 2026.',
    tech_stack: ['Python', 'gnubg', 'Claude API', 'TypeScript', 'React', 'Cloudflare Pages'],
    liveLink: 'https://backgammle.com',
  },
  {
    id: 2,
    img: Skiing,
    title: 'Freestyle Skiing Fall Detection',
    short_category: ['AI/ML'],
    long_category: ['AI/ML', 'Deep Learning', 'Time Series','Computer Vision', 'Classification'],
    short_desc: 'Compared CNNs (ResNet50, AlexNet) on Gramian Angular Field images of smartphone IMU signals against LSTM and CNN-LSTM networks on the raw time series. ResNet50 reached 92% accuracy.',
    long_desc: 'Fall detection for freestyle skiing, where general-purpose methods tend to mistake high-impact tricks for falls. I collected a labelled dataset of accelerometer and gyroscope readings from skiers\' smartphones and used a public dataset for transfer learning. Two approaches were compared: CNNs (ResNet50 and AlexNet) on Gramian Angular Field images of the signal, and LSTM and CNN-LSTM networks on the raw time series. The best image-based model, ResNet50, reached 92% accuracy (F1 78%, recall 81%, precision 76%). The best signal-based model, the CNN-LSTM, reached 91% accuracy (F1 75%).',
    tech_stack: ['Python', 'PyTorch','TensorFlow'],
    githubLink: 'https://github.com/Michael-Hills/Freestyle-Skiing-Fall-Detection',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Freestyle-Skiing-Fall-Detection/main/Report.pdf'
  },
  {
    id: 3,
    img: Mythology,
    title: 'Mythology Semantic Clustering',
    short_category: ['AI/ML'],
    long_category: ['AI/ML','NLP', 'Sentiment Analysis', 'Web Scraping','Clustering', 'Bayesian Optimisation'],
    short_desc: 'Scraped 2,900+ entries from the Myths and Folklore Wiki and clustered them with sentence embeddings, UMAP and HDBSCAN to find themes shared across cultures.',
    long_desc: 'Clusters more than 2,900 myth entries scraped from the Myths and Folklore Wiki to find shared themes, such as gods, creatures and spirits, and compare their cultural origins. The pipeline uses word and sentence embeddings, UMAP for dimensionality reduction, HDBSCAN for clustering and Bayesian optimisation, and addresses imbalance in the data. The resulting clusters grouped myths from geographically close regions and cultures with shared influences.',
    tech_stack: ['Python', 'BERT', 'Hugging Face','Beautiful Soup','UMAP', 'HDBSCAN'],
    githubLink: 'https://github.com/Michael-Hills/Mythology-NLP-Clustering',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Mythology-NLP-Clustering/main/Final_Report.pdf'
  },
  {
    id: 4,
    img: GreenCtgImg,
    title: 'Customer Support Analysis',
    short_category: ['AI/ML'],
    long_category: ['AI/ML','NLP','Clustering','Sentiment Analysis','Topic Modelling','Bayesian Optimisation'],
    short_desc: 'An NLP triage tool for customer support tweets: topic modelling groups them by issue, and VADER sentiment analysis flags the most urgent so they can be answered first.',
    long_desc: 'Analyses customer support messages sent to brands such as Apple, Amazon and Uber on Twitter. Tweets are embedded with SBERT, reduced with UMAP and clustered with HDBSCAN to group them by topic; the pipeline also uses Bayesian optimisation. VADER sentiment analysis scores the tone of each tweet, so the most negative messages can be prioritised for a response, and the topics show the most common issues across the brands.',
    tech_stack: ['Python', 'BERT', 'Hugging Face','VADER','UMAP', 'HDBSCAN'],
    githubLink: 'https://github.com/Michael-Hills/Social-Networks-and-Text-Analysis',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Social-Networks-and-Text-Analysis/main/Report.pdf'
  },
  {
    id: 6,
    img: CoLab,
    title: 'CoLab Charity Internal System',
    short_category: ['Backend'],
    long_category: ['Backend', 'Web Development', 'API' ,'SQL'],
    short_desc: 'A Django web platform built to replace CoLab’s spreadsheet system, covering client tracking, workshop scheduling and data analysis.',
    long_desc: 'A group project to replace the spreadsheet-based system used by CoLab, a wellbeing charity in Exeter, with a Django web application, built as a proof of concept. As lead backend engineer, I worked on client profile tracking, workshop scheduling and data analysis, so staff can give more personalised support to people with complex needs. Built with Django, HTML and CSS.',
    tech_stack: ['Python', 'Django', 'SQL','HTML', 'CSS'],
    githubLink: 'https://github.com/Michael-Hills/Group-Software-Project-4th'
  }
];

export default projectData;

// Display number ("01", "02"…) follows list order; `id` stays fixed so /project/:id URLs don't change.
export const projectNumber = (project) => String(projectData.indexOf(project) + 1).padStart(2, '0');
