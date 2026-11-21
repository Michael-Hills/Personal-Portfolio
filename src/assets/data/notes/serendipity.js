// Note: Serendipity AI case study. Drafted from the platform's own repository and checked against the CV.
// Its headline figures come from `currentWork` in profile.js (attached in notes/index.js).

export const SERENDIPITY_NOTE_PATH = '/notes/serendipity';

export default {
  slug: 'serendipity',
  title: 'Live transcription and analysis platform',
  org: 'Serendipity AI',
  intro:
    'The backend of a platform that transcribes live sessions, analyses them as they happen and produces reports across a whole event. It is used by the World Economic Forum.',
  spec: [
    { term: 'Role', value: 'Sole application backend engineer' },
    { term: 'Client', value: 'World Economic Forum' },
    { term: 'Period', value: 'Jul 2025 – Present' },
  ],
  stack: [
    'Python',
    'FastAPI',
    'Socket.IO',
    'Azure Speech',
    'Azure OpenAI',
    'PostgreSQL (pgvector)',
    'Redis',
    'BERTopic and HDBSCAN',
    'Kubernetes (AWS EKS)',
  ],

  overview: [
    'I was the sole application backend engineer, taking the platform from prototype to launch. A DevOps colleague built the infrastructure it deploys onto.',
    'The service takes three kinds of input: audio streamed from a browser, Zoom meetings, and recorded webcasts. It turns each into a timestamped, speaker-labelled transcript, extracts insights with supporting quotes, and builds reports across the whole event.',
  ],

  // Rendered as the data-flow diagram, top to bottom.
  flow: [
    {
      stage: 'Input',
      nodes: [
        { name: 'Browser audio', detail: '16 kHz PCM over Socket.IO' },
        { name: 'Zoom meetings', detail: 'Real-time media streams, started by webhook' },
        { name: 'Webcasts and uploads', detail: 'Scheduled and background jobs' },
      ],
    },
    {
      stage: 'API',
      note: 'FastAPI and python-socketio, several Kubernetes pods',
      nodes: [
        { name: 'Live transcription', detail: 'Azure Speech, speaker diarization' },
        { name: 'Recorded transcription', detail: 'ffmpeg, Azure batch transcription' },
      ],
    },
    {
      stage: 'State',
      nodes: [
        { name: 'PostgreSQL + pgvector', detail: 'Events, themes, sessions, transcripts, insights' },
        { name: 'Redis', detail: 'Cross-pod messaging, job status, finished reports' },
      ],
    },
    {
      stage: 'Analysis',
      note: 'Azure OpenAI',
      nodes: [
        { name: 'Insight extraction', detail: 'At most every 5 minutes, once enough new speech has built up' },
        { name: 'Theme clustering', detail: 'BERTopic bundles, then one LLM call organises them into themes' },
        { name: 'Whole-event reports', detail: 'Convergence, tensions and open questions across up to 500 transcripts' },
        { name: 'Evaluation harness', detail: 'Production code graded on fixed transcripts' },
      ],
    },
  ],

  architecture: [
    {
      term: 'Ingest',
      text: 'Browsers send microphone audio over Socket.IO, and each connection gets its own transcription session. Zoom meetings arrive through Zoom’s real-time media streams, started by a webhook that can land on any pod. Recorded webcasts are fetched by a scheduled job, converted with ffmpeg and sent to Azure’s batch transcription; uploaded audio and pasted text go through the same pipeline as background jobs.',
    },
    {
      term: 'Transcription',
      text: 'Live audio feeds the Azure Speech conversation transcriber, with speaker diarization and a phrase list for names and domain terms. The SDK calls back on its own threads, so results cross into asyncio through a queue drained by a single coroutine.',
    },
    {
      term: 'State',
      text: 'Transcript segments are written to PostgreSQL as they arrive, with sessions grouped into themes and themes into events. Redis carries Socket.IO messages between pods, so a viewer on one pod sees a session recorded on another, and holds background job status and finished reports.',
    },
    {
      term: 'Analysis',
      text: 'At most every five minutes, once enough new speech has built up, each live session’s recent transcript goes to Azure OpenAI, which extracts insights with supporting quotes. Report jobs surface areas of convergence, unresolved tensions and open questions no session answered, across up to 500 transcripts per event. An evaluation harness grades the extraction and summary stages, so changes to prompts or models are judged on evidence.',
    },
    {
      term: 'Runtime',
      text: 'Docker images deployed to Kubernetes on AWS EKS by Jenkins, with an autoscaled API and scheduled jobs for webcast fetching and abandoned-session clean-up. Errors go to Rollbar, traces to OpenTelemetry.',
    },
  ],

  challenges: [
    {
      title: 'One writer per live session across several pods',
      problem:
        'The API runs on several pods. A user can open a session in a second tab, reconnect to a different pod after a network drop, or have a Zoom webhook land on a pod that never saw the session. Without coordination, two captures could write into the same transcript.',
      approach:
        'I put a claim token on the session row and made every transcript, analysis and status write conditional on it, so a displaced writer’s writes match nothing and it learns from the refusal that it has lost the session. The holder sends a heartbeat every 20 seconds and the claim lapses after 60 seconds without one; a scheduled sweep pauses stale sessions and closes abandoned ones. Each live recording also re-checks the user’s access every 30 seconds, so revoking access stops their writes mid-recording.',
      result:
        'The database row is the single source of truth for who may write, whichever pod holds the connection. Integration tests cover the claim, takeover and release paths against a real PostgreSQL.',
    },
    {
      title: 'Ordered, recoverable real-time streaming',
      problem:
        'The speech SDK calls back on native threads while the service is asyncio, and transcript segments are appended in order, so concurrent writes could commit out of order. Connections also drop, both between the browser and the server and between the server and Azure.',
      approach:
        'Results cross into the event loop through one consumer coroutine, and each write is awaited before the next, so queue order is commit order. The browser keeps about 2.5 minutes of audio in a ring buffer and replays it after reconnecting. If Azure drops the connection, the recogniser is rebuilt once, and a second failure within a minute stops cleanly. Messages to other pods go through a bounded background queue that discards stale updates, so a slow Redis cannot hold up transcript writes.',
      result:
        'Transcripts stay in spoken order. A short drop between browser and server is covered by the replay buffer, and a single Azure failure is recovered automatically instead of ending transcription.',
    },
    {
      title: 'Whole-event reports in minutes, not weeks',
      problem:
        'Reporting across a whole event took weeks. An event can produce up to 500 transcripts, far more than one model call can read, and far too long a job to run inside a web request.',
      approach:
        'I built a cross-session reporting pipeline that surfaces areas of convergence, unresolved tensions and open questions no session answered. Reports run as background jobs: the API returns a job id straight away, progress is pushed to the user’s browser stage by stage over Socket.IO, and the finished report is stored for retrieval. Every quote comes from insight extraction, where the model picks transcript sentences by number and the quote is assembled from them, so it always matches what was said.',
      result: 'Whole-event reports are generated in minutes, across up to 500 transcripts per event.',
    },
    {
      title: 'Clustering from one theme to a whole event',
      problem:
        'A theme might hold a dozen insights and an event thousands. HDBSCAN needs a density that small inputs lack, and one model call cannot read thousands of insights.',
      approach:
        'Within a theme, a small set of insights is grouped in one LLM call, and a larger one is clustered with BERTopic and HDBSCAN. For the whole-event reports, clustering comes first and the model second: BERTopic splits the insights into labelled bundles, and one LLM call organises those labels into themes and sub-themes. Any bundle the model leaves out is placed under its nearest sub-theme by embedding similarity.',
      result:
        'The model reasons over bundle labels instead of thousands of raw insights, and every insight ends up in a theme.',
    },
    {
      title: 'Measuring LLM output quality',
      problem:
        'Prompt or model changes to summaries and insight extraction could quietly make the output worse, and LLM output varies between runs.',
      approach:
        'I built an evaluation harness that runs the production summary and extraction code on fixed public transcripts, then grades the results with deterministic checks and a separate judge model scoring over repeated runs, separating consistent failures from flaky ones.',
      result: 'Model and prompt choices for each pipeline stage are made from evaluation results rather than by inspection.',
    },
  ],

  results: [
    'In use by the World Economic Forum at events and internal meetings',
    'Live sessions run concurrently across pods, with one writer per session',
    'Whole-event reports generated in minutes as background jobs, rather than weeks',
    'Over 1,100 automated tests across unit and integration suites',
  ],
};
