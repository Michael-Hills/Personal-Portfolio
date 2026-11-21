// Note: Backgammle puzzle pipeline. Drafted from the Backgammon-Wordle repository and its development history.
// Figures are as of 21 November 2026.

export const BACKGAMMLE_NOTE_PATH = '/notes/backgammle';

export default {
  slug: 'backgammle',
  title: 'Backgammle puzzle pipeline',
  org: 'Personal project',
  intro: 'A daily backgammon puzzle: one position, three tries to find the best move. This note covers the pipeline that picks, grades and explains each puzzle, and how it is published and served.',
  spec: [
    { term: 'Role', value: 'Design, development and operations' },
    { term: 'Live', value: 'backgammle.com', href: 'https://backgammle.com' },
    { term: 'Period', value: 'Oct 2026 – Present' },
  ],
  stats: [
    { value: '23', label: 'Puzzles published, 30 Oct to 21 Nov 2026' },
    { value: '407', label: 'Legal moves analysed and graded across them' },
    { value: '192', label: 'Automated tests (138 frontend, 54 pipeline)' },
    { value: '4', label: 'Scheduled publish runs a day' },
  ],
  stack: [
    'Python',
    'GNU Backgammon (gnubg)',
    'Claude API',
    'React',
    'TypeScript',
    'Cloudflare Pages',
    'Cloudflare D1',
    'GitHub Actions',
  ],
  overview: [
    'Each day’s puzzle is a position from a game played out from the opening by GNU Backgammon. The pipeline keeps a position only if its best move is ahead of the next by a set margin without being obvious, ranks every legal move, and grades each one by how much equity it gives up. Claude then writes a short explanation from figures the engine computed, and the pipeline rejects any explanation that quotes a number those figures don’t contain.',
    'A scheduled GitHub Actions workflow runs the tests, generates the puzzles that are due, commits them and deploys the site to Cloudflare Pages. The browser checks answers locally against the puzzle file, so the site needs no game server. Puzzles are generated about two days ahead, but a Pages Function keeps each one private until its date has started somewhere in the world.',
  ],
  flow: [
    {
      stage: 'Generate',
      note: 'Python, run by GitHub Actions',
      nodes: [
        { name: 'Picker', detail: 'Plays games from the opening, seeded by date' },
        { name: 'Analysis', detail: 'gnubg ranks every legal move at 3-ply' },
        { name: 'Grading', detail: 'Best, close, error or blunder by equity lost' },
      ],
    },
    {
      stage: 'Explain',
      nodes: [
        { name: 'Facts', detail: 'Shots, blots, chances and points for two moves' },
        { name: 'Claude', detail: 'Headline and text from the facts only' },
        { name: 'Checks', detail: 'Numbers, wording, length and notation' },
      ],
    },
    {
      stage: 'Publish',
      nodes: [
        { name: 'Tests', detail: 'Pipeline and frontend tests gate each run' },
        { name: 'Commit', detail: 'One JSON file per date in the repo' },
        { name: 'Deploy', detail: 'Static site plus a Function for future dates' },
      ],
    },
    {
      stage: 'Play',
      note: 'In the browser',
      nodes: [
        { name: 'Answer check', detail: 'Replays the move and matches the result' },
        { name: 'Storage', detail: 'Tries and statistics kept on the device' },
        { name: 'Tally', detail: 'Finished games counted in D1, no IDs' },
      ],
    },
  ],
  architecture: [
    { term: 'Picker and analysis', text: 'The picker plays games from the opening, choosing at random among moves within 0.05 equity of the best at 0-ply, and stops 4 to 40 moves in at a position where the two sides are still in contact. The date seeds the random choices, so a rerun gives the same puzzle. gnubg then evaluates every legal move, cubeful for a money game, with its move filters widened so none is pruned early.' },
    { term: 'Facts and explanations', text: 'For the best move and the next best, the pipeline computes the position after each: win and gammon chances, blots and the opponent’s rolls that hit them, points made, given up or slotted, builders, the longest prime and the pip count. Claude Opus 5.5 receives only these facts, as JSON with equity removed, and returns a headline and text through structured output.' },
    { term: 'Publishing', text: 'One workflow generates and deploys, because pushes made with the workflow’s own token don’t trigger other workflows. Each puzzle is a JSON file named by date. Files carry a revision number, so a replaced puzzle resets games saved against the old one. A push to the qa branch deploys a separate QA site that uses production’s puzzles.' },
    { term: 'Frontend', text: 'React and TypeScript, built with Vite. The browser loads the puzzle for the player’s local date, replays each move the player makes, and matches the resulting position against the graded moves. Tries, streaks and statistics are kept in localStorage. Sharing produces a numbered result with coloured squares, in the style of other daily puzzles.' },
    { term: 'Pages Functions', text: 'Three small Functions run alongside the static site: one counts finished games in a D1 table (date, number of tries, solved or not), one returns that day’s totals for the result screen, and one serves puzzles that were deployed before their date had started.' },
  ],
  challenges: [
    {
      title: 'Positions with one best move that isn’t obvious',
      problem: 'A puzzle needs a best move that is genuinely ahead, but if every other move is a blunder the answer is obvious and the grades can’t show a player getting closer. Some positions passed both tests yet couldn’t be explained honestly: the next best move had the same or better chances, and the best move only came out ahead once the doubling cube was counted.',
      approach: 'The picker requires 4 to 60 legal moves, a best move no further than 0.9 equity from even, a lead of at least 0.01 equity over the next best, and a next best move that isn’t a blunder. A later rule skips positions whose best move doesn’t come out ahead in win or gammon chances, in the whole percentages players see. Analysis moved from 2-ply to 3-ply after comparing the two on the first 22 puzzles.',
      result: 'At 3-ply the best move changed on 2 of the 22 puzzles, and both were near-ties of the kind the new rule now skips. Picking a puzzle at 3-ply took 12 to 62 seconds per date in testing, against 1 to 3 seconds at 2-ply.',
    },
    {
      title: 'Keeping the explanations grounded',
      problem: 'An LLM explaining a backgammon move can invent figures or describe the position wrongly. A review of the first 10 explanations found the numbers accurate but one description wrong: it said a move added a checker to the 4-point, when it slotted an empty 4-point and gave up the 6-point. Others listed statistics without saying why the best move was better.',
      approach: 'Every number in an answer must appear in the facts, apart from “of 36” for the rolls in a turn. Wording that implies a change (“raises”, “cuts”, “from 50% to 55%”) is rejected, because the facts compare two moves rather than a before and after. The next best move must be written in its exact notation. A rejected answer is retried once with the reason. If only the headline fails, the text is kept; if both attempts fail, the puzzle keeps a placeholder and later runs try again. The facts gained points given up and slotted, and an “edge” saying where the best move comes out ahead.',
      result: 'All 24 puzzles generated so far have an explanation with a headline. The checks caught real failures during development, including a headline over the 40-character limit that failed a scheduled run, and a next best move written as “8/6” instead of “bar/20 8/6”.',
    },
    {
      title: 'Publishing on time in every time zone',
      problem: 'A date’s puzzle must be live before that date starts in UTC+14, which is 10:00 UTC the day before. GitHub often starts scheduled runs hours late and occasionally skips one. Puzzle numbers must have no gaps, or streaks break.',
      approach: 'Four scheduled runs a day (06:00, 08:00, 12:00 and 16:00 UTC), most of which find nothing due. Each run writes every unpublished date up to tomorrow in UTC+14, so a rerun writes nothing and a missed run is caught up by the next. Tests run before anything is committed, and if generating fails partway, the dates already finished are still published.',
      result: 'The 24 puzzles are numbered 1 to 24 with no gaps, and a test fails the build if a gap or repeat appears.',
    },
    {
      title: 'Keeping future answers private',
      problem: 'Puzzles are generated about two days ahead and were deployed as public files, so tomorrow’s answer could be read at a predictable address.',
      approach: 'Removing future files at deploy time failed on timing: a puzzle has to be live by 10:00 UTC the day before, and late scheduled runs could miss that. A Function checking each request was the next attempt, but local testing showed encoded addresses such as /%70uzzles/ reached the static files without passing through it. The final design moves every puzzle dated after today out of the public files at deploy and bundles them into the Function, which serves each one once its date has started somewhere, with 10 minutes’ grace for fast clocks. A generated _routes.json sends only those dates to the Function, so earlier puzzles stay static.',
      result: 'On the QA site, the next day’s puzzle returned 404 for its plain and encoded addresses at 00:29 UTC, and was served from the Function after it unlocked, by 14:47 UTC.',
    },
  ],
  results: [
    '23 puzzles published daily from 30 October to 21 November 2026, numbered without gaps.',
    'Every legal move graded: 6 to 40 per puzzle, 407 in total.',
    'All generated puzzles have a checked explanation; none currently shows the placeholder.',
    'Future puzzles are deployed early but unreadable until their date starts.',
    '192 automated tests across the pipeline and frontend.',
  ],
};
