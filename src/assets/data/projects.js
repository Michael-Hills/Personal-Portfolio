import Skiing from '../images/freestyle-skiing.jpg';
import GreenCtgImg from '../images/customer-support.jpg';
import Mythology from '../images/mythology.jpg';
import CoLab from '../images/colab.jpg';
import Backgammle from '../images/backgammle.png';
import BackgammleThumb from '../images/backgammle-thumb.jpg';
import { BACKGAMMLE_NOTE_PATH } from './notes/backgammle';

const projectData = [
  {
    id: 7,
    img: Backgammle,
    thumb: BackgammleThumb, // list thumbnail; `img` is the full-width image on the project page
    title: 'Backgammle',
    year: '2026',
    context: 'Personal',
    status: 'Live',
    short_category: ['Full-stack'],
    long_category: ['Full-stack', 'Game', 'Data Pipeline', 'LLM', 'Serverless'],
    short_desc: 'A daily backgammon puzzle: find the best move in three tries. Positions are chosen and graded by the gnubg engine, with explanations written by Claude from the engine’s figures.',
    long_desc: 'Backgammle is a daily backgammon puzzle in the spirit of Wordle. Each day there is one position and roll, and players have three tries to find the best move. A Python pipeline generates the puzzles: it plays games from the opening with the GNU Backgammon (gnubg) engine to find realistic positions, keeps only those whose best move is ahead by a set margin without being obvious, and grades every legal move by the equity it gives up (at 3-ply since November 2026). Claude then writes a short explanation of what the best move gains and gives up against the next best, working only from figures computed by the engine, and the pipeline rejects any explanation that quotes a number not found in those facts. The frontend is built with React and TypeScript on Cloudflare Pages, with Pages Functions and a D1 database alongside it, and a scheduled GitHub Actions workflow tests, generates and publishes the puzzles, keeping each one private until its date starts. Puzzles have been published daily since 30 October 2026.',
    tech_stack: ['Python', 'gnubg', 'Claude API', 'TypeScript', 'React', 'Cloudflare Pages'],
    liveLink: 'https://backgammle.com',
    note: BACKGAMMLE_NOTE_PATH,
  },
  {
    id: 2,
    img: Skiing,
    title: 'Freestyle Skiing Fall Detection',
    year: '2024',
    context: 'MSci dissertation',
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
    year: '2023',
    context: 'Third-year project',
    short_category: ['AI/ML'],
    long_category: ['AI/ML', 'NLP', 'Web Scraping', 'Clustering', 'Bayesian Optimisation'],
    short_desc: 'Scraped 2,988 pages from the Myths and Folklore Wiki and clustered them into 107 themes with SBERT, UMAP and HDBSCAN. Myths from geographically close cultures clustered together most often.',
    long_desc: 'Clusters the Myths and Folklore Wiki to find themes shared across cultures. I scraped 2,988 pages with Beautiful Soup, embedded the main text of each with SBERT, reduced it with UMAP and clustered it with HDBSCAN, tuning both with Bayesian optimisation against a cluster confidence score. This produced 107 clusters, with only 15% of myths placed below 5% certainty. Labelling each cluster by its most frequent words showed that gods (34 clusters) and creatures (19) were the most common themes. Cultures that are geographically close clustered together: one cluster of death gods was entirely Greek and Roman, while another held African and Asian gods. The main limitation was the Wiki itself, where Greek, Norse and European myths make up 42% of pages, so larger cultures tended to dominate the clusters they appeared in.',
    tech_stack: ['Python', 'SBERT', 'Beautiful Soup', 'UMAP', 'HDBSCAN', 'hyperopt', 'spaCy'],
    githubLink: 'https://github.com/Michael-Hills/Mythology-NLP-Clustering',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Mythology-NLP-Clustering/main/Final_Report.pdf'
  },
  {
    id: 4,
    img: GreenCtgImg,
    title: 'Customer Support Analysis',
    year: '2024',
    context: 'Coursework',
    short_category: ['AI/ML'],
    long_category: ['AI/ML','NLP','Clustering','Sentiment Analysis','Topic Modelling','Bayesian Optimisation'],
    short_desc: 'An NLP triage tool for customer support tweets: topic modelling sorts each brand’s messages into specific issues, and VADER sentiment analysis separates complaints from praise so the most urgent can be answered first.',
    long_desc: 'Combines topic modelling and sentiment analysis to triage customer support messages, using a public dataset of over 3 million tweets to more than 100 brands. I built the topic model step by step: SBERT embeddings, UMAP for dimensionality reduction and HDBSCAN for clustering, tuned with Bayesian optimisation, then class-based TF-IDF to label each cluster. For Apple, Amazon and Uber, the three brands with the most inquiries, it found 361, 288 and 189 topics, from iCloud backups and iMessage errors to being charged twice or leaving a phone in a car, with only about 1% of clustered tweets below 80% membership confidence. VADER then scores the tone of each tweet, so a complaint and a thank-you about the same order are treated differently. The main limitations were that about 30% of tweets fitted no topic, and that VADER misreads sarcasm.',
    tech_stack: ['Python', 'SBERT', 'UMAP', 'HDBSCAN', 'VADER', 'c-TF-IDF'],
    githubLink: 'https://github.com/Michael-Hills/Social-Networks-and-Text-Analysis',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Social-Networks-and-Text-Analysis/main/Report.pdf'
  },
  {
    id: 6,
    img: CoLab,
    title: 'CoLab Charity Internal System',
    year: '2024',
    context: 'Group project',
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
