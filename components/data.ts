// All content below is sample copy. Replace it with your own.

export const profile = {
  name: "Soren Hale",
  role: "Frontend Developer",
  email: "hello@sorenhale.dev",
  location: "Remote · UTC+1",
};

export type Project = {
  no: string;
  title: string;
  summary: string;
  metricLabel: string;
  before: string;
  after: string;
  beforePct: number;
  afterPct: number;
  problem: string;
  approach: string;
  result: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    no: "01",
    title: "Checkout rebuild for a fintech app",
    summary: "A slow, brittle checkout flow turned into a fast, accessible one that converts.",
    metricLabel: "Largest Contentful Paint",
    before: "4.8s",
    after: "1.2s",
    beforePct: 96,
    afterPct: 24,
    problem: "Heavy client bundles and layout shifts were costing sales on mid-range phones.",
    approach: "Server components, streaming, route-level code splitting and an image budget.",
    result: "Faster pages, +18% completed checkouts, and a clean accessibility audit.",
    tags: ["Next.js", "TypeScript", "Stripe", "Playwright"],
  },
  {
    no: "02",
    title: "Design system for a SaaS platform",
    summary: "One component library shared across five product teams.",
    metricLabel: "UI code duplicated",
    before: "63%",
    after: "9%",
    beforePct: 63,
    afterPct: 9,
    problem: "Five products shipped five versions of every button, modal and table.",
    approach: "Tokens, headless primitives, Storybook docs and automated visual regression.",
    result: "Teams ship screens in days instead of weeks with consistent behaviour.",
    tags: ["React", "Storybook", "CSS variables", "Chromatic"],
  },
  {
    no: "03",
    title: "Analytics dashboard performance",
    summary: "A data-heavy dashboard that stays smooth with a million rows.",
    metricLabel: "Interaction to Next Paint",
    before: "620ms",
    after: "84ms",
    beforePct: 90,
    afterPct: 12,
    problem: "Filtering froze the main thread and the charts re-rendered constantly.",
    approach: "Virtualized tables, web workers for aggregation and memoized chart layers.",
    result: "Instant filtering and a dashboard people actually leave open all day.",
    tags: ["React", "Web Workers", "D3", "Vite"],
  },
];

export const scores = [
  { label: "Performance", value: 100 },
  { label: "Accessibility", value: 100 },
  { label: "Best practices", value: 100 },
  { label: "SEO", value: 100 },
];

export const vitals = [
  { k: "LCP", v: "1.1s" },
  { k: "INP", v: "84ms" },
  { k: "CLS", v: "0.01" },
];

export const stack = [
  { key: "React", sub: "UI", title: "React", text: "Component-driven interfaces with hooks, context and server components. My default for anything interactive." },
  { key: "Next", sub: "Framework", title: "Next.js", text: "App Router, streaming and static generation. Fast by default, flexible when a page needs to be dynamic." },
  { key: "TS", sub: "Language", title: "TypeScript", text: "Strict types catch bugs before users do and make big refactors calm instead of scary." },
  { key: "Motion", sub: "Animation", title: "Framer Motion", text: "Layout animations, gestures and scroll effects that feel physical and respect reduced-motion settings." },
  { key: "CSS", sub: "Styling", title: "Modern CSS", text: "Grid, container queries, custom properties and clamp(). Less JavaScript, more resilient layouts." },
  { key: "Node", sub: "Runtime", title: "Node.js", text: "API routes, tooling and the occasional backend-for-frontend when a UI needs its own server." },
  { key: "GQL", sub: "Data", title: "GraphQL", text: "Typed queries, fragments colocated with components and caching that stays out of the way." },
  { key: "E2E", sub: "Testing", title: "Playwright", text: "End-to-end tests for the flows that matter, plus visual checks that guard the design system." },
  { key: "Vite", sub: "Tooling", title: "Vite", text: "Instant dev servers and lean builds for apps that don't need a full framework." },
  { key: "Figma", sub: "Design", title: "Figma", text: "I read designs closely and talk to designers early, so what ships matches what was imagined." },
  { key: "SB", sub: "Docs", title: "Storybook", text: "Living documentation for components, with states and accessibility checks in one place." },
  { key: "a11y", sub: "Craft", title: "Accessibility", text: "Semantic HTML, keyboard paths and contrast checked from the first commit, not the last." },
];

export const commits = [
  {
    hash: "a3f9c21",
    date: "2025 — now",
    title: "feat: lead frontend at Northwind Labs",
    text: "Own the web platform, performance budgets and the design system across five teams.",
    head: true,
  },
  {
    hash: "7be10d4",
    date: "2022 — 2025",
    title: "perf: senior engineer at Brightpath",
    text: "Rebuilt the customer app in Next.js and cut median load time by more than half.",
  },
  {
    hash: "c51a88e",
    date: "2020 — 2022",
    title: "feat: frontend developer at Pixelcraft Studio",
    text: "Shipped marketing sites and web apps for startups, from first prototype to launch.",
  },
  {
    hash: "09d2f6b",
    date: "2018 — 2020",
    title: "init: BSc Computer Science",
    text: "Graduated with a focus on human-computer interaction. First commit to a lifelong side project.",
  },
];

export const reviews = [
  {
    file: "checkout/Summary.tsx · L42",
    del: "- const total = items.reduce(sum)",
    add: "+ const total = useMemo(() => sum(items), [items])",
    quote: "Soren's PRs are the ones I look forward to reviewing. Small, clear and always faster than what they replaced.",
    name: "Maya Okafor",
    role: "Engineering Manager",
  },
  {
    file: "ui/Dialog.tsx · L17",
    del: "- <div onClick={close}>",
    add: "+ <button type=\"button\" onClick={close}>",
    quote: "Accessibility stopped being a ticket and became a habit on our team the month Soren joined.",
    name: "Daniel Reyes",
    role: "Staff Designer",
  },
  {
    file: "dashboard/Table.tsx · L88",
    del: "- rows.map(renderRow)",
    add: "+ <VirtualList rows={rows} />",
    quote: "Took our slowest screen and made it feel instant. Explained every trade-off along the way.",
    name: "Priya Nair",
    role: "Product Lead",
  },
];

export const needs = ["Website", "Web app", "Design system", "Performance audit", "Consulting"];
export const budgets = ["< $5k", "$5k – $15k", "$15k – $40k", "$40k +"];
