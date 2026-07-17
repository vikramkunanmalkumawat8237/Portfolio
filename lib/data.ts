import type {
  CertificationEntry,
  EducationEntry,
  ExperienceEntry,
  SkillGroup,
  SocialLink,
  StatEntry,
} from "@/types";

export const profile = {
  name: "Vikram Kumawat",
  initials: "VK",
  headline: "Audit Associate at PwC India",
  subHeadline: "CA Final Candidate · Finance · AI · Analytics",
  location: "Pune, India",
  email: "vikramkunanmalkumawat@gmail.com",
  phone: "+91 82373 63459",
  heroIntro:
    "I'm an Audit Associate at PwC India and a CA Final candidate working at the intersection of finance, technology, and problem-solving — auditing large listed entities by day, and building automation and analytics tools that make the numbers move faster.",
  aboutStory: [
    "My journey began with Chartered Accountancy, where I built a strong foundation in accounting, auditing, financial reporting, and business analysis. At PwC India, I've worked on statutory audits for large organizations, collaborated across cross-functional teams, and learned how businesses actually operate at scale — not just how they report it.",
    "Alongside finance, I've developed a real interest in technology. I spend time learning Python, SQL, Power BI, and applied AI, because I believe the next generation of finance professionals will be the ones who can combine financial judgment with technical fluency. I build small automation tools on the side and study investment banking, consulting, and quantitative finance in parallel.",
    "I'm currently looking for opportunities to solve harder business problems, work with high-performing teams, and keep growing across finance, strategy, analytics, and technology.",
  ],
  goal:
    "Building a career in finance while continuously sharpening technical skills in AI, Python, data analytics, and financial modelling — aiming for roles at the intersection of FP&A, strategy, and technology.",
  values: [
    {
      title: "Continuous Learning",
      description: "Learn something valuable every day, on and off the balance sheet.",
    },
    {
      title: "Ownership",
      description: "Take responsibility from idea to execution — no handoffs, no excuses.",
    },
    {
      title: "Problem Solving",
      description: "Favor practical solutions with measurable, auditable impact.",
    },
    {
      title: "Curiosity",
      description: "Always ask why before deciding how.",
    },
  ],
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vikram-kumawat8237",
    handle: "vikram-kumawat8237",
  },
  {
    label: "GitHub",
    href: "https://github.com/vikramkunanmalkumawat8237",
    handle: "vikramkunanmalkumawat8237",
  },
  {
    label: "Email",
    href: "mailto:vikramkunanmalkumawat@gmail.com",
    handle: "vikramkunanmalkumawat@gmail.com",
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Price Waterhouse Chartered Accountants LLP (PwC India)",
    role: "Statutory Audit — Articleship",
    duration: "Aug 2025 — Present",
    location: "Pune, India",
    blurb:
      "Independently covering a manufacturing plant with revenue in excess of ₹1,000 crore, end to end.",
    responsibilities: [
      "Single-handedly cover an individual plant generating ₹1,000+ crore in revenue across Revenue, PP&E, Cost of Sales, and Trade Payables.",
      "Perform end-to-end audit procedures — risk assessment, control testing, and variance analysis — across Revenue, PP&E, Cost of Sales, Accruals, Payroll, and Trade Payables.",
      "Ensure compliance with relevant Ind AS and statutes across Inventory Valuation & Provisioning, CARO reporting, Employee Benefit Expenses, and Leases.",
      "Applied the 5-step Ind AS 115 model to a multi-year software licensing contract — performance obligation identification, SSP allocation, and milestone-based recognition.",
      "Led Domestic Value Addition (DVA) certification across product categories under the Government of India's PLI scheme for Advanced Automotive Technology products.",
    ],
    achievements: [
      "Programmed a Python script for purchase and tax reconciliation that cut reconciliation time by roughly 75%.",
      "Built analytical overviews of Unearned Revenue, Statutory Dues, and Payroll for a listed client using Python and Power BI.",
      "Used ratio, trend, and gross-margin variance analysis across segments to cut substantive testing sample size by ~22% — a leaner, evidence-based approach to diligence work.",
    ],
    tech: ["Python", "Power BI", "Power Query", "Advanced Excel (VBA, XLOOKUP)", "Ind AS", "CARO"],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Finance & Capital Markets",
    items: ["Valuation", "DCF Modelling", "Comparable Company Analysis", "LBO", "M&A Structuring", "Ratio Analysis"],
  },
  {
    category: "Accounting & Compliance",
    items: ["Ind AS", "Statutory Audit", "Internal Audit", "Internal Controls", "Risk Assessment", "Financial Reporting"],
  },
  {
    category: "Programming & Analytics",
    items: ["Python", "SQL", "Power BI", "Power Query", "Power Pivot", "Power Automate"],
  },
  {
    category: "Tools",
    items: ["Advanced Excel (VBA, XLOOKUP)", "Tally Prime", "PowerPoint", "MS Office"],
  },
  {
    category: "Soft Skills",
    items: ["Ownership", "Cross-functional Collaboration", "Client Communication", "Team Leadership"],
  },
];

export const certifications: CertificationEntry[] = [
  {
    name: "NISM Series XV — Research Analyst",
    issuer: "National Institute of Securities Markets",
    note: "Certification in equity research methodology, valuation, and analyst conduct standards.",
  },
  {
    name: "NISM Series VIII — Equity Derivatives",
    issuer: "National Institute of Securities Markets",
    note: "Certification covering derivatives markets, futures & options mechanics, and risk management.",
  },
  {
    name: "Financial Modelling & Valuation",
    issuer: "Parth Verma",
    note: "3-statement modelling, DCF, LBO, comps, and M&A deal structuring — integrated models built from scratch.",
  },
  {
    name: "Valuation",
    issuer: "Prof. Aswath Damodaran, NYU Stern",
    note: "ERP estimation, WACC derivation, and narrative-to-numbers valuation for Indian and global equities.",
  },
  {
    name: "AI in Finance",
    issuer: "CA Monk",
    note: "Applied AI tooling and workflows for modern finance and audit functions.",
  },
  {
    name: "Excel Skills for Business Specialization",
    issuer: "Macquarie University (28 hrs)",
    note: "Advanced Excel for financial analysis, modelling, and business decision-making.",
  },
];

export const education: EducationEntry[] = [
  {
    course: "CA Intermediate (Both Groups)",
    institution: "ICAI",
    year: "Jan 2025",
    marks: "391/600 (65.16%)",
    remark: "Exemption in 3 subjects · Cleared by self-study",
  },
  {
    course: "CA Foundation",
    institution: "ICAI",
    year: "Dec 2023",
    marks: "311/400 (77.75%)",
    remark: "Cleared in first attempt · Self-study",
  },
  {
    course: "B.Com",
    institution: "Pune University",
    year: "2023 — 2026",
    marks: "8.64 CGPA (82.08%)",
  },
  {
    course: "Class XII (HSC Board)",
    institution: "Maharashtra HSC Board, Pune",
    year: "Mar 2023",
    marks: "530/600 (88.33%)",
    remark: "99 in Mathematics · 98 in Accounts",
  },
  {
    course: "Class X (SSC Board)",
    institution: "Maharashtra SSC Board, Pune",
    year: "Mar 2021",
    marks: "403/500 (80.6%)",
  },
];

export const stats: StatEntry[] = [
  {
    value: "₹1,000+ Cr",
    label: "Plant Revenue Audited",
    detail: "Independently covering Revenue, PP&E, Cost of Sales & Trade Payables",
  },
  {
    value: "75%",
    label: "Reconciliation Time Saved",
    detail: "Via a self-built Python script for purchase & tax reconciliation",
  },
  {
    value: "22%",
    label: "Smaller Sample Size",
    detail: "Cut in substantive testing through ratio & variance analysis",
  },
  {
    value: "6",
    label: "Certifications Completed",
    detail: "Across valuation, financial modelling, derivatives & AI in finance",
  },
];

export const leadership = [
  {
    title: "Head Boy",
    org: "VNS School, Pune",
    points: [
      "Ensured compliance with school rules and regulations across the student body.",
      "Conducted awareness programs for COVID-19 vaccination drives.",
    ],
  },
  {
    title: "Team Lead, Finance Case Competition",
    org: "CRISIL",
    points: [
      "Led a 3-member team; the team's strategic approach placed in the top 10% of participants.",
    ],
  },
];
