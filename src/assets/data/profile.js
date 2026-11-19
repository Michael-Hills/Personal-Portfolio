// Content mirrors the CV (public/Michael-Hills-CV.pdf). Keep the two in sync.

export const summary =
  'Backend engineer with two years’ experience building and running systems in production.';

export const currentWork = {
  org: 'Serendipity AI',
  role: 'Software Engineer',
  headline: 'Live transcription and analysis platform used by the World Economic Forum',
  body: 'Sole backend engineer, taking the platform from prototype to launch. It transcribes live sessions at events and internal meetings and delivers summaries, key themes and insights, built as part of a wider agentic platform.',
  stats: [
    { value: '15+', label: 'Concurrent live sessions' },
    { value: '3,000+', label: 'Sessions analysed to date' },
    { value: '300', label: 'Transcripts per event, up to' },
    { value: 'Mins', label: 'Whole-event reporting, down from weeks' },
  ],
  stack: ['Python', 'BERTopic', 'HDBSCAN', 'AWS', 'Kubernetes', 'Redis', 'Azure'],
};

export const capabilities = [
  {
    code: 'BE',
    title: 'Backend',
    desc: 'Real-time services and REST APIs in async Python, backed by PostgreSQL and Redis.',
    tools: ['FastAPI', 'Django', 'PostgreSQL', 'Redis', 'WebSockets', 'async Python', 'REST API design'],
  },
  {
    code: 'ML',
    title: 'ML and data',
    desc: 'NLP and analysis pipelines: topic modelling, clustering, sentiment analysis, and LLM pipelines and evaluation.',
    tools: ['PyTorch', 'TensorFlow', 'BERTopic', 'HDBSCAN'],
  },
  {
    code: 'IN',
    title: 'Infrastructure',
    desc: 'Running services in production with containers, CI/CD and monitoring.',
    tools: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana', 'Git'],
  },
  {
    code: 'LG',
    title: 'Languages',
    tools: ['Python', 'SQL', 'JavaScript', 'Java'],
  },
];

export const experience = [
  {
    period: 'Jul 2025 – Present',
    role: 'Software Engineer',
    org: 'Serendipity AI',
    groups: [
      {
        points: [
          'Sole backend engineer on a live transcription and analysis platform used by the World Economic Forum at events and internal meetings, transcribing live sessions and delivering summaries, key themes and insights, built as part of a wider agentic platform',
          'Set the architecture and technical direction of the service, working directly with the client to scope each event',
          'Designed and built the live analysis layer, supporting 15+ concurrent sessions: speaker recognition from voice profiles, topic and insight extraction, and clustering of thousands of micro-topics into readable themes using BERTopic and HDBSCAN',
          'Reduced whole-event reporting from weeks to minutes with a cross-session pipeline that surfaces areas of convergence, unresolved tensions and gaps in coverage, across up to 300 transcripts per event and 3,000+ sessions to date',
          'Integrated Zoom’s real-time media streams into the transcription pipeline, streaming live meeting audio through the same analysis path as in-app capture, with OAuth token lifecycle, credential encryption and session recovery',
          'Run the service on AWS using Docker and Kubernetes, Redis for state and caching, Jenkins for CI/CD, and Prometheus and Grafana for monitoring, with Azure hosting the underlying speech and language models',
        ],
      },
    ],
  },
  {
    period: 'Sep 2024 – Jul 2025',
    role: 'Associate Software Engineer',
    org: 'Fitch Group',
    groups: [
      {
        points: [
          'Contributed to a full-stack application (FastAPI, PostgreSQL, React) replacing Excel-based workflows for 100+ BMI country risk and industry research analysts, working across API design, frontend and data transformation',
          'Created a telemetry and ROI tracker used by senior leadership to monitor usage, cost and adoption of Fitch Genie, the GenAI assistant on Fitch Ratings PRO, integrating Qlik ETL scripts, AngularJS and Qlik APIs',
          'Developed a product recommendation system using semantic text clustering and market basket analysis to drive upsell from behavioural data',
        ],
      },
    ],
  },
];

export const education = [
  {
    period: '2020 – 2024',
    role: 'MSci Computer Science, First Class',
    org: 'University of Exeter',
    groups: [{ points: ['Two Dean’s Commendations for Exceptional Performance (Stages 1 and 2)'] }],
  },
  {
    period: '2013 – 2020',
    role: 'A Levels: Maths (A*), Further Maths (A*), Physics (A*), Geology (A*)',
    org: 'Reading Blue Coat School',
    groups: [],
  },
];

export const leadership = [
  {
    period: '2021 – 2023',
    role: 'Vice President (Trips) and Social Secretary',
    org: 'Snowsports Exeter',
    groups: [
      {
        points: [
          'Led all UK and European trips for 1,500+ members, managing a £150k+ events budget and directing transport, accommodation, schedules and partner negotiations for around 1,000 people on European trips',
        ],
      },
    ],
  },
];

export const interests = ['Alpine & freestyle skiing', 'Climbing'];
