export const profile = {
  name: "Adil Shaikh",
  role: "Senior Software Engineer at Bayer",
  intro:
    "I build crop planning software used across Bayer, and I ship my own products on the side.",
  email: "shaikhadil881@gmail.com",
  github: "https://github.com/adilshaikh77",
  linkedin: "https://www.linkedin.com/in/adil-shaikh-7313b91a1",
};

export const work = {
  title: "Crop planning at Bayer",
  summary:
    "Before a crop goes in the ground, someone plans where, when and how. Each organisation inside Bayer plans differently, with its own windows, checks and approvals.",
  points: [
    "Helped architect and rebuild a major planning application around a rules engine, so each organisation gets the rules it needs without a fork of the code.",
    "Own four applications across a large part of the crop planning pipeline: the code, the observability and the maintenance.",
    "Sit with the people who plan crops to understand what they need, then turn that into features.",
  ],
  stats: [
    { value: "3x", label: "user growth the rebuilt integrations support" },
    { value: "50%", label: "faster incident response after new monitoring" },
    { value: "40%", label: "less time per deploy after CI/CD work on AWS" },
  ],
};

export type Org = { name: string; note: string; rules: Record<string, string | null> };

// Illustration only. The real rules are internal.
export const rules = ["Planting window", "Seed density", "Trial sites", "Approval chain", "Regional compliance"];

export const orgs: Org[] = [
  {
    name: "Org A",
    note: "Large scale, few approvals",
    rules: {
      "Planting window": "Mar 10 to Apr 20",
      "Seed density": "80k per ha",
      "Trial sites": "3 per region",
      "Approval chain": "1 step",
      "Regional compliance": null,
    },
  },
  {
    name: "Org B",
    note: "Regulated market",
    rules: {
      "Planting window": "Apr 1 to May 5",
      "Seed density": "72k per ha",
      "Trial sites": null,
      "Approval chain": "3 steps",
      "Regional compliance": "Required",
    },
  },
  {
    name: "Org C",
    note: "Research heavy",
    rules: {
      "Planting window": null,
      "Seed density": "Per trial",
      "Trial sites": "12 per region",
      "Approval chain": "2 steps",
      "Regional compliance": "Required",
    },
  },
];

export const experience = [
  { role: "Senior Software Engineer", when: "Nov 2025 to now", text: "Lead technical design for the planning platform and present architecture to senior leadership." },
  { role: "Software Engineer II", when: "Nov 2024 to Nov 2025", text: "Built micro frontend modules in React and TypeScript, GraphQL and REST integrations, and mentored junior engineers." },
  { role: "Software Engineer", when: "Aug 2022 to Nov 2024", text: "Full stack work on React, Node.js, PostgreSQL and AWS for platforms used by over 1,000 people." },
  { role: "Intern", when: "Mar 2022 to Aug 2022", text: "Built a full stack internal app in Node.js. Hired full time after six months." },
];

export const projects = {
  wordforit: {
    name: "word for it",
    url: "https://wordforit.app",
    text: "A private mood journal. You check in with a broad feeling and a precise word, then see patterns across weeks and months. I designed, built and shipped it on my own, as an Android app and a web app hosted in the EU.",
    stack: ["Next.js", "TypeScript", "Capacitor", "Supabase"],
    shots: [
      { src: "/wordforit/checkin.jpg", alt: "word for it home screen asking how are you right now, with six mood options" },
      { src: "/wordforit/patterns.jpg", alt: "Patterns screen with check in counts and a mood mix by percentage" },
      { src: "/wordforit/calendar.jpg", alt: "History calendar showing a year of colour coded mood check ins" },
    ],
  },
  others: [
    {
      name: "High fidelity PDF export",
      url: "https://github.com/adilshaikh77/pdf-export-library",
      text: "Built to help a friend who needed parts of a web page as PDFs. Printing lost the form values and fonts, so this TypeScript library keeps form values, custom fonts, images and selectable text, in the browser or on a server with Puppeteer.",
      stack: ["TypeScript", "Puppeteer"],
    },
    {
      name: "Desktop assistant",
      url: "https://github.com/adilshaikh77/desktop_assistant",
      text: "My bachelor's thesis in AI, from early 2022. A voice assistant in Python that listened, answered from Wikipedia and Wolfram Alpha, and opened apps. My first try at building an agent, before AI assistants were everywhere.",
      stack: ["Python", "Speech recognition"],
    },
  ],
};

export const stack = [
  { group: "Frontend", items: ["React", "TypeScript", "Next.js", "Micro frontends"] },
  { group: "Backend", items: ["Node.js", "GraphQL", "REST", "PostgreSQL", "Python"] },
  { group: "Cloud", items: ["AWS ECS and Lambda", "DynamoDB", "CloudFormation", "Docker"] },
  { group: "Observability", items: ["Datadog", "CloudWatch", "PagerDuty"] },
];

export const about =
  "I studied computer science with a focus on AI at Vistula University in Warsaw. Most of my job now is understanding what planners and stakeholders need, then writing the code that makes their work simpler. I use AI tools daily and I still read every diff.";
